import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useCombobox } from "downshift";
import classNames from "classnames";
import { useCunningham } from ":/components/Provider";
import {
  getOptionsFilter,
  optionToString,
  optionToValue,
  SelectMonoAux,
  SubProps,
} from ":/components/Forms/Select/mono-common";
import {
  CallbackFetchOptions,
  Option,
  SelectHandle,
  SelectMonoProps,
} from ":/components/Forms/Select";
import { isOptionWithRender } from ":/components/Forms/Select/utils";
import { Loader } from ":/components/Loader";

type SelectMonoSearchableType = SubProps & SelectMonoProps;

export type UpdateArrayOptionsType = (
  search?: string | number,
) => Promise<Option[]>;

export const SelectMonoSearchable = forwardRef<
  SelectHandle,
  SelectMonoSearchableType
>(({ showLabelWhenSelected = true, ...props }, ref) => {
  const { t } = useCunningham();

  const [arrayOptions, setArrayOptions] = useState<Option[]>(
    Array.isArray(props.options) ? props.options : [],
  );
  const [hasInputFocused, setHasInputFocused] = useState(false);
  const [inputFilter, setInputFilter] = useState<string>();
  const inputRef = useRef<HTMLInputElement>(null);
  const downshiftReturn = useCombobox({
    ...props.downshiftProps,
    items: arrayOptions,
    itemToString: optionToString,
    onInputValueChange: (e) => {
      setInputFilter(e.inputValue);
      if (!e.inputValue) {
        downshiftReturn.selectItem(null);
      }
    },
  });
  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(
    !downshiftReturn.selectedItem,
  );

  const updateArrayOptions: UpdateArrayOptionsType = async (search) => {
    const options = await (props.options as CallbackFetchOptions)({ search });

    if (Array.isArray(options)) {
      setArrayOptions(options);
    }

    return options;
  };

  const updateArrayOptionsAndDefaultOption = async (
    defaultValue: Option["value"],
  ) => {
    const options = await updateArrayOptions(defaultValue);
    let defaultOption;

    if (Array.isArray(options)) {
      defaultOption = options.find(
        (option) => String(option.value) === defaultValue,
      );
    }

    if (defaultOption) {
      downshiftReturn.selectItem(defaultOption);
    }
  };

  const onInputBlur = () => {
    setHasInputFocused(false);
    if (downshiftReturn.selectedItem) {
      // Here the goal is to make sure that when the input in blurred then the input value
      // has exactly the selectedItem label. Which is not the case by default.
      downshiftReturn.selectItem(downshiftReturn.selectedItem);
    } else {
      // We want the input to be empty when no item is selected.
      downshiftReturn.setInputValue("");
    }
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof inputProps.onChange === "function") {
      inputProps.onChange(event);
    }

    if (isAsyncOptionsFetching) {
      updateArrayOptions(event.target.value);
    }
  };

  const inputProps = downshiftReturn.getInputProps({
    ref: inputRef,
    disabled: props.disabled,
  });

  const renderCustomSelectedOption = !showLabelWhenSelected;

  const isAsyncOptionsFetching = typeof props.options === "function";

  useEffect(() => {
    if (!isAsyncOptionsFetching) {
      return;
    }

    let search;

    if (props.defaultValue) {
      search = String(props.defaultValue);
    }

    if (props.value) {
      search = String(props.value);
    }

    updateArrayOptionsAndDefaultOption(search);
  }, []);

  useEffect(() => {
    if (hasInputFocused || downshiftReturn.inputValue) {
      setLabelAsPlaceholder(false);
      return;
    }
    setLabelAsPlaceholder(!downshiftReturn.selectedItem);
  }, [
    downshiftReturn.selectedItem,
    hasInputFocused,
    downshiftReturn.inputValue,
  ]);

  // Similar to: useKeepSelectedItemInSyncWithOptions ( see docs )
  // The only difference is that it does not apply when there is an inputFilter. ( See below why )
  useEffect(() => {
    // If there is an inputFilter, using selectItem will trigger onInputValueChange that will sets inputFilter to
    // empty, and then ignoring the existing filter and displaying all options.
    if (inputFilter) {
      return;
    }

    // this block will not be triggered when component uses options fetching (otherwise it will conflict with the value
    // passed to onInputChange)
    const selectedItem = downshiftReturn.selectedItem
      ? optionToValue(downshiftReturn.selectedItem)
      : undefined;

    const optionToSelect = arrayOptions.find(
      (option) => optionToValue(option) === props.value,
    );

    // Already selected
    if (optionToSelect && selectedItem === props.value) {
      return;
    }

    downshiftReturn.selectItem(optionToSelect ?? null);
  }, [props.value]);

  // Even there is already a value selected, when opening the combobox menu we want to display all available choices.
  useEffect(() => {
    props.onSearchInputChange?.({ target: { value: inputFilter } });

    if (downshiftReturn.isOpen) {
      if (Array.isArray(props.options)) {
        const arrayFilteredOptions = inputFilter
          ? props.options.filter(getOptionsFilter(inputFilter))
          : props.options;

        setArrayOptions(arrayFilteredOptions);
      }
    } else {
      setInputFilter(undefined);
    }
  }, [downshiftReturn.isOpen, props.options, inputFilter]);

  useImperativeHandle(ref, () => ({
    blur: () => {
      downshiftReturn.closeMenu();
      inputRef.current?.blur();
    },
  }));

  return (
    <SelectMonoAux
      {...props}
      disabled={props.isLoading || props.disabled}
      downshiftReturn={{
        ...downshiftReturn,
        wrapperProps: {
          onClick: () => {
            inputRef.current?.focus();
            // This is important because if we don't check that: when clicking on the toggle button
            // when the menu is open, it will close and reopen immediately.
            if (!downshiftReturn.isOpen) {
              downshiftReturn.openMenu();
            }
          },
        },
        toggleButtonProps: downshiftReturn.getToggleButtonProps({
          disabled: props.disabled,
          "aria-label": t("components.forms.select.toggle_button_aria_label"),
        }),
      }}
      labelAsPlaceholder={labelAsPlaceholder}
      options={arrayOptions}
      updateArrayOptions={
        isAsyncOptionsFetching ? updateArrayOptions : undefined
      }
    >
      <input
        {...inputProps}
        className={classNames({
          "c__select__inner__value__input--hidden":
            renderCustomSelectedOption && !hasInputFocused,
        })}
        onFocus={() => {
          setHasInputFocused(true);
        }}
        onBlur={() => {
          onInputBlur();
        }}
        onChange={onInputChange}
      />

      {renderCustomSelectedOption &&
        !hasInputFocused &&
        downshiftReturn.selectedItem &&
        isOptionWithRender(downshiftReturn.selectedItem) &&
        downshiftReturn.selectedItem.render()}

      {props?.isLoading === true ? (
        <div className="c__select__loader">
          <Loader
            aria-label={t("components.forms.select.loader_aria")}
            size="small"
          />
        </div>
      ) : null}
    </SelectMonoAux>
  );
});

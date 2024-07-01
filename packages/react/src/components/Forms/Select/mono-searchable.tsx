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
} from ":/components/Forms/Select";
import { isOptionWithRender } from ":/components/Forms/Select/utils";
import { Loader } from ":/components/Loader";

export const SelectMonoSearchable = forwardRef<SelectHandle, SubProps>(
  ({ showLabelWhenSelected = true, ...props }, ref) => {
    const { t } = useCunningham();

    const [optionsToDisplay, setOptionsToDisplay] = useState<Option[]>(
      Array.isArray(props.options) ? props.options : [],
    );
    const [hasInputFocused, setHasInputFocused] = useState(false);
    const [isFetchingInitialOptions, setIsFetchingInitialOptions] =
      useState(false);
    const [inputFilter, setInputFilter] = useState<string>();
    const inputRef = useRef<HTMLInputElement>(null);
    const downshiftReturn = useCombobox({
      ...props.downshiftProps,
      items: optionsToDisplay,
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

    const computeOptionsToDisplay = async (
      search: string,
    ): Promise<Option[]> => {
      const options = await (props.options as CallbackFetchOptions)({ search });

      if (Array.isArray(options)) {
        setOptionsToDisplay(options);
      }

      return options;
    };

    const computeOptionsToDisplayAndDefaultOption = async (
      defaultValue: Option["value"],
    ) => {
      if (defaultValue === undefined) {
        return;
      }

      const options = await computeOptionsToDisplay(defaultValue);

      if (Array.isArray(options)) {
        if (defaultValue) {
          const defaultOption = options.find(
            (option) => String(option.value) === defaultValue,
          );

          if (defaultOption) {
            downshiftReturn.selectItem(defaultOption);
          }
        }
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
        computeOptionsToDisplay(event.target.value);
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

      setIsFetchingInitialOptions(true);
      let search = props.defaultValue ? String(props.defaultValue) : "";

      // a controlled select can not use props.defaultValue and props.value at the same time
      if (!props.defaultValue) {
        search = props.value ? String(props.value) : "";
      }

      computeOptionsToDisplayAndDefaultOption(search);

      setIsFetchingInitialOptions(false);
    }, []);

    useEffect(() => {
      if (isAsyncOptionsFetching) {
        const toggleMenu = props.isLoading
          ? () => downshiftReturn.closeMenu()
          : () => downshiftReturn.openMenu();

        toggleMenu();
      }
    }, [props.isLoading]);

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
      if (Array.isArray(props.options)) {
        const selectedItem = downshiftReturn.selectedItem
          ? optionToValue(downshiftReturn.selectedItem)
          : undefined;

        const optionToSelect = props.options.find(
          (option) => optionToValue(option) === props.value,
        );

        // Already selected
        if (optionToSelect && selectedItem === props.value) {
          return;
        }

        downshiftReturn.selectItem(optionToSelect ?? null);
      }
    }, [props.value, props.options, inputFilter]);

    useEffect(() => {
      if (!isAsyncOptionsFetching) {
        return;
      }

      const selectedItem = downshiftReturn.selectedItem
        ? optionToValue(downshiftReturn.selectedItem)
        : undefined;

      const optionToSelect = optionsToDisplay.find(
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

          setOptionsToDisplay(arrayFilteredOptions);
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
        disabled={isFetchingInitialOptions || props.disabled}
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
        options={optionsToDisplay}
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
  },
);

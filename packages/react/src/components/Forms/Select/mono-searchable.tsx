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
  ContextCallbackFetchOptions,
  Option,
  SelectHandle,
} from ":/components/Forms/Select";
import { isOptionWithRender } from ":/components/Forms/Select/utils";

// https://react.dev/learn/you-might-not-need-an-effect#sharing-logic-between-event-handlers
let previousSearch: string | undefined;
let previousInputFilter: string | undefined;
export const SelectMonoSearchable = forwardRef<SelectHandle, SubProps>(
  ({ showLabelWhenSelected = true, ...props }, ref) => {
    const { t } = useCunningham();

    const [optionsToDisplay, setOptionsToDisplay] = useState<Option[]>(
      Array.isArray(props.options) ? props.options : [],
    );
    const [hasInputFocused, setHasInputFocused] = useState(false);
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
      context: ContextCallbackFetchOptions,
    ): Promise<void> => {
      const arrayOptions = await fetchOptions(context);

      setOptionsToDisplay(Array.isArray(arrayOptions) ? arrayOptions : []);
    };

    const fetchOptions = async (
      context: ContextCallbackFetchOptions,
    ): Promise<Option[]> => (props.options as CallbackFetchOptions)(context);

    const computeInitialOptionToSelect = async (defaultValue: string) => {
      const arrayOptions = await fetchOptions({
        search: defaultValue,
      });

      const defaultOption = arrayOptions.find(
        (option) => String(option.value) === props.defaultValue,
      );

      if (defaultOption) {
        downshiftReturn.selectItem(defaultOption);
      }
    };

    const computeInitialOption = async (
      defaultValue: string,
    ): Promise<void> => {
      const arrayOptions = await fetchOptions({
        search: "",
      });

      if (arrayOptions) {
        setOptionsToDisplay(arrayOptions);

        const defaultOption = defaultValue
          ? arrayOptions.find((option) => String(option.value) === defaultValue)
          : undefined;

        if (defaultOption) {
          downshiftReturn.selectItem(defaultOption);
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

    const inputProps = downshiftReturn.getInputProps({
      ref: inputRef,
      disabled: props.disabled,
    });

    const renderCustomSelectedOption = !showLabelWhenSelected;

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

    // When component is controlled, this useEffect will update the local selected item.
    useEffect(() => {
      if (
        typeof props.defaultValue === "string" &&
        typeof props.options === "function"
      ) {
        (async () => {
          await computeInitialOptionToSelect(String(props.defaultValue));
        })();
      }
    }, []);

    // Similar to: useKeepSelectedItemInSyncWithOptions ( see docs )
    // The only difference is that it does not apply when there is an inputFilter. ( See below why )
    useEffect(() => {
      // If there is an inputFilter, using selectItem will trigger onInputValueChange that will sets inputFilter to
      // empty, and then ignoring the existing filter and displaying all options.
      if (inputFilter) {
        return;
      }

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

    // Even there is already a value selected, when opening the combobox menu we want to display all available choices.
    useEffect(() => {
      if (previousInputFilter !== inputFilter) {
        props.onSearchInputChange?.({ target: { value: inputFilter } });
        previousInputFilter = inputFilter;
      }

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

      if (typeof props.options === "function") {
        let fetchOptionsCallback = async ({ search }: { search: string }) =>
          computeOptionsToDisplay({ search });

        const isInitialSearch =
          inputFilter === undefined && previousSearch === undefined;

        const isInputFilterTouched = inputFilter !== undefined;

        let currentSearch;

        if (isInitialSearch) {
          currentSearch = props.defaultValue ? String(props.defaultValue) : "";

          fetchOptionsCallback = async ({ search }: { search: string }) =>
            computeInitialOption(search);
        } else {
          currentSearch = inputFilter ? String(inputFilter) : "";
        }

        const isNewSearch = previousSearch !== currentSearch;

        if ((isNewSearch && isInputFilterTouched) || isInitialSearch) {
          (async () => {
            await fetchOptionsCallback({ search: currentSearch });
          })();
          previousSearch = currentSearch;
        }
      }
    }, [
      downshiftReturn.isOpen,
      props.options,
      inputFilter,
      props.defaultValue,
    ]);

    useImperativeHandle(ref, () => ({
      blur: () => {
        downshiftReturn.closeMenu();
        inputRef.current?.blur();
      },
    }));

    return (
      <SelectMonoAux
        {...props}
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
        />

        {renderCustomSelectedOption &&
          !hasInputFocused &&
          downshiftReturn.selectedItem &&
          isOptionWithRender(downshiftReturn.selectedItem) &&
          downshiftReturn.selectedItem.render()}
      </SelectMonoAux>
    );
  },
);

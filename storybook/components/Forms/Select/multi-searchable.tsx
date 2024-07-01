import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useCombobox, useMultipleSelection } from "downshift";
import { optionToString } from ":/components/Forms/Select/mono-common";
import {
  getMultiOptionsFilter,
  SelectMultiAux,
  SubProps,
} from ":/components/Forms/Select/multi-common";
import { SelectHandle } from ":/components/Forms/Select/index";

export const SelectMultiSearchable = forwardRef<SelectHandle, SubProps>(
  (props, ref) => {
    const [inputValue, setInputValue] = React.useState<string>();
    const inputRef = useRef<HTMLInputElement>(null);
    const options = React.useMemo(
      () =>
        props.options.filter(
          getMultiOptionsFilter(props.selectedItems, inputValue),
        ),
      [props.selectedItems, inputValue],
    );
    const [hasInputFocused, setHasInputFocused] = useState(false);
    const useMultipleSelectionReturn = useMultipleSelection({
      selectedItems: props.selectedItems,
      onStateChange({ selectedItems: newSelectedItems, type }) {
        switch (type) {
          case useMultipleSelection.stateChangeTypes
            .SelectedItemKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
          case useMultipleSelection.stateChangeTypes.DropdownKeyDownBackspace:
          case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
            props.onSelectedItemsChange(newSelectedItems ?? []);
            break;
          default:
            break;
        }
      },
    });
    const downshiftReturn = useCombobox({
      items: options,
      itemToString: optionToString,
      defaultHighlightedIndex: 0, // after selection, highlight the first item.
      selectedItem: null, // Important, without this we are not able to re-select the last removed option.
      stateReducer: (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges;
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
              highlightedIndex: 0, // with the first option highlighted.
            };
          default:
            return changes;
        }
      },
      onStateChange: ({
        inputValue: newInputValue,
        type,
        selectedItem: newSelectedItem,
      }) => {
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            if (newSelectedItem && !newSelectedItem.disabled) {
              props.onSelectedItemsChange([
                ...props.selectedItems,
                newSelectedItem,
              ]);
              setInputValue(undefined);
            }
            break;
          case useCombobox.stateChangeTypes.InputChange:
            setInputValue(newInputValue);
            break;
          default:
            break;
        }
      },
      isItemDisabled: (item) => !!item.disabled,
    });

    const inputProps = downshiftReturn.getInputProps({
      ...useMultipleSelectionReturn.getDropdownProps({
        preventKeyAction: downshiftReturn.isOpen,
        ref: inputRef,
        disabled: props.disabled,
      }),
      value: inputValue,
    });
    // We want to extend the default behavior of the input onKeyDown.
    const { onKeyDown } = inputProps;
    inputProps.onKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
      switch (event.code) {
        case "Backspace":
          if (!inputValue) {
            props.onSelectedItemsChange(props.selectedItems.slice(0, -1));
          }
      }
      onKeyDown?.(event);
    };

    const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(true);
    useEffect(() => {
      if (hasInputFocused || inputValue) {
        setLabelAsPlaceholder(false);
        return;
      }
      setLabelAsPlaceholder(props.selectedItems.length === 0);
    }, [props.selectedItems, hasInputFocused, inputValue]);

    useImperativeHandle(ref, () => ({
      blur: () => {
        downshiftReturn.closeMenu();
        inputRef.current?.blur();
      },
    }));

    useEffect(() => {
      props.onSearchInputChange?.({ target: { value: inputValue } });
    }, [inputValue]);

    return (
      <SelectMultiAux
        {...props}
        monoline={false}
        options={options}
        labelAsPlaceholder={labelAsPlaceholder}
        selectedItems={props.selectedItems}
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
          toggleButtonProps: downshiftReturn.getToggleButtonProps(),
        }}
        useMultipleSelectionReturn={useMultipleSelectionReturn}
      >
        <span
          className="c__select__inner__value__input"
          data-value={inputValue}
        >
          <input
            {...inputProps}
            onFocus={() => {
              setHasInputFocused(true);
              downshiftReturn.openMenu();
            }}
            onBlur={() => {
              setHasInputFocused(false);
            }}
            size={4}
          />
        </span>
      </SelectMultiAux>
    );
  },
);

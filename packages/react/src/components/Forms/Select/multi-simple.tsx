import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { useMultipleSelection, useSelect } from "downshift";
import {
  getMultiOptionsFilter,
  SelectMultiAux,
  SubProps,
} from ":/components/Forms/Select/multi-common";
import {
  optionsEqual,
  optionToString,
} from ":/components/Forms/Select/mono-common";
import { Option, SelectHandle } from ":/components/Forms/Select/index";

export const SelectMultiSimple = forwardRef<SelectHandle, SubProps>(
  (props, ref) => {
    const isSelected = (option: Option) =>
      !!props.selectedItems.find((selectedItem) =>
        optionsEqual(selectedItem, option),
      );

    const options = React.useMemo(() => {
      if (props.monoline) {
        return props.options.map((option) => ({
          ...option,
          highlighted: isSelected(option),
        }));
      }
      return props.options.filter(
        getMultiOptionsFilter(props.selectedItems, ""),
      );
    }, [props.selectedItems]);

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

    const downshiftReturn = useSelect({
      items: options,
      itemToString: optionToString,
      selectedItem: null, // Important, without this we are not able to re-select the last removed option.
      defaultHighlightedIndex: 0, // after selection, highlight the first item.
      stateReducer: (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges;
        switch (type) {
          case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
          case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            return {
              ...changes,
              isOpen: true, // keep the menu open after selection.
              highlightedIndex: state.highlightedIndex, // avoid automatic scroll up on click.
            };
        }
        return changes;
      },
      onStateChange: ({ type, selectedItem: newSelectedItem }) => {
        switch (type) {
          case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
          case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
          case useSelect.stateChangeTypes.ItemClick:
            if (!newSelectedItem) {
              break;
            }
            if (isSelected(newSelectedItem)) {
              // Remove the item if it is already selected.
              props.onSelectedItemsChange(
                props.selectedItems.filter(
                  (selectedItem) =>
                    !optionsEqual(selectedItem, newSelectedItem),
                ),
              );
            } else {
              props.onSelectedItemsChange([
                ...props.selectedItems,
                newSelectedItem,
              ]);
            }
            break;
          default:
            break;
        }
      },
      isItemDisabled: (item) => !!item.disabled,
    });

    const toggleRef = useRef<HTMLElement>(null);

    useImperativeHandle(ref, () => ({
      blur: () => {
        downshiftReturn.closeMenu();
        toggleRef.current?.blur();
      },
    }));

    return (
      <SelectMultiAux
        {...props}
        options={options}
        labelAsPlaceholder={props.selectedItems.length === 0}
        selectedItems={props.selectedItems}
        selectedItemsStyle={props.monoline ? "text" : "pills"}
        menuOptionsStyle={props.monoline ? "checkbox" : "plain"}
        downshiftReturn={{
          ...downshiftReturn,
          wrapperProps: {
            onClick: () => {
              if (!props.disabled) {
                downshiftReturn.toggleMenu();
              }
            },
          },
          toggleButtonProps: downshiftReturn.getToggleButtonProps({
            ...useMultipleSelectionReturn.getDropdownProps({
              preventKeyAction: downshiftReturn.isOpen,
              ref: toggleRef,
            }),
            disabled: props.disabled,
            onClick: (e: React.MouseEvent): void => {
              // As the wrapper also has an onClick handler, we need to stop the event propagation here on it will toggle
              // twice the menu opening which will ... do nothing :).
              e.stopPropagation();
            },
          }),
        }}
        useMultipleSelectionReturn={useMultipleSelectionReturn}
      />
    );
  },
);

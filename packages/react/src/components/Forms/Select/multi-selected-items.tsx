import React from "react";
import { useCunningham } from ":/components/Provider";
import {
  optionToString,
  optionToValue,
} from ":/components/Forms/Select/mono-common";
import { SelectedOption } from ":/components/Forms/Select/utils";
import { Button } from ":/components/Button";
import { SelectMultiAuxProps } from ":/components/Forms/Select/multi-common";

export const SelectedItems = (props: SelectMultiAuxProps) => {
  if (props.selectedItemsStyle === "pills") {
    return <SelectedItemsChips {...props} />;
  }
  if (props.selectedItemsStyle === "text") {
    return <SelectedItemsText {...props} />;
  }
  throw new Error("Unknown selectedItemsStyle");
};

const SelectedItemsChips = ({
  selectedItems,
  selectedItemsStyle,
  disabled,
  useMultipleSelectionReturn,
  ...props
}: SelectMultiAuxProps) => {
  const { t } = useCunningham();
  return selectedItems.map((selectedItemForRender, index) => {
    return (
      <div
        className="c__select__inner__value__pill"
        key={`${optionToValue(selectedItemForRender)}${index.toString()}`}
        {...useMultipleSelectionReturn.getSelectedItemProps({
          selectedItem: selectedItemForRender,
          index,
        })}
      >
        <SelectedOption option={selectedItemForRender} {...props} />
        <Button
          tabIndex={-1}
          color="tertiary"
          disabled={disabled}
          size="small"
          aria-label={t("components.forms.select.clear_button_aria_label")}
          type="button"
          className="c__select__inner__value__pill__clear"
          onClick={(e) => {
            e.stopPropagation();
            useMultipleSelectionReturn.removeSelectedItem(
              selectedItemForRender,
            );
          }}
          icon={<span className="material-icons">close</span>}
        />
      </div>
    );
  });
};

const SelectedItemsText = ({ selectedItems }: SelectMultiAuxProps) => {
  return selectedItems.map((item) => optionToString(item)).join(", ");
};

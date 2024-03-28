import React, { HTMLAttributes } from "react";
import { useMultipleSelection } from "downshift";
import classNames from "classnames";
import { Field } from ":/components/Forms/Field";
import { LabelledBox } from ":/components/Forms/LabelledBox";
import { Button } from ":/components/Button";
import { useCunningham } from ":/components/Provider";
import { Option, SelectProps } from ":/components/Forms/Select";
import {
  getOptionsFilter,
  optionToValue,
} from ":/components/Forms/Select/mono-common";
import { SelectedItems } from ":/components/Forms/Select/multi-selected-items";
import { SelectMultiMenu } from ":/components/Forms/Select/multi-menu";

/**
 * This method returns a comparator that can be used to filter out options for multi select.
 * For an option to be visible it must:
 * - Match the input value in terms of search
 * - Not be selected already
 *
 * @param selectedOptions
 * @param inputValue
 */
export function getMultiOptionsFilter(
  selectedOptions: Option[],
  inputValue?: string,
) {
  const optionsFilter = getOptionsFilter(inputValue);
  return (option: Option) => {
    return (
      !selectedOptions.find(
        (selectedOption) =>
          optionToValue(selectedOption) === optionToValue(option),
      ) && optionsFilter(option)
    );
  };
}

export type SubProps = Omit<SelectProps, "onChange"> & {
  onChange?: (event: { target: { value: string[] } }) => void;
  onSelectedItemsChange: (selectedItems: Option[]) => void;
  selectedItems: Option[];
};

export interface SelectMultiAuxProps extends SubProps {
  options: Option[];
  labelAsPlaceholder: boolean;
  selectedItems: Option[];
  clearable?: boolean;
  downshiftReturn: {
    isOpen: boolean;
    getLabelProps: any;
    toggleButtonProps: any;
    getMenuProps: any;
    getItemProps: any;
    highlightedIndex: number;
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
  };
  useMultipleSelectionReturn: ReturnType<typeof useMultipleSelection<Option>>;
}

export const SelectMultiAux = ({ children, ...props }: SelectMultiAuxProps) => {
  const { t } = useCunningham();
  const labelProps = props.downshiftReturn.getLabelProps();

  // We need to remove onBlur from toggleButtonProps because it triggers a menu closing each time
  // we tick a checkbox using the monoline style.
  const { onBlur, ...toggleProps } = props.downshiftReturn.toggleButtonProps;
  return (
    <Field {...props}>
      <div
        className={classNames(
          "c__select",
          "c__select--multi",
          "c__select--" + props.state,
          "c__select--" + props.selectedItemsStyle,
          {
            "c__select--disabled": props.disabled,
            "c__select--populated": props.selectedItems.length > 0,
            "c__select--monoline": props.monoline,
            "c__select--multiline": !props.monoline,
          },
        )}
      >
        <div
          className={classNames("c__select__wrapper", {
            "c__select__wrapper--focus":
              props.downshiftReturn.isOpen && !props.disabled,
          })}
          {...props.downshiftReturn.wrapperProps}
          {...toggleProps}
        >
          {props.selectedItems.map((selectedItem, index) => (
            <input
              key={`${optionToValue(selectedItem)}${index.toString()}`}
              type="hidden"
              name={props.name}
              value={optionToValue(selectedItem)}
            />
          ))}
          <LabelledBox
            label={props.label}
            labelAsPlaceholder={props.labelAsPlaceholder}
            htmlFor={labelProps.htmlFor}
            labelId={labelProps.id}
            hideLabel={props.hideLabel}
            disabled={props.disabled}
          >
            <div className="c__select__inner">
              <div className="c__select__inner__actions">
                {props.clearable &&
                  !props.disabled &&
                  props.selectedItems.length > 0 && (
                    <>
                      <Button
                        color="tertiary-text"
                        size="nano"
                        aria-label={t(
                          "components.forms.select.clear_all_button_aria_label",
                        )}
                        className="c__select__inner__actions__clear"
                        onClick={(e) => {
                          e.stopPropagation();
                          props.onSelectedItemsChange([]);
                        }}
                        icon={<span className="material-icons">close</span>}
                        type="button"
                      />
                      <div className="c__select__inner__actions__separator" />
                    </>
                  )}
                <Button
                  color="tertiary-text"
                  size="nano"
                  className="c__select__inner__actions__open"
                  icon={
                    <span
                      className={classNames("material-icons", {
                        opened: props.downshiftReturn.isOpen,
                      })}
                    >
                      arrow_drop_down
                    </span>
                  }
                  disabled={props.disabled}
                  type="button"
                />
              </div>
              <div className="c__select__inner__value">
                <SelectedItems {...props} />
                {children}
              </div>
            </div>
          </LabelledBox>
        </div>
        <SelectMultiMenu {...props} />
      </div>
    </Field>
  );
};

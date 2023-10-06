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
  renderOption,
} from ":/components/Forms/Select/mono-common";
import { SelectedOption } from ":/components/Forms/Select/utils";

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

export type SelectMultiProps = Omit<SelectProps, "onChange"> & {
  onChange?: (event: { target: { value: string[] } }) => void;
};

export interface SubProps extends SelectMultiProps {
  selectedItems: Option[];
  onSelectedItemsChange: (selectedItems: Option[]) => void;
}

export const SelectMultiAux = ({
  options,
  labelAsPlaceholder,
  selectedItems,
  clearable = true,
  disabled,
  hideLabel,
  name,
  downshiftReturn,
  useMultipleSelectionReturn,
  children,
  ...props
}: SubProps & {
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
}) => {
  const { t } = useCunningham();
  const labelProps = downshiftReturn.getLabelProps();
  return (
    <Field {...props}>
      <div
        className={classNames(
          "c__select",
          "c__select--multi",
          "c__select--" + props.state,
          {
            "c__select--disabled": disabled,
            "c__select--populated": selectedItems.length > 0,
          },
        )}
      >
        <div
          className={classNames("c__select__wrapper", {
            "c__select__wrapper--focus": downshiftReturn.isOpen && !disabled,
          })}
          {...downshiftReturn.wrapperProps}
        >
          {selectedItems.map((selectedItem, index) => (
            <input
              key={`${optionToValue(selectedItem)}${index.toString()}`}
              type="hidden"
              name={name}
              value={optionToValue(selectedItem)}
            />
          ))}
          <LabelledBox
            label={props.label}
            labelAsPlaceholder={labelAsPlaceholder}
            htmlFor={labelProps.htmlFor}
            labelId={labelProps.id}
            hideLabel={hideLabel}
            disabled={disabled}
          >
            <div className="c__select__inner">
              <div className="c__select__inner__actions">
                {clearable && !disabled && selectedItems.length > 0 && (
                  <>
                    <Button
                      color="tertiary"
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
                    />
                    <div className="c__select__inner__actions__separator" />
                  </>
                )}
                <Button
                  color="tertiary"
                  size="nano"
                  className="c__select__inner__actions__open"
                  icon={
                    <span
                      className={classNames("material-icons", {
                        opened: downshiftReturn.isOpen,
                      })}
                    >
                      arrow_drop_down
                    </span>
                  }
                  disabled={disabled}
                  {...downshiftReturn.toggleButtonProps}
                />
              </div>
              <div className="c__select__inner__value">
                {selectedItems.map((selectedItemForRender, index) => {
                  return (
                    <div
                      className="c__select__inner__value__pill"
                      key={`${optionToValue(
                        selectedItemForRender,
                      )}${index.toString()}`}
                      {...useMultipleSelectionReturn.getSelectedItemProps({
                        selectedItem: selectedItemForRender,
                        index,
                      })}
                    >
                      <SelectedOption
                        option={selectedItemForRender}
                        {...props}
                      />
                      <Button
                        tabIndex={-1}
                        color="tertiary"
                        disabled={disabled}
                        size="small"
                        aria-label={t(
                          "components.forms.select.clear_button_aria_label",
                        )}
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
                })}
                {children}
              </div>
            </div>
          </LabelledBox>
        </div>
        <div
          className={classNames("c__select__menu", {
            "c__select__menu--opened": downshiftReturn.isOpen,
          })}
          {...downshiftReturn.getMenuProps()}
        >
          <ul>
            {downshiftReturn.isOpen && (
              <>
                {options.map((option, index) => {
                  const isActive = index === downshiftReturn.highlightedIndex;
                  return (
                    <li
                      className={classNames("c__select__menu__item", {
                        "c__select__menu__item--highlight": isActive,
                        "c__select__menu__item--disabled": option.disabled,
                      })}
                      key={`${optionToValue(option)}${index.toString()}`}
                      {...downshiftReturn.getItemProps({
                        item: option,
                        index,
                      })}
                    >
                      <span>{renderOption(option)}</span>
                    </li>
                  );
                })}
                {options.length === 0 && (
                  <li className="c__select__menu__item c__select__menu__empty-placeholder">
                    {t("components.forms.select.menu_empty_placeholder")}
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </Field>
  );
};

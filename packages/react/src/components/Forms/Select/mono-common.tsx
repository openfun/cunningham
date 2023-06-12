import React, { HTMLAttributes, useEffect } from "react";
import { UseSelectReturnValue } from "downshift";
import classNames from "classnames";
import { useCunningham } from ":/components/Provider";
import { Field } from ":/components/Forms/Field";
import { LabelledBox } from ":/components/Forms/LabelledBox";
import { Button } from ":/components/Button";
import { Option, SelectProps } from ":/components/Forms/Select/mono";

export function getOptionsFilter(inputValue?: string) {
  return (option: Option) => {
    return (
      !inputValue ||
      option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      option.value?.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
}

export const optionToString = (option: Option | null) => {
  return option ? option.label : "";
};

export const optionToValue = (option: Option) => {
  return option.value ?? option.label;
};

export interface SubProps extends SelectProps {
  defaultSelectedItem?: Option;
  downshiftProps: {
    initialSelectedItem?: Option;
    onSelectedItemChange?: any;
  };
}

export interface SelectAuxProps extends SubProps {
  options: Option[];
  labelAsPlaceholder: boolean;
  downshiftReturn: {
    isOpen: boolean;
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
    selectedItem?: Option | null;
    getLabelProps: any;
    toggleButtonProps: any;
    getMenuProps: any;
    getItemProps: any;
    highlightedIndex: number;
    selectItem: UseSelectReturnValue<Option>["selectItem"];
  };
}

/**
 * This component is used by searchable and non-searchable select components.
 * It contains the common logic between the two.
 */
export const SelectMonoAux = ({
  children,
  state = "default",
  text,
  rightText,
  fullWidth,
  options,
  name,
  label,
  hideLabel,
  labelAsPlaceholder,
  downshiftProps,
  downshiftReturn,
  value,
  disabled,
  clearable = true,
}: SelectAuxProps) => {
  const { t } = useCunningham();
  const labelProps = downshiftReturn.getLabelProps();

  // When component is controlled, this useEffect will update the local selected item.
  useEffect(() => {
    if (downshiftProps.initialSelectedItem !== undefined) {
      return;
    }
    const optionToSelect = options.find(
      (option) => optionToValue(option) === value
    );
    downshiftReturn.selectItem(optionToSelect ?? null);
  }, [value]);

  return (
    <Field
      state={state}
      text={text}
      rightText={rightText}
      fullWidth={fullWidth}
    >
      <div
        className={classNames("c__select", "c__select--" + state, {
          "c__select--disabled": disabled,
        })}
      >
        {/* We disabled linting for this specific line because we consider that the onClick props is only used for */}
        {/* mouse users, so this do not engender any issue for accessibility. */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={classNames("c__select__wrapper", {
            "c__select__wrapper--focus": downshiftReturn.isOpen && !disabled,
          })}
          {...downshiftReturn.wrapperProps}
        >
          {downshiftReturn.selectedItem && (
            <input
              type="hidden"
              name={name}
              value={optionToValue(downshiftReturn.selectedItem)}
            />
          )}

          <LabelledBox
            label={label}
            hideLabel={hideLabel}
            labelAsPlaceholder={labelAsPlaceholder}
            htmlFor={labelProps.htmlFor}
            labelId={labelProps.id}
          >
            <div className="c__select__inner">
              <div className="c__select__inner__value">{children}</div>
              <div className="c__select__inner__actions">
                {clearable && !disabled && downshiftReturn.selectedItem && (
                  <>
                    <Button
                      color="tertiary"
                      size="small"
                      aria-label={t(
                        "components.forms.select.clear_button_aria_label"
                      )}
                      className="c__select__inner__actions__clear"
                      onClick={(e) => {
                        downshiftReturn.selectItem(null);
                        e.stopPropagation();
                      }}
                      icon={<span className="material-icons">close</span>}
                    />
                    <div className="c__select__inner__actions__separator" />
                  </>
                )}

                <Button
                  color="tertiary"
                  size="small"
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
            {downshiftReturn.isOpen &&
              options.map((item, index) => {
                const isActive = index === downshiftReturn.highlightedIndex;
                return (
                  <li
                    className={classNames("c__select__menu__item", {
                      "c__select__menu__item--highlight": isActive,
                      "c__select__menu__item--selected":
                        downshiftReturn.selectedItem === item,
                      "c__select__menu__item--disabled": item.disabled,
                    })}
                    key={`${item.value}${index}`}
                    {...downshiftReturn.getItemProps({
                      item,
                      index,
                      isActive,
                      disabled: item.disabled,
                    })}
                  >
                    <span>{item.label}</span>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </Field>
  );
};

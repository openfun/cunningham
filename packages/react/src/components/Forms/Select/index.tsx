import React, {
  HTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useCombobox,
  useSelect,
  UseSelectReturnValue,
  UseSelectStateChange,
} from "downshift";
import classNames from "classnames";
import { useCunningham } from ":/components/Provider";
import { Field, FieldProps } from ":/components/Forms/Field";
import { LabelledBox } from ":/components/Forms/LabelledBox";
import { Button } from ":/components/Button";

interface Option {
  value?: string;
  label: string;
}

type Props = PropsWithChildren &
  FieldProps & {
    label: string;
    options: Option[];
    searchable?: boolean;
    name?: string;
    defaultValue?: string | number;
    value?: string | number;
    onChange?: (event: {
      target: { value: string | number | undefined };
    }) => void;
    disabled?: boolean;
  };

function getOptionsFilter(inputValue?: string) {
  return (option: Option) => {
    return (
      !inputValue ||
      option.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      option.value?.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
}

const optionToString = (option: Option | null) => {
  return option ? option.label : "";
};

const optionToValue = (option: Option) => {
  return option.value ?? option.label;
};

interface SubProps extends Props {
  defaultSelectedItem?: Option;
  downshiftProps: {
    initialSelectedItem?: Option;
    onSelectedItemChange?: any;
  };
}

interface SelectAuxProps extends SubProps {
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
const SelectAux = ({
  children,
  state = "default",
  text,
  rightText,
  fullWidth,
  options,
  name,
  label,
  labelAsPlaceholder,
  downshiftProps,
  downshiftReturn,
  value,
  disabled,
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
            labelAsPlaceholder={labelAsPlaceholder}
            htmlFor={labelProps.htmlFor}
            labelId={labelProps.id}
          >
            <div className="c__select__inner">
              <div className="c__select__inner__value">{children}</div>
              <div className="c__select__inner__actions">
                {!disabled && downshiftReturn.selectedItem && (
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
              options.map((item, index) => (
                <li
                  className={classNames("c__select__menu__item", {
                    "c__select__menu__item--highlight":
                      downshiftReturn.highlightedIndex === index,
                    "c__select__menu__item--selected":
                      downshiftReturn.selectedItem === item,
                  })}
                  key={`${item.value}${index}`}
                  {...downshiftReturn.getItemProps({ item, index })}
                >
                  <span>{item.label}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Field>
  );
};

const SelectSimple = (props: SubProps) => {
  const downshiftReturn = useSelect({
    ...props.downshiftProps,
    items: props.options,
    itemToString: optionToString,
  });
  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(
    !downshiftReturn.selectedItem
  );

  useEffect(() => {
    setLabelAsPlaceholder(!downshiftReturn.selectedItem);
  }, [downshiftReturn.selectedItem]);

  return (
    <SelectAux
      {...props}
      downshiftReturn={{
        ...downshiftReturn,
        wrapperProps: downshiftReturn.getToggleButtonProps({
          disabled: props.disabled,
        }),
        toggleButtonProps: {},
      }}
      labelAsPlaceholder={labelAsPlaceholder}
    >
      {downshiftReturn.selectedItem && (
        <span>{optionToString(downshiftReturn.selectedItem)}</span>
      )}
    </SelectAux>
  );
};

const SelectSearchable = (props: SubProps) => {
  const { t } = useCunningham();
  const [optionsToDisplay, setOptionsToDisplay] = useState(props.options);
  const [hasInputFocused, setHasInputFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const downshiftReturn = useCombobox({
    ...props.downshiftProps,
    items: optionsToDisplay,
    itemToString: optionToString,
    onInputValueChange: (e) => {
      setOptionsToDisplay(props.options.filter(getOptionsFilter(e.inputValue)));
      if (!e.inputValue) {
        downshiftReturn.selectItem(null);
      }
    },
  });

  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(
    !downshiftReturn.selectedItem
  );
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

  const inputProps = downshiftReturn.getInputProps({
    ref: inputRef,
    disabled: props.disabled,
  });

  return (
    <SelectAux
      {...props}
      downshiftReturn={{
        ...downshiftReturn,
        wrapperProps: {
          onClick: () => {
            inputRef.current?.focus();
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
        className="w-full p-1.5"
        {...inputProps}
        onFocus={(e) => {
          inputProps.onFocus(e);
          setHasInputFocused(true);
        }}
        onBlur={(e) => {
          inputProps.onBlur(e);
          setHasInputFocused(false);
        }}
      />
    </SelectAux>
  );
};

export const Select = (props: Props) => {
  if (props.defaultValue && props.value) {
    throw new Error(
      "You cannot use both defaultValue and value props on Select component"
    );
  }

  const defaultSelectedItem = props.defaultValue
    ? props.options.find(
        (option) => optionToValue(option) === props.defaultValue
      )
    : undefined;

  const commonDownshiftProps: SubProps["downshiftProps"] = {
    initialSelectedItem: defaultSelectedItem,
    onSelectedItemChange: (e: UseSelectStateChange<Option>) => {
      props.onChange?.({
        target: {
          value: e.selectedItem ? optionToValue(e.selectedItem) : undefined,
        },
      });
    },
  };

  return props.searchable ? (
    <SelectSearchable {...props} downshiftProps={commonDownshiftProps} />
  ) : (
    <SelectSimple {...props} downshiftProps={commonDownshiftProps} />
  );
};

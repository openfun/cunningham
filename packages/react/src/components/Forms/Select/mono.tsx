import React, { PropsWithChildren } from "react";
import { UseSelectStateChange } from "downshift";
import { FieldProps } from ":/components/Forms/Field";
import { optionToValue, SubProps } from ":/components/Forms/Select/mono-common";
import { SelectMonoSearchable } from ":/components/Forms/Select/mono-searchable";
import { SelectMonoSimple } from ":/components/Forms/Select/mono-simple";

export interface Option {
  value?: string;
  label: string;
  disabled?: boolean;
}

export type SelectProps = PropsWithChildren &
  FieldProps & {
    label: string;
    hideLabel?: boolean;
    options: Option[];
    searchable?: boolean;
    name?: string;
    defaultValue?: string | number | string[];
    value?: string | number | string[];
    onChange?: (event: {
      target: { value: string | number | undefined | string[] };
    }) => void;
    onBlur?: (event: {
      target: { value: string | number | undefined | string[] };
    }) => void;
    disabled?: boolean;
    clearable?: boolean;
    multi?: boolean;
  };

export const SelectMono = (props: SelectProps) => {
  const defaultSelectedItem = props.defaultValue
    ? props.options.find(
        (option) => optionToValue(option) === props.defaultValue,
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
    isItemDisabled: (item) => !!item.disabled,
  };

  return props.searchable ? (
    <SelectMonoSearchable {...props} downshiftProps={commonDownshiftProps} />
  ) : (
    <SelectMonoSimple {...props} downshiftProps={commonDownshiftProps} />
  );
};

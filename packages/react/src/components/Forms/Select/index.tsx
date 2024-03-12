import React, { forwardRef, PropsWithChildren, ReactNode } from "react";
import { SelectMulti } from ":/components/Forms/Select/multi";
import { SelectMono } from ":/components/Forms/Select/mono";
import { FieldProps } from ":/components/Forms/Field";

export * from ":/components/Forms/Select/mono";
export * from ":/components/Forms/Select/multi";

export type BaseOption = {
  value: string;
  label: string;
  render: () => ReactNode;
  highlighted?: boolean;
  disabled?: boolean;
};

export type OptionWithRender = BaseOption;

export type OptionWithoutRender = Omit<BaseOption, "value" | "render"> & {
  value?: string;
  render?: undefined;
};

export type Option = OptionWithoutRender | OptionWithRender;

export type ContextCallbackFetchOptions = {
  search?: string;
};

export type CallbackFetchOptions = (
  context: ContextCallbackFetchOptions,
) => Promise<Option[]>;

export interface SelectHandle {
  blur: () => void;
}

export type SelectProps = PropsWithChildren &
  FieldProps & {
    label: string;
    hideLabel?: boolean;
    options: Option[] | CallbackFetchOptions;
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
    showLabelWhenSelected?: boolean;
    monoline?: boolean;
    selectedItemsStyle?: "pills" | "text";
    menuOptionsStyle?: "plain" | "checkbox";
    onSearchInputChange?: (event: {
      target: { value: string | undefined };
    }) => void;
  };
export const Select = forwardRef<SelectHandle, SelectProps>((props, ref) => {
  if (props.defaultValue && props.value) {
    throw new Error(
      "You cannot use both defaultValue and value props on Select component",
    );
  }

  return props.multi ? (
    <SelectMulti {...props} ref={ref} />
  ) : (
    <SelectMono {...props} ref={ref} />
  );
});

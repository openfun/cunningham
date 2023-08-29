import React from "react";
import { SelectMulti } from ":/components/Forms/Select/multi";
import { SelectMono, SelectProps } from ":/components/Forms/Select/mono";

export * from ":/components/Forms/Select/mono";
export * from ":/components/Forms/Select/multi";

export const Select = (props: SelectProps) => {
  if (props.defaultValue && props.value) {
    throw new Error(
      "You cannot use both defaultValue and value props on Select component",
    );
  }

  return props.multi ? <SelectMulti {...props} /> : <SelectMono {...props} />;
};

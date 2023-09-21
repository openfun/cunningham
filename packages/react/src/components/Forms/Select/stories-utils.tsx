import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import { Select } from ":/components/Forms/Select/index";
import { SelectProps } from ":/components/Forms/Select/mono";

export const RhfSelect = (props: SelectProps & { name: string }) => {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <Select
            {...props}
            state={fieldState.error ? "error" : "default"}
            text={fieldState.error?.message}
            onBlur={field.onBlur}
            onChange={(e) => setValue(field.name, e.target.value)}
            value={field.value}
          />
        );
      }}
    />
  );
};

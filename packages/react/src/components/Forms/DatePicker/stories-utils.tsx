import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import {
  DatePicker,
  DatePickerProps,
} from ":/components/Forms/DatePicker/DatePicker";

export const RhfDatePicker = (props: DatePickerProps & { name: string }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <DatePicker
            {...props}
            state={fieldState.error ? "error" : "default"}
            text={fieldState.error?.message}
            onChange={field.onChange}
            value={field.value}
          />
        );
      }}
    />
  );
};

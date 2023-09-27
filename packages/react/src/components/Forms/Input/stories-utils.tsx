import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import { Input, InputProps } from ".";

export const RhfInput = (props: InputProps & { name: string }) => {
  const { control, setValue } = useFormContext();
  return (
    <Controller
      control={control}
      name={props.name}
      render={({ field, fieldState }) => {
        return (
          <Input
            {...props}
            aria-invalid={!!fieldState.error}
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

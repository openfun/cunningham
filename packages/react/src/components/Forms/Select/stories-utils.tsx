import { Controller, useFormContext } from "react-hook-form";
import React from "react";
import { Select, SelectProps } from ":/components/Forms/Select/index";

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

export const getCountryOption = (name: string, code: string) => ({
  value: name.toLowerCase(),
  label: name,
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
      <img
        style={{ height: "24px" }}
        src={`https://flagsapi.com/${code}/shiny/64.png`}
        alt="Flag"
      />
      {name}
    </div>
  ),
});

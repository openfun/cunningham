import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { CunninghamProvider } from ":/components/Provider";
import { Button } from ":/components/Button";
import { DateRangePicker } from ":/components/Forms/DatePicker/DateRangePicker";
import { DatePicker } from ":/components/Forms/DatePicker/DatePicker";

export default {
  title: "Components/Forms/DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => (
  <CunninghamProvider>
    <DatePicker {...args} label="Pick a date" />
  </CunninghamProvider>
);

export const Default = () => (
  <div style={{ minHeight: "400px" }}>
    <CunninghamProvider>
      <DatePicker label="Pick a date" />
    </CunninghamProvider>
  </div>
);

export const Disabled = {
  render: Template,
  args: { disabled: true },
};

export const DefaultValue = {
  render: Template,
  args: { defaultValue: "2023-05-24T00:00:00.000+00:00" },
};

export const DisabledValue = {
  render: Template,
  args: { disabled: true, defaultValue: "2023-05-24T00:00:00.000+00:00" },
};

export const Error = {
  render: Template,
  args: {
    defaultValue: "2023-05-24T00:00:00.000+00:00",
    state: "error",
    text: "Something went wrong",
  },
};

export const Success = {
  render: Template,
  args: {
    defaultValue: "2023-05-24T00:00:00.000+00:00",
    state: "success",
    text: "Well done",
  },
};

export const MinMaxValue = {
  render: Template,
  args: {
    defaultValue: "2023-05-24T00:00:00.000+00:00",
    minValue: "2023-04-23T00:00:00.000+00:00",
    maxValue: "2023-06-23T00:00:00.000+00:00",
  },
};

export const InvalidValue = {
  render: Template,
  args: {
    defaultValue: "2023-02-24T00:00:00.000+00:00",
    minValue: "2023-04-23T00:00:00.000+00:00",
    maxValue: "2023-06-23T00:00:00.000+00:00",
  },
};

export const WithText = {
  render: Template,
  args: {
    defaultValue: "2023-05-24T00:00:00.000+00:00",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
  },
};

export const Fullwidth = {
  render: Template,
  args: {
    defaultValue: "2023-05-24T00:00:00.000+00:00",
    fullWidth: true,
  },
};

export const CustomLocale = () => (
  <div style={{ minHeight: "400px" }}>
    <CunninghamProvider>
      <DatePicker
        label="Pick a date"
        locale="hi-IN-u-ca-indian"
        defaultValue="2023-06-25T00:00:00.000+00:00"
      />
    </CunninghamProvider>
  </div>
);

export const CunninghamLocale = () => (
  <div style={{ minHeight: "400px" }}>
    <CunninghamProvider currentLocale="fr-FR">
      <DatePicker
        label="Pick a date"
        defaultValue="2023-06-25T00:00:00.000+00:00"
      />
    </CunninghamProvider>
  </div>
);

export const Controlled = () => {
  const [value, setValue] = useState<string | null>("2023-04-25T12:00:00.000Z");
  return (
    <CunninghamProvider>
      <div>
        <div>
          Value: <span>{value?.toString()}</span>
        </div>
        <DatePicker
          label="Pick a date"
          value={value}
          onChange={(e) => {
            setValue(e);
          }}
        />
        <Button onClick={() => setValue("")}>Reset</Button>
      </div>
    </CunninghamProvider>
  );
};

export const RangeDefault = () => {
  return (
    <div style={{ minHeight: "400px" }}>
      <CunninghamProvider>
        <DateRangePicker startLabel="Start date" endLabel="Due date" />
      </CunninghamProvider>
    </div>
  );
};

export const RangeDefaultValue = () => {
  return (
    <CunninghamProvider>
      <DateRangePicker
        startLabel="Start date"
        endLabel="Due date"
        defaultValue={[
          "2023-05-23T00:00:00.000+00:00",
          "2023-06-23T00:00:00.000+00:00",
        ]}
      />
    </CunninghamProvider>
  );
};

export const RangeControlled = () => {
  const [value, setValue] = useState<[string, string] | null>([
    "2023-05-23T13:37:00.000+02:00",
    "2023-06-23T13:37:00.000+02:00",
  ]);
  return (
    <div>
      <CunninghamProvider>
        <div>Value: {value?.join("  ")}</div>
        <DateRangePicker
          startLabel="Start date"
          endLabel="Due date"
          minValue="2023-01-23T00:00:00.000+00:00"
          maxValue="2023-08-23T00:00:00.000+00:00"
          value={value}
          onChange={(e) => setValue(e)}
        />
        <Button onClick={() => setValue(null)}>Reset</Button>
      </CunninghamProvider>
    </div>
  );
};

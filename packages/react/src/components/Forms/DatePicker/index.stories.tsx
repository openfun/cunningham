import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { CunninghamProvider } from ":/components/Provider";
import { Button } from ":/components/Button";
import { DateRangePicker } from ":/components/Forms/DatePicker/DateRangePicker";
import { DatePicker } from ":/components/Forms/DatePicker/DatePicker";
import {
  StringOrDate,
  StringsOrDateRange,
} from ":/components/Forms/DatePicker/types";

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
  args: { defaultValue: "2023-05-24" },
};

export const DisabledValue = {
  render: Template,
  args: { disabled: true, defaultValue: "2023-05-24" },
};

export const Error = {
  render: Template,
  args: {
    defaultValue: "2023-05-24",
    state: "error",
    text: "Something went wrong",
  },
};

export const Success = {
  render: Template,
  args: {
    defaultValue: "2023-05-24",
    state: "success",
    text: "Well done",
  },
};

export const MinMaxValue = {
  render: Template,
  args: {
    defaultValue: "2023-05-24",
    minValue: "2023-04-23",
    maxValue: "2023-06-23",
  },
};

export const InvalidValue = {
  render: Template,
  args: {
    defaultValue: "2023-02-24",
    minValue: "2023-04-23",
    maxValue: "2023-06-23",
  },
};

export const WithText = {
  render: Template,
  args: {
    defaultValue: "2023-05-24",
    text: "This is a text, you can display anything you want here like warnings, information or errors.",
  },
};

export const Fullwidth = {
  render: Template,
  args: {
    defaultValue: "2023-05-24",
    fullWidth: true,
  },
};

export const CustomLocale = () => (
  <div style={{ minHeight: "400px" }}>
    <CunninghamProvider>
      <DatePicker
        label="Pick a date"
        locale="hi-IN-u-ca-indian"
        defaultValue="2023-06-25"
      />
    </CunninghamProvider>
  </div>
);

export const CunninghamLocale = () => (
  <div style={{ minHeight: "400px" }}>
    <CunninghamProvider currentLocale="fr-FR">
      <DatePicker label="Pick a date" defaultValue="2023-06-25" />
    </CunninghamProvider>
  </div>
);

export const Controlled = () => {
  const [value, setValue] = useState<StringOrDate | null>("2023-05-26");
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
        defaultValue={["2023-05-23", "2023-06-23"]}
      />
    </CunninghamProvider>
  );
};

export const RangeControlled = () => {
  const [value, setValue] = useState<StringsOrDateRange | null>([
    "2023-05-23",
    "2023-06-23",
  ]);
  return (
    <div>
      <CunninghamProvider>
        <div>Value: {value?.join("  ")}</div>
        <DateRangePicker
          startLabel="Start date"
          endLabel="Due date"
          minValue="2023-01-23"
          maxValue="2023-08-23"
          value={value}
          onChange={(e) => setValue(e)}
        />
        <Button onClick={() => setValue(null)}>Reset</Button>
      </CunninghamProvider>
    </div>
  );
};

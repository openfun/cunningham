import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { CunninghamProvider } from ":/components/Provider";
import { Button } from ":/components/Button";
import DatePicker from ":/components/Forms/DatePicker/DatePicker";
import { StringOrDate } from ":/components/Forms/DatePicker/types";

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

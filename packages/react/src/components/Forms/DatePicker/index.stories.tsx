import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { CalendarDate, DateValue } from "@internationalized/date";
import { CunninghamProvider } from ":/components/Provider";
import { Button } from ":/components/Button";
import { DatePicker } from "./index";

export default {
  title: "Components/Forms/DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => (
  <CunninghamProvider>
    <DatePicker {...args} label="Pick a date" />
  </CunninghamProvider>
);

export const Default = {
  render: Template,
  args: {},
};

export const Disabled = {
  render: Template,
  args: { disabled: true },
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
  },
};

export const MinMaxValue = {
  render: Template,
  args: {
    defaultValue: "2023-05-24",
    minValue: "2023-04-15",
    maxValue: "2023-06-12",
  },
};

export const Controlled = () => {
  const [value, setValue] = useState<string>("2023-05-24");
  return (
    <CunninghamProvider>
      <div>
        <div>
          Value: <span>{value?.toString()}</span>
        </div>
        <DatePicker
          label="Pick a date"
          value={value}
          onChange={(e: string) => {
            setValue(e as string);
          }}
        />
        <Button onClick={() => setValue("")}>Reset</Button>
      </div>
    </CunninghamProvider>
  );
};

import { Meta, StoryFn } from "@storybook/react";
import React, { useState } from "react";
import * as Yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CunninghamProvider } from ":/components/Provider";
import { Button } from ":/components/Button";
import { DateRangePicker } from ":/components/Forms/DatePicker/DateRangePicker";
import { DatePicker } from ":/components/Forms/DatePicker/DatePicker";
import { onSubmit } from ":/components/Forms/Examples/ReactHookForm/reactHookFormUtils";
import { RhfDatePicker } from ":/components/Forms/DatePicker/stories-utils";

export default {
  title: "Components/Forms/DatePicker",
  component: DatePicker,
} as Meta<typeof DatePicker>;

const Template: StoryFn<typeof DatePicker> = (args) => (
  <DatePicker {...args} label="Pick a date" />
);

export const Default = () => (
  <div style={{ minHeight: "400px" }}>
    <DatePicker label="Pick a date" />
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
    <DatePicker
      label="Pick a date"
      locale="hi-IN-u-ca-indian"
      defaultValue="2023-06-25T00:00:00.000+00:00"
    />
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
    <div>
      <div className="clr-greyscale-900">
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
  );
};

export const ReactHookForm = () => {
  const methods = useForm({
    defaultValues: {
      date: "",
    },
    resolver: yupResolver(
      Yup.object().shape({
        date: Yup.string().required(),
      }),
    ),
  });

  return (
    <FormProvider {...methods}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "400px",
        }}
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <RhfDatePicker name="date" label="Pick a date" fullWidth={true} />
        <Button fullWidth={true}>Submit</Button>
      </form>
    </FormProvider>
  );
};

export const RangeDefault = () => {
  return (
    <div style={{ minHeight: "400px" }}>
      <DateRangePicker startLabel="Start date" endLabel="Due date" />
    </div>
  );
};

export const RangeDefaultValue = () => {
  return (
    <DateRangePicker
      startLabel="Start date"
      endLabel="Due date"
      defaultValue={[
        "2023-05-23T00:00:00.000+00:00",
        "2023-06-23T00:00:00.000+00:00",
      ]}
    />
  );
};

export const RangeControlled = () => {
  const [value, setValue] = useState<[string, string] | null>([
    "2023-05-23T13:37:00.000+02:00",
    "2023-06-23T13:37:00.000+02:00",
  ]);
  return (
    <div>
      <div className="clr-greyscale-900">Value: {value?.join("  ")}</div>
      <DateRangePicker
        startLabel="Start date"
        endLabel="Due date"
        minValue="2023-01-23T00:00:00.000+00:00"
        maxValue="2023-08-23T00:00:00.000+00:00"
        value={value}
        onChange={(e) => setValue(e)}
      />
      <Button onClick={() => setValue(null)}>Reset</Button>
    </div>
  );
};

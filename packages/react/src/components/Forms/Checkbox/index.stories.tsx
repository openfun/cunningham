import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Checkbox, CheckboxGroup } from ":/components/Forms/Checkbox/index";

export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => (
  <Checkbox {...args} aria-label="Checkbox" />
);

export const Default = {
  render: Template,
  args: {},
};

export const Checked = {
  render: Template,

  args: {
    checked: true,
  },
};

export const Indeterminate = {
  render: Template,

  args: {
    indeterminate: true,
  },
};

export const WithLabel = {
  render: Template,

  args: {
    label: "Label",
  },
};

export const LabelChecked = {
  render: Template,

  args: {
    checked: true,
    label: "Label",
  },
};

export const WithTexts = {
  render: Template,

  args: {
    checked: true,
    label: "Label",
    text: "This is an optional text",
  },
};

export const Disabled = {
  render: Template,

  args: {
    disabled: true,
    label: "Label",
  },
};

export const DisabledChecked = {
  render: Template,

  args: {
    checked: true,
    disabled: true,
    label: "Label",
  },
};

export const Error = {
  render: Template,

  args: {
    checked: true,
    label: "Label",
    text: "This is an optional text",
    state: "error",
  },
};

export const Success = {
  render: Template,

  args: {
    checked: true,
    label: "Label",
    text: "This is an optional text",
    state: "success",
  },
};

export const Group = () => (
  <div>
    <div className="fs-l fw-bold mb-t">Your offices</div>
    <CheckboxGroup>
      <Checkbox label="Paris" />
      <Checkbox label="New York" text="United States" checked={true} />
      <Checkbox label="Hong Kong" text="Really long text to write something" />
      <Checkbox label="Singapour" checked={true} />
      <Checkbox label="London" text="Offices closed" disabled={true} />
    </CheckboxGroup>
  </div>
);

export const GroupError = () => (
  <div>
    <div className="fs-l fw-bold mb-t">Your offices</div>
    <CheckboxGroup state="error" text="An important error message">
      <Checkbox label="Paris" />
      <Checkbox label="New York" text="United States" checked={true} />
      <Checkbox label="Hong Kong" text="Really long text to write something" />
      <Checkbox label="Singapour" checked={true} />
      <Checkbox label="London" text="Offices closed" disabled={true} />
    </CheckboxGroup>
  </div>
);

export const GroupSuccess = () => (
  <div>
    <div className="fs-l fw-bold mb-t">Your offices</div>
    <CheckboxGroup state="success" text="Success message !">
      <Checkbox label="Paris" />
      <Checkbox label="New York" text="United States" checked={true} />
      <Checkbox label="Hong Kong" text="Really long text to write something" />
      <Checkbox label="Singapour" checked={true} />
      <Checkbox label="London" text="Offices closed" disabled={true} />
    </CheckboxGroup>
  </div>
);

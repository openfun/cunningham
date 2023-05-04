import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Checkbox, CheckboxGroup } from ":/components/Forms/Checkbox/index";

export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} aria-label="Checkbox" />
);

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Label",
};

export const LabelChecked = Template.bind({});
LabelChecked.args = {
  checked: true,
  label: "Label",
};

export const WithTexts = Template.bind({});
WithTexts.args = {
  checked: true,
  label: "Label",
  text: "This is an optional text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Label",
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  checked: true,
  disabled: true,
  label: "Label",
};

export const Error = Template.bind({});
Error.args = {
  checked: true,
  label: "Label",
  text: "This is an optional text",
  state: "error",
};

export const Success = Template.bind({});
Success.args = {
  checked: true,
  label: "Label",
  text: "This is an optional text",
  state: "success",
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

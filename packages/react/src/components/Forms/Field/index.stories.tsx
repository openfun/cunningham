import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Field } from ":/components/Forms/Field/index";

export default {
  title: "Components/Forms/Field",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => (
  <Field {...args}>
    <strong>Any children</strong>
  </Field>
);

export const Default = Template.bind({});
Default.args = {
  text: "This is an optional text",
  rightText: "Right text",
};

export const Success = Template.bind({});
Success.args = {
  state: "success",
  text: "This is an optional success message",
  rightText: "Right text",
};

export const Error = Template.bind({});
Error.args = {
  state: "error",
  text: "This is an optional error message",
  rightText: "Right text",
};

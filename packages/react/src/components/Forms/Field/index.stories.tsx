import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Field } from ":/components/Forms/Field/index";

export default {
  title: "Components/Forms/Field",
  component: Field,
} as Meta<typeof Field>;

const Template: StoryFn<typeof Field> = (args) => (
  <Field {...args}>
    <strong>Any children</strong>
  </Field>
);

export const Default = {
  render: Template,

  args: {
    text: "This is an optional text",
    rightText: "Right text",
  },
};

export const Success = {
  render: Template,

  args: {
    state: "success",
    text: "This is an optional success message",
    rightText: "Right text",
  },
};

export const Error = {
  render: Template,

  args: {
    state: "error",
    text: "This is an optional error message",
    rightText: "Right text",
  },
};

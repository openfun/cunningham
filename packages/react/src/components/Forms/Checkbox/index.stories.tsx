import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Checkbox } from "components/Forms/Checkbox/index";

export default {
  title: "Components/Forms (WIP)/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} aria-label="Checkbox" />
);

export const Default = Template.bind({});
Default.args = {};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

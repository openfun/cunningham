import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Tertiary",
  color: "tertiary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  color: "primary",
  disabled: true,
};

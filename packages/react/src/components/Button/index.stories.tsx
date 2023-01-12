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
  children: "Label",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Label",
  color: "secondary",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: "Label",
  color: "tertiary",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Label",
  color: "primary",
  disabled: true,
};

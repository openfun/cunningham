import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Input } from "components/Forms/Input/index";

export default {
  title: "Components/Forms (WIP)/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} aria-label="Input" />
);

export const Default = Template.bind({});
Default.args = {
  defaultValue: "Hello world",
};

import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "./index";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button />;

export const Default = Template.bind({});
Default.args = {};

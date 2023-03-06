import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Loader } from "components/Loader/index";

export default {
  title: "Components/Loader (WIP)",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Default = Template.bind({});
Default.args = {};

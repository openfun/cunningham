import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { Loader } from ":/components/Loader/index";

export default {
  title: "Components/Loader (WIP)",
  component: Loader,
} as Meta<typeof Loader>;

const Template: StoryFn<typeof Loader> = () => <Loader />;

export const Default = {
  render: Template,
  args: {},
};

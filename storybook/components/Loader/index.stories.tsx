import { Meta, StoryObj } from "@storybook/react";
import { Loader } from ":/components/Loader/index";

export default {
  title: "Components/Loader (WIP)",
  component: Loader,
} as Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Medium: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

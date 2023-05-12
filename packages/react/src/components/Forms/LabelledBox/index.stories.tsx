import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { LabelledBox } from ":/components/Forms/LabelledBox/index";

export default {
  title: "Components/Forms/LabelledBox",
  component: LabelledBox,
} as Meta<typeof LabelledBox>;

const Template: StoryFn<typeof LabelledBox> = (args) => (
  <div style={{ height: "3.5rem" }}>
    <LabelledBox {...args} />
  </div>
);

export const Default = {
  render: Template,

  args: {
    label: "Your label here",
    children: <span className="clr-greyscale-800">Hello world</span>,
  },
};

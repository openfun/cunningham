import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { LabelledBox } from ":/components/Forms/LabelledBox/index";

export default {
  title: "Components/Forms/LabelledBox",
  component: LabelledBox,
} as ComponentMeta<typeof LabelledBox>;

const Template: ComponentStory<typeof LabelledBox> = (args) => (
  <div style={{ height: "3.5rem" }}>
    <LabelledBox {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  label: "Your label here",
  children: <span className="clr-greyscale-800">Hello world</span>,
};

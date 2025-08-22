import { Meta, StoryFn } from "@storybook/react";
import React from "react";
import { LabelledBox } from ":/components/Forms/LabelledBox/index";

export default {
  title: "Components/Forms/LabelledBox",
  component: LabelledBox,
} as Meta<typeof LabelledBox>;

const DebugContainer = ({ children }: React.PropsWithChildren<{}>) => {
  const style: React.CSSProperties = {
    height: "3.5rem",
    // A grid background
    backgroundImage: `linear-gradient(to right, #eee 1px, transparent 1px), linear-gradient(to bottom, #eee 1px, transparent 1px)`,
    border: "solid #eee",
    backgroundSize: "1rem 1rem",
  };
  return <div style={style}>{children}</div>;
};

const Template: StoryFn<typeof LabelledBox> = (args) => (
  <DebugContainer>
    <LabelledBox {...args} />
  </DebugContainer>
);
export const Default = {
  render: Template,
  args: {
    label: "Your label here",
    children: <span className="clr-gray-800">Hello world</span>,
  },
};

export const LabelAsPlaceholder = {
  render: Template,
  args: {
    label: "Your label here",
    labelAsPlaceholder: true,
  },
};

export const NoLabel = {
  render: Template,
  args: {
    label: "Your label here",
    hideLabel: true,
    children: <span className="clr-gray-800">Hello world</span>,
  },
};

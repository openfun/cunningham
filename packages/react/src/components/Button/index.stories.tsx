import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
  },
};

export const PrimaryText: Story = {
  args: {
    children: "Primary Text",
    color: "primary-text",
    icon: <span className="material-icons">bolt</span>,
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    color: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary",
    color: "tertiary",
  },
};

export const TertiaryText: Story = {
  args: {
    children: "Tertiary Text",
    color: "tertiary-text",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    color: "primary",
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    color: "danger",
  },
};

export const Small: Story = {
  args: {
    children: "Primary",
    color: "primary",
    size: "small",
  },
};

export const Nano: Story = {
  args: {
    children: "Primary",
    color: "primary",
    size: "nano",
  },
};

export const FullWidth: Story = {
  args: {
    children: "Primary",
    color: "primary",
    fullWidth: true,
  },
};

export const FullWidthWithIcon: Story = {
  args: {
    children: "Primary",
    color: "primary",
    fullWidth: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

export const IconLeft: Story = {
  args: {
    children: "Icon",
    icon: <span className="material-icons">bolt</span>,
    color: "primary",
  },
};

export const IconRight: Story = {
  args: {
    children: "Icon",
    iconPosition: "right",
    icon: <span className="material-icons">bolt</span>,
    color: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    "aria-label": "Button with only an icon",
    icon: <span className="material-icons">bolt</span>,
    color: "primary",
  },
};

export const AsLink: Story = {
  args: {
    children: "Go to fun-mooc.fr",
    icon: <span className="material-icons">link</span>,
    color: "primary",
    href: "https://www.fun-mooc.fr/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button, ButtonProps } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

type AllButtonsProps = ButtonProps & {
  variant: ButtonProps["variant"];
};

const AllButtons = ({ variant = "brand" }: AllButtonsProps) => {
  return (
    <div
      style={{
        display: "flex",

        alignItems: "center",
        gap: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "start",
          justifyContent: "start",
        }}
      >
        <h4>Primary</h4>
        <Button {...Primary.args} variant={variant} />
        <Button {...PrimaryDisabled.args} variant={variant} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Secondary</h4>
        <Button {...Secondary.args} variant={variant} />
        <Button {...SecondaryDisabled.args} variant={variant} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Tertiary</h4>
        <Button {...BrandTertiary.args} variant={variant} />
        <Button {...TertiaryDisabled.args} variant={variant} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <h4>Bordered</h4>
        <Button {...Bordered.args} variant={variant} />
        <Button {...BrandBorderedDisabled.args} variant={variant} />
      </div>
    </div>
  );
};

export const AllBrands: Story = {
  render: () => {
    return <AllButtons variant="brand" />;
  },
};

export const AllNeutrals: Story = {
  render: () => {
    return <AllButtons variant="neutral" />;
  },
};

export const AllWarnings: Story = {
  render: () => {
    return <AllButtons variant="warning" />;
  },
};

export const AllErrors: Story = {
  render: () => {
    return <AllButtons variant="error" />;
  },
};

export const AllSuccesses: Story = {
  render: () => {
    return <AllButtons variant="success" />;
  },
};

export const AllInfos: Story = {
  render: () => {
    return <AllButtons variant="info" />;
  },
};

const Primary: Story = {
  args: {
    children: "Primary",
    color: "primary",
    icon: <span className="material-icons">bolt</span>,
  },
};

const PrimaryDisabled: Story = {
  args: {
    children: "Disabled",
    color: "primary",
    disabled: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

const Secondary: Story = {
  args: {
    children: "Secondary",
    color: "secondary",
    icon: <span className="material-icons">bolt</span>,
  },
};

const SecondaryDisabled: Story = {
  args: {
    children: "Disabled",
    color: "secondary",
    disabled: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

const BrandTertiary: Story = {
  args: {
    children: "Tertiary",
    color: "tertiary",
    icon: <span className="material-icons">bolt</span>,
  },
};

const TertiaryDisabled: Story = {
  args: {
    children: "Disabled",
    color: "tertiary",
    disabled: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

const Bordered: Story = {
  args: {
    children: "Bordered",
    color: "bordered",
    icon: <span className="material-icons">bolt</span>,
  },
};

const BrandBorderedDisabled: Story = {
  args: {
    children: " Disabled",
    color: "bordered",
    disabled: true,
    icon: <span className="material-icons">bolt</span>,
  },
};

export const Medium: Story = {
  args: {
    children: "Primary",
    color: "primary",
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

import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Alert, AlertProps, AlertType } from ":/components/Alert";
import { Button } from ":/components/Button";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const All: Story = {
  render: (args) => {
    const customProps: AlertProps = { type: args.type ?? AlertType.INFO };
    return (
      <div style={{ display: "flex", gap: "1rem", flexDirection: "column" }}>
        <Alert {...Info.args} primaryLabel={undefined} {...customProps} />
        <Alert {...Info.args} {...customProps} />
        <Alert {...InfoAdditionalInformation.args} {...customProps} />
        <Alert
          {...Info.args}
          additional="Additional information"
          expandable={true}
          expanded={true}
          {...customProps}
        />
      </div>
    );
  },
  argTypes: {
    type: {
      options: ["info", "success", "warning", "error", "neutral"],
    },
  },
};

export const Info: Story = {
  args: {
    children: "Alert component info",
    canClose: true,
    primaryLabel: "Primary",
  },
};
export const InfoWithTertiary: Story = {
  args: {
    children: "Alert component info",
    canClose: true,
    primaryLabel: "Primary",
    tertiaryLabel: "Tertiary",
  },
};
export const CustomButtons: Story = {
  args: {
    children: "Alert component info",
    canClose: true,
    buttons: (
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </div>
    ),
  },
};

export const Success: Story = {
  args: {
    children: "Alert component Success",
    canClose: true,
    primaryLabel: "Primary",
    type: AlertType.SUCCESS,
  },
};

export const Warning: Story = {
  args: {
    children: "Alert component Warning",
    canClose: true,
    primaryLabel: "Primary",
    type: AlertType.WARNING,
  },
};

export const Error: Story = {
  args: {
    children: "Alert component Error",
    canClose: true,
    primaryLabel: "Primary",
    type: AlertType.ERROR,
  },
};

export const Neutral: Story = {
  args: {
    children: "Alert component Neutral",
    canClose: true,
    primaryLabel: "Primary",
    type: AlertType.NEUTRAL,
  },
};

export const InfoAdditionalInformation: Story = {
  args: {
    children: "Alert component info",
    additional: "Additional information",
    canClose: true,
    primaryLabel: "Primary",
    tertiaryLabel: "Tertiary  ",
  },
};

export const Controlled: Story = {
  render: () => {
    const [closed, setClosed] = React.useState(false);
    return (
      <div>
        <Alert {...Info.args} closed={closed} onClose={() => setClosed(true)} />
        <div>closed: {closed ? "true" : "false"}</div>
        <Button onClick={() => setClosed(false)}>Open</Button>
        <Button onClick={() => setClosed(true)}>Close</Button>
      </div>
    );
  },
};

export const InfoExpandable: Story = {
  render: () => {
    return (
      <Alert
        {...Info.args}
        additional="Additional information"
        expandable={true}
      />
    );
  },
};

export const ExpandableControlled: Story = {
  render: () => {
    const [closed, setClosed] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);
    return (
      <div>
        <Alert
          {...Info.args}
          additional="Additional information"
          closed={closed}
          onClose={() => setClosed(true)}
          expandable={true}
          expanded={expanded}
          onExpand={(value) => setExpanded(value)}
        />
        <div>closed: {closed ? "true" : "false"}</div>
        <Button onClick={() => setClosed(false)}>Open</Button>
        <Button onClick={() => setClosed(true)}>Close</Button>
        <div>expanded: {expanded ? "true" : "false"}</div>
        <Button onClick={() => setExpanded(true)}>Expand</Button>
        <Button onClick={() => setExpanded(false)}>Shrink</Button>
      </div>
    );
  },
};

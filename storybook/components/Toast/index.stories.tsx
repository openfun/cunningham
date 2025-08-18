import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { ProgressBar, Toast } from ":/components/Toast/index";
import { Button } from ":/components/Button";
import { useToastProvider } from ":/components/Toast/ToastProvider";
import { VariantType } from ":/utils/VariantUtils";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  args: {
    children: "Corrupti vestigium aiunt aeneus demulceo consequatur.",
    duration: 30000,
    disableAnimate: true,
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Demo: Story = {
  render: () => {
    const { toast } = useToastProvider();
    const TYPES = [
      VariantType.INFO,
      VariantType.SUCCESS,
      VariantType.WARNING,
      VariantType.ERROR,
      VariantType.NEUTRAL,
    ];

    useEffect(() => {
      toast("Adhuc civis creber super amita", VariantType.SUCCESS, {
        primaryLabel: "Read more",
        primaryOnClick: () => {
          // eslint-disable-next-line no-alert
          alert("Clicked here !");
        },
      });
    }, []);

    return (
      <div style={{ height: "300px" }}>
        <Button
          onClick={() => {
            const type = TYPES[Math.floor(Math.random() * TYPES.length)];
            toast("Adhuc civis creber super amita", type, {
              primaryLabel: "Primary",
              primaryOnClick: () => {
                // eslint-disable-next-line no-alert
                alert("Clicked here !");
              },
            });
          }}
        >
          Create toast!
        </Button>
      </div>
    );
  },
};

export const Info: Story = {
  args: {
    type: VariantType.INFO,
  },
};

export const InfoWithButton: Story = {
  args: {
    type: VariantType.INFO,
    primaryLabel: "Primary",
  },
};

export const InfoCustom: Story = {
  args: {
    type: VariantType.INFO,
    actions: (
      <>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    type: VariantType.SUCCESS,
  },
};

export const Warning: Story = {
  args: {
    type: VariantType.WARNING,
  },
};

export const Error: Story = {
  args: {
    type: VariantType.ERROR,
  },
};

export const Neutral: Story = {
  args: {
    type: VariantType.NEUTRAL,
  },
};

export const ProgressBarExample: Story = {
  render: () => {
    return (
      <div>
        <ProgressBar duration={6000} />
      </div>
    );
  },
};

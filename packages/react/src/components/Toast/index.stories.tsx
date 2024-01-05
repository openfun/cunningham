import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { faker } from "@faker-js/faker";
import { ProgressBar, Toast } from ":/components/Toast/index";
import { Button } from ":/components/Button";
import { ToastType, useToastProvider } from ":/components/Toast/ToastProvider";

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
      ToastType.INFO,
      ToastType.SUCCESS,
      ToastType.WARNING,
      ToastType.ERROR,
      ToastType.NEUTRAL,
    ];

    useEffect(() => {
      toast(faker.lorem.sentence({ min: 5, max: 10 }), ToastType.SUCCESS, {
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
            toast(faker.lorem.sentence({ min: 5, max: 10 }), type, {
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
    type: ToastType.INFO,
  },
};

export const InfoWithButton: Story = {
  args: {
    type: ToastType.INFO,
    primaryLabel: "Primary",
  },
};

export const InfoCustom: Story = {
  args: {
    type: ToastType.INFO,
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
    type: ToastType.SUCCESS,
  },
};

export const Warning: Story = {
  args: {
    type: ToastType.WARNING,
  },
};

export const Error: Story = {
  args: {
    type: ToastType.ERROR,
  },
};

export const Neutral: Story = {
  args: {
    type: ToastType.NEUTRAL,
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

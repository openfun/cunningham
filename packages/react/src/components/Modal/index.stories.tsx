import { Meta, StoryObj } from "@storybook/react";
import React, { useEffect } from "react";
import { Modal, ModalSize, useModal } from ":/components/Modal/index";
import { Button } from ":/components/Button";
import { CunninghamProvider } from ":/components/Provider";
import longLorem from ":/components/Modal/resources/longLorem.json";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  args: {
    children: "Description",
    title: "Title",
  },
  decorators: [
    (Story, context) => {
      const modal = useModal();

      useEffect(() => {
        modal.open();
      }, []);

      return (
        <CunninghamProvider>
          <Button onClick={() => modal.open()}>Open Modal</Button>
          <Story args={{ ...context.args, ...modal }} />
        </CunninghamProvider>
      );
    },
  ],
  parameters: {
    docs: {
      story: {
        height: "250px",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Small: Story = {
  args: {
    size: ModalSize.SMALL,
  },
};
export const Medium: Story = {
  args: {
    size: ModalSize.MEDIUM,
  },
};

export const Large: Story = {
  args: {
    size: ModalSize.LARGE,
  },
};
export const ExtraLarge: Story = {
  args: {
    size: ModalSize.EXTRA_LARGE,
  },
};
export const Full: Story = {
  args: {
    size: ModalSize.FULL,
  },
};

export const HideCloseButton: Story = {
  args: {
    size: ModalSize.MEDIUM,
    hideCloseButton: true,
  },
};
export const CloseOnClickOutside: Story = {
  args: {
    size: ModalSize.MEDIUM,
    hideCloseButton: true,
    closeOnClickOutside: true,
  },
};
export const PreventClose: Story = {
  args: {
    size: ModalSize.MEDIUM,
    preventClose: true,
  },
};

export const PrimaryButton: Story = {
  args: {
    size: ModalSize.MEDIUM,
    rightActions: (
      <Button color="primary" fullWidth={true}>
        Primary
      </Button>
    ),
  },
};

export const SecondaryButton: Story = {
  args: {
    size: ModalSize.MEDIUM,
    rightActions: (
      <Button color="secondary" fullWidth={true}>
        Secondary
      </Button>
    ),
  },
};

export const TwoButtons: Story = {
  args: {
    size: ModalSize.MEDIUM,
    leftActions: (
      <Button color="secondary" fullWidth={true}>
        Secondary
      </Button>
    ),
    rightActions: (
      <Button color="primary" fullWidth={true}>
        Primary
      </Button>
    ),
  },
};

export const ThreeButtons: Story = {
  args: {
    size: ModalSize.MEDIUM,
    leftActions: (
      <Button color="tertiary" fullWidth={true}>
        Tertiary
      </Button>
    ),
    rightActions: (
      <>
        <Button color="secondary" fullWidth={true}>
          Secondary
        </Button>
        <Button color="primary" fullWidth={true}>
          Primary
        </Button>
      </>
    ),
  },
};

export const CenterButtons: Story = {
  args: {
    size: ModalSize.MEDIUM,
    actions: (
      <>
        <Button color="secondary">Secondary</Button>
        <Button color="primary">Primary</Button>
      </>
    ),
  },
};

export const ExampleApplication: Story = {
  args: {
    size: ModalSize.LARGE,
    title: "Application successful",
    titleIcon: <span className="material-icons clr-success-600">done</span>,
    children: (
      <>
        Thank you for submitting your application! Your information has been
        received successfully. <br />
        <br />
        You will receive a confirmation email shortly with the details of your
        submission. If there are any further steps required our team will be in
        touch.
      </>
    ),
    rightActions: <Button color="primary">I understand</Button>,
  },
  parameters: {
    docs: {
      story: {
        height: "500px",
      },
    },
  },
};

export const FullWithContent: Story = {
  args: {
    size: ModalSize.FULL,
    leftActions: <Button color="tertiary">Tertiary</Button>,
    rightActions: (
      <>
        <Button color="secondary">Secondary</Button>
        <Button color="primary">Primary</Button>
      </>
    ),
    children: longLorem.text,
  },
};

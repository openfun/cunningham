import { Meta } from "@storybook/react";
import React, { useEffect } from "react";
import { Button } from ":/components/Button";
import { useModals } from ":/components/Modal/ModalProvider";
import { VariantType } from ":/utils/VariantUtils";

const meta: Meta = {
  title: "Components/Modal",
  parameters: {
    docs: {
      story: {
        height: "350px",
      },
    },
  },
};

export default meta;

export const DeleteConfirmationModal = {
  render: () => {
    const modals = useModals();

    const ask = async () => {
      const decision = await modals.deleteConfirmationModal();
      alert(`You decided ${decision}`);
    };

    useEffect(() => {
      ask();
    }, []);

    return <Button onClick={ask}>Open</Button>;
  },
};

export const ConfirmationModal = {
  render: () => {
    const modals = useModals();

    const ask = async () => {
      const decision = await modals.confirmationModal();
      alert(`You decided ${decision}`);
    };

    useEffect(() => {
      ask();
    }, []);

    return <Button onClick={ask}>Open</Button>;
  },
};

const MessageWrapper = (type: VariantType) => () => {
  const modals = useModals();

  const ask = async () => {
    const decision = await modals.messageModal({
      title: "Watch out!",
      children: "This is a custom message!",
      messageType: type,
    });
    alert(`You decided ${decision}`);
  };

  useEffect(() => {
    ask();
  }, []);

  return <Button onClick={ask}>Open</Button>;
};

export const SuccessModal = {
  render: MessageWrapper(VariantType.SUCCESS),
};
export const InfoModal = {
  render: MessageWrapper(VariantType.INFO),
};

export const ErrorModal = {
  render: MessageWrapper(VariantType.ERROR),
};

export const NeutralModal = {
  render: MessageWrapper(VariantType.NEUTRAL),
};
export const WarningModal = {
  render: MessageWrapper(VariantType.WARNING),
};

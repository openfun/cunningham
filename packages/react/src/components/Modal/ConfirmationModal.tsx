import React from "react";
import { Modal, ModalSize } from ":/components/Modal/index";
import { useCunningham } from ":/components/Provider";
import { Button } from ":/components/Button";
import { DecisionModalProps } from ":/components/Modal/ModalProvider";

export type ConfirmationModalProps = DecisionModalProps;

export const ConfirmationModal = ({
  title,
  children,
  onDecide,
  ...props
}: ConfirmationModalProps) => {
  const { t } = useCunningham();
  return (
    <Modal
      title={title ?? t("components.modals.helpers.confirmation.title")}
      size={ModalSize.SMALL}
      actions={
        <>
          <Button
            color="secondary"
            fullWidth={true}
            onClick={() => onDecide(null)}
          >
            {t("components.modals.helpers.confirmation.cancel")}
          </Button>
          <Button fullWidth={true} onClick={() => onDecide("yes")}>
            {t("components.modals.helpers.confirmation.yes")}
          </Button>
        </>
      }
      {...props}
    >
      {children ?? t("components.modals.helpers.confirmation.children")}
    </Modal>
  );
};

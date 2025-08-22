import React from "react";
import { Modal, ModalSize } from ":/components/Modal/index";
import { useCunningham } from ":/components/Provider";
import { Button } from ":/components/Button";
import { DecisionModalProps } from ":/components/Modal/ModalProvider";

export type DeleteConfirmationModalProps = DecisionModalProps;

export const DeleteConfirmationModal = ({
  title,
  children,
  onDecide,
  ...props
}: DeleteConfirmationModalProps) => {
  const { t } = useCunningham();
  return (
    <Modal
      title={title ?? t("components.modals.helpers.delete_confirmation.title")}
      titleIcon={
        <span className="material-icons  delete-confirmation-icon">delete</span>
      }
      size={ModalSize.SMALL}
      actions={
        <>
          <Button
            color="secondary"
            fullWidth={true}
            onClick={() => onDecide(null)}
          >
            {t("components.modals.helpers.delete_confirmation.cancel")}
          </Button>
          <Button
            fullWidth={true}
            onClick={() => onDecide("delete")}
            variant="error"
          >
            {t("components.modals.helpers.delete_confirmation.delete")}
          </Button>
        </>
      }
      {...props}
    >
      <div className="c__modal__content__text">
        {children ??
          t("components.modals.helpers.delete_confirmation.children")}
      </div>
    </Modal>
  );
};

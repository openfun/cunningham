import React from "react";
import classNames from "classnames";
import { Modal, ModalSize } from ":/components/Modal/index";
import { useCunningham } from ":/components/Provider";
import { Button } from ":/components/Button";
import { DecisionModalProps } from ":/components/Modal/ModalProvider";
import { iconFromType, VariantType } from ":/utils/VariantUtils";

export type MessageModalProps = DecisionModalProps & {
  messageType: VariantType;
};

export const MessageModal = ({
  title,
  children,
  onDecide,
  messageType,
  ...props
}: MessageModalProps) => {
  const { t } = useCunningham();
  return (
    <Modal
      title={title ?? t("components.modals.helpers.disclaimer.title")}
      titleIcon={
        messageType !== VariantType.NEUTRAL && (
          <span
            className={classNames(
              "material-icons",
              `modal-message-${messageType}-icon`
            )}
          >
            {iconFromType(messageType)}
          </span>
        )
      }
      size={ModalSize.SMALL}
      actions={
        <Button fullWidth={true} onClick={() => onDecide("ok")}>
          {t("components.modals.helpers.disclaimer.ok")}
        </Button>
      }
      {...props}
    >
      <div className="c__modal__content__text">
        {children ?? t("components.modals.helpers.disclaimer.children")}
      </div>
    </Modal>
  );
};

import React from "react";
import classNames from "classnames";
import { Modal, ModalSize } from ":/components/Modal/index";
import { useCunningham } from ":/components/Provider";
import { Button } from ":/components/Button";
import { DecisionModalProps } from ":/components/Modal/ModalProvider";
import { colorFromType, iconFromType, VariantType } from ":/utils/VariantUtils";

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
              `clr-${colorFromType(messageType)}-600`,
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
      {children ?? t("components.modals.helpers.disclaimer.children")}
    </Modal>
  );
};

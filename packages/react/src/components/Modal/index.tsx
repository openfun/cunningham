import React, { PropsWithChildren, useEffect } from "react";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { Button } from ":/components/Button";

export type ModalHandle = {};

export enum ModalSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  FULL = "full",
}

export const useModal = ({
  isOpenDefault,
}: { isOpenDefault?: boolean } = {}) => {
  const [isOpen, setIsOpen] = React.useState(!!isOpenDefault);
  const onClose = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    onClose();
  };

  return {
    isOpen,
    onClose,
    open,
    close,
  };
};

export interface ModalProps
  extends PropsWithChildren<{
    size: ModalSize;
    isOpen: boolean;
    onClose: () => void;
    leftActions?: React.ReactNode;
    rightActions?: React.ReactNode;
    actions?: React.ReactNode;
    title?: string;
    titleIcon?: React.ReactNode;
    hideCloseButton?: boolean;
    closeOnClickOutside?: boolean;
    preventClose?: boolean;
  }> {}

export const Modal = (props: ModalProps) => {
  const ref = React.useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (props.isOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [props.isOpen]);

  useEffect(() => {
    ref.current?.addEventListener("close", () => props.onClose(), {
      once: true,
    });

    const onClick = (event: MouseEvent) => {
      const rect = ref.current!.getBoundingClientRect();
      const isInDialog =
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width;
      if (!isInDialog) {
        props.onClose();
      }
    };

    if (props.closeOnClickOutside) {
      ref.current?.addEventListener("click", onClick);
    }

    const preventClose = (event: Event) => {
      event.preventDefault();
    };

    if (props.preventClose) {
      ref.current?.addEventListener("cancel", preventClose);
    }

    return () => {
      ref.current?.removeEventListener("click", onClick);
      ref.current?.removeEventListener("click", preventClose);
    };
  }, [props.isOpen]);

  if (!props.isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <>
          <div aria-hidden={true} className="c__modal__backdrop" />
          <dialog
            ref={ref}
            className={classNames("c__modal", "c__modal--" + props.size)}
          >
            {!props.hideCloseButton && !props.preventClose && (
              <div className="c__modal__close">
                <Button
                  icon={<span className="material-icons">close</span>}
                  color="tertiary-text"
                  size="nano"
                  onClick={() => props.onClose()}
                />
              </div>
            )}
            {props.titleIcon && (
              <div className="c__modal__title-icon">{props.titleIcon}</div>
            )}
            {props.title && (
              <div className="c__modal__title">{props.title}</div>
            )}

            {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
            <div className="c__modal__content" tabIndex={0}>
              {props.children}
            </div>
            <ModalFooter {...props} />
          </dialog>
        </>,
        document.getElementById("c__modals-portal")!,
      )}
    </>
  );
};

export const ModalFooter = ({
  leftActions,
  rightActions,
  actions,
}: ModalProps) => {
  if ((leftActions || rightActions) && actions) {
    throw new Error("Cannot use leftActions or rightActions with actions");
  }

  if (!leftActions && !rightActions && !actions) {
    return null;
  }

  return (
    <div
      className={classNames("c__modal__footer", {
        "c__modal__footer--sided": leftActions || rightActions,
      })}
    >
      {actions || (
        <>
          <div className="c__modal__footer__left">{leftActions}</div>
          <div className="c__modal__footer__right">{rightActions}</div>
        </>
      )}
    </div>
  );
};

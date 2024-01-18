import React, {
  createContext,
  createElement,
  Fragment,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";
import {
  DeleteConfirmationModal,
  DeleteConfirmationModalProps,
} from ":/components/Modal/DeleteConfirmationModal";
import { randomString } from ":/utils";
import { ModalProps, useModal } from ":/components/Modal/index";
import {
  ConfirmationModal,
  ConfirmationModalProps,
} from ":/components/Modal/ConfirmationModal";
import { WithOptional } from ":/types";
import {
  MessageModal,
  MessageModalProps,
} from ":/components/Modal/MessageModal";

export type Decision = string | null | undefined;
export type DecisionModalProps = WithOptional<ModalProps, "size"> & {
  onDecide: (decision?: Decision) => void;
};
// TODO: I don't really like this "& any", but it's the only way I found to make it work for MessageModal.
type DecisionModalComponent = FunctionComponent<DecisionModalProps & any>;

interface ModalContextType {
  deleteConfirmationModal: (
    props?: Partial<DeleteConfirmationModalProps>,
  ) => Promise<Decision>;
  confirmationModal: (
    props?: Partial<ConfirmationModalProps>,
  ) => Promise<Decision>;
  messageModal: (props?: Partial<MessageModalProps>) => Promise<Decision>;
}

const ModalContext = createContext<undefined | ModalContextType>(undefined);

export const useModals = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModals must be used within a ModalProvider.");
  }
  return context;
};

/**
 * This component is used to wrap a modal component and add the modal context to it.
 * It handles creating a generic `component` modal, and closing it when the `onClose` callback is called.
 *
 * @param component
 * @param onClose
 * @param props
 * @constructor
 */
const ModalContainer = ({
  component,
  onClose,
  props,
}: {
  component: DecisionModalComponent;
  onClose: Function;
  props: Partial<DecisionModalProps>;
}) => {
  const modal = useModal({ isOpenDefault: true });

  const close = () => {
    modal.onClose();
    onClose();
  };

  const onCloseLocal = () => {
    close();
    // Closing sends a "undefined" decision.
    props.onDecide?.();
  };

  const onDecide = (decision?: Decision) => {
    close();
    props.onDecide?.(decision);
  };

  return createElement(component, {
    ...modal,
    ...props,
    onClose: onCloseLocal,
    onDecide,
  });
};

type ModalMap = Map<string, ReactNode>;

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const [modals, setModals] = useState<ModalMap>({} as ModalMap);

  const addModal = (
    component: FunctionComponent<DecisionModalProps>,
    props: Partial<DecisionModalProps>,
  ) => {
    const key = randomString(32);
    const container = (
      <ModalContainer
        component={component}
        props={props}
        onClose={() => {
          setModals((modals_) => {
            // @ts-ignore
            delete modals_[key];
            return modals_;
          });
        }}
      />
    );
    setModals((modals_) => ({
      ...modals_,
      [key]: container,
    }));
  };

  const ModalHelper = (component: DecisionModalComponent) => {
    return (props: Partial<DecisionModalProps> = {}) => {
      return new Promise<Decision>((resolve) => {
        addModal(component, {
          onDecide: (decision) => {
            resolve(decision);
          },
          ...props,
        });
      });
    };
  };

  const context: ModalContextType = useMemo(
    () => ({
      deleteConfirmationModal: ModalHelper(DeleteConfirmationModal),
      confirmationModal: ModalHelper(ConfirmationModal),
      messageModal: ModalHelper(MessageModal),
    }),
    [],
  );

  return (
    <ModalContext.Provider value={context}>
      {children}
      <div id="c__modals-portal" />
      {Object.entries(modals).map(([key, modal]) => (
        <Fragment key={key}>{modal}</Fragment>
      ))}
    </ModalContext.Provider>
  );
};

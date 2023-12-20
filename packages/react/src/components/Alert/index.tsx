import React, { PropsWithChildren, ReactNode } from "react";
import { ButtonProps } from ":/components/Button";
import { useControllableState } from ":/hooks/useControllableState";
import { AlertAdditionalExpandable } from ":/components/Alert/AlertAdditionalExpandable";
import { AlertAdditional } from ":/components/Alert/AlertAdditional";
import { AlertOneLine } from ":/components/Alert/AlertOneLine";

export enum AlertType {
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
  NEUTRAL = "neutral",
}

export interface AlertProps extends PropsWithChildren {
  additional?: React.ReactNode;
  buttons?: React.ReactNode;
  canClose?: boolean;
  className?: string;
  closed?: boolean;
  expandable?: boolean;
  expanded?: boolean;
  hide?: boolean;
  icon?: ReactNode;
  onClose?: (value: boolean) => void;
  onExpand?: (value: boolean) => void;
  primaryLabel?: string;
  primaryOnClick?: ButtonProps["onClick"];
  primaryProps?: ButtonProps;
  tertiaryLabel?: string;
  tertiaryOnClick?: ButtonProps["onClick"];
  tertiaryProps?: ButtonProps;
  type?: AlertType;
}

export const Alert = (props: AlertProps) => {
  const [closed, onClose] = useControllableState(
    false,
    props.closed,
    props.onClose,
  );

  const propsWithDefault = {
    type: AlertType.INFO,
    ...props,
    onClose,
  };

  if (closed) {
    return null;
  }
  if (props.additional) {
    if (props.expandable) {
      return <AlertAdditionalExpandable {...propsWithDefault} />;
    }
    return <AlertAdditional {...propsWithDefault} />;
  }
  return <AlertOneLine {...propsWithDefault} />;
};

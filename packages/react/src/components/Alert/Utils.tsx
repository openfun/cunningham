import React, { useMemo } from "react";
import classNames from "classnames";
import { Button } from ":/components/Button";
import { AlertProps, AlertType } from ":/components/Alert/index";
import { useCunningham } from ":/components/Provider";
import { ToastType } from ":/components/Toast/ToastProvider";

export const AlertWrapper = (props: AlertProps) => {
  return (
    <div
      className={classNames(
        "c__alert",
        "c__alert--" + props.type,
        props.className,
        {
          "c__alert--hide": props.hide,
        },
      )}
    >
      {props.children}
    </div>
  );
};

export const iconFromType = (type?: AlertType | ToastType) => {
  switch (type) {
    case AlertType.INFO:
      return "info";
    case AlertType.SUCCESS:
      return "check_circle";
    case AlertType.WARNING:
      return "error_outline";
    case AlertType.ERROR:
      return "cancel";
    default:
      return "";
  }
};

export const colorFromType = (type?: AlertType | ToastType) => {
  switch (type) {
    case AlertType.INFO:
      return "info";
    case AlertType.SUCCESS:
      return "success";
    case AlertType.WARNING:
      return "warning";
    case AlertType.ERROR:
      return "danger";
    default:
      return "neutral";
  }
};

export const AlertIcon = ({ type, ...props }: AlertProps) => {
  const icon = useMemo(() => iconFromType(type), [type]);
  if (props.icon) {
    return props.icon;
  }
  if (!icon) {
    return null;
  }
  return (
    <div className="c__alert__icon">
      <span className="material-icons">{icon}</span>
    </div>
  );
};

export const AlertClose = (props: AlertProps) => {
  const { t } = useCunningham();
  return (
    props.canClose && (
      <Button
        color="tertiary"
        size="small"
        icon={<span className="material-icons">close</span>}
        aria-label={t("components.alert.close_aria_label")}
        onClick={() => {
          props.onClose?.(true);
        }}
      />
    )
  );
};

export const AlertButtons = (props: AlertProps) => {
  return (
    <>
      {props.tertiaryLabel && (
        <Button
          color="tertiary-text"
          onClick={props.tertiaryOnClick}
          {...props.tertiaryProps}
        >
          {props.tertiaryLabel}
        </Button>
      )}
      {props.primaryLabel && (
        <Button
          color="primary-text"
          onClick={props.primaryOnClick}
          {...props.primaryProps}
        >
          {props.primaryLabel}
        </Button>
      )}
      {props.buttons}
    </>
  );
};

import React from "react";
import { AlertProps } from ":/components/Alert/index";
import {
  AlertButtons,
  AlertClose,
  AlertIcon,
  AlertWrapper,
} from ":/components/Alert/Utils";

export const AlertOneLine = (props: AlertProps) => {
  const hasActions =
    props.canClose ||
    props.primaryLabel ||
    props.tertiaryLabel ||
    props.buttons;
  return (
    <AlertWrapper {...props}>
      <div className="c__alert__content">
        <div className="c__alert__content__left">
          {props.children}
          <AlertIcon {...props} />
        </div>
        {hasActions && (
          <div className="c__alert__actions">
            <AlertButtons {...props} />
            <AlertClose {...props} />
          </div>
        )}
      </div>
    </AlertWrapper>
  );
};

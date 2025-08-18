import React from "react";
import { AlertProps } from ":/components/Alert/index";
import {
  AlertButtons,
  AlertClose,
  AlertIcon,
  AlertWrapper,
} from ":/components/Alert/Utils";

export const AlertAdditional = (props: AlertProps) => {
  return (
    <AlertWrapper {...props}>
      <div className="c__alert__content">
        <div className="c__alert__content__left">
          {props.children}
          <AlertIcon {...props} />
        </div>
        <AlertClose {...props} />
      </div>
      <div className="c__alert__additional">{props.additional}</div>
      <div className="c__alert-additional__buttons">
        <AlertButtons {...props} />
      </div>
    </AlertWrapper>
  );
};

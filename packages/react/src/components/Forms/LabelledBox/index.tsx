import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export interface Props extends PropsWithChildren {
  label?: string;
  labelAsPlaceholder?: boolean;
  htmlFor?: string;
  labelId?: string;
  hideLabel?: boolean;
  horizontal?: boolean;
}

export const LabelledBox = ({
  children,
  label,
  labelAsPlaceholder,
  htmlFor,
  labelId,
  hideLabel,
  horizontal,
}: Props) => {
  return (
    <div
      className={classNames("labelled-box", {
        "labelled-box--no-label": hideLabel,
        "labelled-box--horizontal": horizontal,
      })}
    >
      {label && (
        <label
          className={classNames("labelled-box__label", {
            placeholder: labelAsPlaceholder,
            offscreen: hideLabel,
          })}
          htmlFor={htmlFor}
          id={labelId}
        >
          {label}
        </label>
      )}
      <div className="labelled-box__children">{children}</div>
    </div>
  );
};

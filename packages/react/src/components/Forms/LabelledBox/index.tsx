import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export interface Props extends PropsWithChildren {
  label?: string;
  labelAsPlaceholder?: boolean;
  htmlFor?: string;
  labelId?: string;
  hideLabel?: boolean;
  horizontal?: boolean;
  disabled?: boolean;
}

export const LabelledBox = ({
  children,
  label,
  labelAsPlaceholder,
  htmlFor,
  labelId,
  hideLabel,
  horizontal,
  disabled,
}: Props) => {
  return (
    <div
      className={classNames("labelled-box", {
        "labelled-box--no-label": hideLabel,
        "labelled-box--horizontal": horizontal,
        "labelled-box--disabled": disabled,
      })}
    >
      {label && (
        <label
          className={classNames("labelled-box__label", {
            placeholder: labelAsPlaceholder,
            c__offscreen: hideLabel,
          })}
          htmlFor={htmlFor}
          id={labelId}
        >
          <span>{label}</span>
        </label>
      )}
      <div className="labelled-box__children">{children}</div>
    </div>
  );
};

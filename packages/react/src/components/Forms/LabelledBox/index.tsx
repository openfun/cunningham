import React, { PropsWithChildren } from "react";

export interface Props extends PropsWithChildren {
  label?: string;
  labelAsPlaceholder?: boolean;
  htmlFor?: string;
  labelId?: string;
}

export const LabelledBox = ({
  children,
  label,
  labelAsPlaceholder,
  htmlFor,
  labelId,
}: Props) => {
  return (
    <div className="labelled-box">
      {label && (
        <label
          className={labelAsPlaceholder ? "placeholder" : ""}
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

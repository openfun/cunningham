import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export type FieldState = "success" | "error" | "default";

export type FieldProps = {
  state?: FieldState | undefined;
  text?: string | undefined;
  rightText?: string | undefined;
  fullWidth?: boolean | undefined;
  compact?: boolean | undefined;
  className?: string | undefined;
};

type Props = FieldProps & PropsWithChildren;

export const Field = ({
  children,
  state = "default",
  text,
  rightText,
  fullWidth,
  compact,
  className,
}: Props) => {
  return (
    <div
      className={classNames("c__field", "c__field--" + state, className, {
        "c__field--full-width": fullWidth,
        "c__field--compact": compact && !fullWidth,
      })}
    >
      {children}
      {(text || rightText) && (
        <div className="c__field__footer">
          <span className="c__field__text">{text}</span>
          <span className="c__field__text__right">{rightText}</span>
        </div>
      )}
    </div>
  );
};

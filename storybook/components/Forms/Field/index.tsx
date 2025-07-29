import React, { PropsWithChildren } from "react";
import classNames from "classnames";

export type FieldState = "success" | "error" | "default";

export type FieldProps = {
  state?: FieldState | undefined;
  text?: string | undefined;
  textItems?: string[] | undefined;
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
  textItems,
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
      {(text || rightText || textItems) && (
        <div className="c__field__footer">
          {(text || rightText) && (
            <div className="c__field__footer__top">
              <span className="c__field__text">{text}</span>
              <span className="c__field__text__right">{rightText}</span>
            </div>
          )}
          {textItems && (
            <ul className="c__field__footer__items">
              {textItems.map((textItem) => (
                <li key={textItem}>{textItem}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";

export type RadioProps = InputHTMLAttributes<HTMLInputElement> &
  FieldProps & {
    label?: string;
  };

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, text, textItems, state, ...props }: RadioProps, ref) => {
    return (
      <label
        className={classNames("c__checkbox", "c__radio", {
          "c__checkbox--disabled": props.disabled,
        })}
      >
        <Field text={text} compact={true} state={state} textItems={textItems}>
          <div className="c__checkbox__container">
            <input type="radio" {...props} ref={ref} />
            {label && <div className="c__checkbox__label">{label}</div>}
          </div>
        </Field>
      </label>
    );
  },
);

export const RadioGroup = ({
  children,
  state,
  text,
  textItems,
  rightText,
  style,
}: PropsWithChildren & FieldProps & { style?: React.CSSProperties }) => {
  return (
    <Field
      className="c__radio__group c__checkbox__group"
      state={state}
      text={text}
      textItems={textItems}
      rightText={rightText}
      compact={true}
    >
      <div className="c__checkbox__group__list" style={style}>
        {children}
      </div>
    </Field>
  );
};

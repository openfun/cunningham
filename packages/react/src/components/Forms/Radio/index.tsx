import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";

type Props = InputHTMLAttributes<HTMLInputElement> &
  FieldProps & {
    label?: string;
  };

export const Radio = forwardRef<HTMLInputElement, Props>(
  ({ label, text, state, ...props }: Props, ref) => {
    return (
      <label
        className={classNames("c__checkbox", "c__radio", {
          "c__checkbox--disabled": props.disabled,
        })}
      >
        <Field text={text} compact={true} state={state}>
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
  rightText,
  style,
}: PropsWithChildren & FieldProps & { style?: React.CSSProperties }) => {
  return (
    <Field
      className="c__radio__group c__checkbox__group"
      state={state}
      text={text}
      rightText={rightText}
      compact={true}
    >
      <div className="c__checkbox__group__list" style={style}>
        {children}
      </div>
    </Field>
  );
};

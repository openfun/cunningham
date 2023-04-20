import React, { InputHTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";
import { Field, FieldProps } from "components/Forms/Field";

type Props = InputHTMLAttributes<HTMLInputElement> &
  FieldProps & {
    label?: string;
  };

export const Radio = ({ label, text, state, ...props }: Props) => {
  return (
    <label
      className={classNames("c__checkbox", "c__radio", {
        "c__checkbox--disabled": props.disabled,
      })}
    >
      <Field text={text} compact={true} state={state}>
        <div className="c__checkbox__container">
          <input type="radio" {...props} />
          {label && <div className="c__checkbox__label">{label}</div>}
        </div>
      </Field>
    </label>
  );
};

export const RadioGroup = ({
  children,
  state,
  text,
  rightText,
}: PropsWithChildren & FieldProps) => {
  return (
    <Field
      className="c__radio__group c__checkbox__group"
      state={state}
      text={text}
      rightText={rightText}
      compact={true}
    >
      <div className="c__checkbox__group__list">{children}</div>
    </Field>
  );
};

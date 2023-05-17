import React, { InputHTMLAttributes } from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";

type Props = InputHTMLAttributes<HTMLInputElement> &
  FieldProps & {
    label?: string;
    labelSide?: "left" | "right";
  };

export const Switch = ({
  label,
  text,
  state,
  fullWidth,
  labelSide = "left",

  ...props
}: Props) => {
  return (
    <label
      className={classNames(
        "c__checkbox",
        "c__switch",
        "c__switch--" + labelSide,
        {
          "c__checkbox--disabled": props.disabled,
          "c__switch--full-width": fullWidth,
        }
      )}
    >
      <Field text={text} compact={true} state={state} fullWidth={fullWidth}>
        <div className="c__checkbox__container">
          {label && <div className="c__checkbox__label">{label}</div>}
          <div className="c__switch__rail__wrapper">
            <input type="checkbox" {...props} />
            <div className="c__switch__rail" />
          </div>
        </div>
      </Field>
    </label>
  );
};

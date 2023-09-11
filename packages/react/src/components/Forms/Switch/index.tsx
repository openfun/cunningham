import React, { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";

export type SwitchOnlyProps = {
  label?: string;
  labelSide?: "left" | "right";
};

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> &
  FieldProps &
  SwitchOnlyProps;

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, labelSide = "left", ...props }: SwitchProps, ref) => {
    const {
      compact,
      fullWidth,
      rightText,
      state,
      text,
      textItems,
      ...inputProps
    } = props;

    return (
      <label
        className={classNames(
          "c__checkbox",
          "c__switch",
          "c__switch--" + labelSide,
          {
            "c__checkbox--disabled": props.disabled,
            "c__switch--full-width": props.fullWidth,
          },
        )}
      >
        <Field compact={true} {...props}>
          <div className="c__checkbox__container">
            {label && <div className="c__checkbox__label">{label}</div>}
            <div className="c__switch__rail__wrapper">
              <input type="checkbox" {...inputProps} ref={ref} />
              <div className="c__switch__rail" />
            </div>
          </div>
        </Field>
      </label>
    );
  },
);

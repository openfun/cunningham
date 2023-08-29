import React, { InputHTMLAttributes, forwardRef } from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";

export type SwitchProps = InputHTMLAttributes<HTMLInputElement> &
  FieldProps & {
    label?: string;
    labelSide?: "left" | "right";
  };

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      text,
      textItems,
      state,
      fullWidth,
      labelSide = "left",
      ...props
    }: SwitchProps,
    ref,
  ) => {
    return (
      <label
        className={classNames(
          "c__checkbox",
          "c__switch",
          "c__switch--" + labelSide,
          {
            "c__checkbox--disabled": props.disabled,
            "c__switch--full-width": fullWidth,
          },
        )}
      >
        <Field
          text={text}
          textItems={textItems}
          compact={true}
          state={state}
          fullWidth={fullWidth}
        >
          <div className="c__checkbox__container">
            {label && <div className="c__checkbox__label">{label}</div>}
            <div className="c__switch__rail__wrapper">
              <input type="checkbox" {...props} ref={ref} />
              <div className="c__switch__rail" />
            </div>
          </div>
        </Field>
      </label>
    );
  },
);

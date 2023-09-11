import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";

export type RadioOnlyProps = {
  label?: string;
};

export type RadioProps = InputHTMLAttributes<HTMLInputElement> &
  FieldProps &
  RadioOnlyProps;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, ...props }: RadioProps, ref) => {
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
        className={classNames("c__checkbox", "c__radio", {
          "c__checkbox--disabled": props.disabled,
          "c__checkbox--full-width": props.fullWidth,
        })}
      >
        <Field compact={true} {...props}>
          <div className="c__checkbox__container">
            <input type="radio" {...inputProps} ref={ref} />
            {label && <div className="c__checkbox__label">{label}</div>}
          </div>
        </Field>
      </label>
    );
  },
);

export const RadioGroup = ({
  children,
  style,
  ...props
}: PropsWithChildren & FieldProps & { style?: React.CSSProperties }) => {
  return (
    <Field
      className="c__radio__group c__checkbox__group"
      compact={true}
      {...props}
    >
      <div className="c__checkbox__group__list" style={style}>
        {children}
      </div>
    </Field>
  );
};

import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  forwardRef,
  ReactNode,
} from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";

export type RadioOnlyProps = {
  label?: ReactNode;
};

export type RadioProps = InputHTMLAttributes<HTMLInputElement> &
  FieldProps &
  RadioOnlyProps;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, ...props }: RadioProps, ref) => {
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
        className={classNames("c__checkbox", "c__radio", className, {
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
  className,
  children,
  style,
  ...props
}: PropsWithChildren & FieldProps & { style?: React.CSSProperties }) => {
  return (
    <Field
      className={classNames("c__radio__group c__checkbox__group", className)}
      compact={true}
      {...props}
    >
      <div className="c__checkbox__group__list" style={style}>
        {children}
      </div>
    </Field>
  );
};

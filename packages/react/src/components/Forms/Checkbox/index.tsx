import React, {
  InputHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useRef,
  useState,
  ReactNode,
  RefAttributes,
} from "react";
import classNames from "classnames";
import { Field, FieldProps } from ":/components/Forms/Field";

export type CheckboxOnlyProps = {
  indeterminate?: boolean;
  label?: ReactNode;
};

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> &
  RefAttributes<HTMLInputElement> &
  FieldProps &
  CheckboxOnlyProps;

export const Checkbox = ({
  indeterminate,
  className = "",
  checked,
  label,
  ref,
  ...props
}: CheckboxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<boolean>(!!checked);

  useEffect(() => {
    setValue(!!checked);
  }, [checked]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = !!indeterminate;
    }
  }, [indeterminate]);

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
      className={classNames("c__checkbox", className, {
        "c__checkbox--disabled": props.disabled,
        "c__checkbox--full-width": props.fullWidth,
      })}
    >
      <Field compact={true} {...props}>
        <div className="c__checkbox__container">
          <div className="c__checkbox__wrapper">
            <input
              type="checkbox"
              {...inputProps}
              onChange={(e) => {
                setValue(e.target.checked);
                props.onChange?.(e);
              }}
              checked={value}
              ref={(checkboxRef) => {
                if (typeof ref === "function") {
                  ref(checkboxRef);
                }
                inputRef.current = checkboxRef || null;
              }}
            />
            <Indeterminate />
            <Checkmark />
          </div>
          {label && <div className="c__checkbox__label">{label}</div>}
        </div>
      </Field>
    </label>
  );
};

export const CheckboxGroup = ({
  children,
  className,
  ...props
}: PropsWithChildren & FieldProps) => {
  return (
    <Field className={classNames("c__checkbox__group", className)} {...props}>
      <div className="c__checkbox__group__list">{children}</div>
    </Field>
  );
};

const Checkmark = () => (
  <svg
    className="checkmark"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={(e) => e.stopPropagation()}
  >
    <path
      d="M17.5685 6.34318L9.8751 14.0366L7.07184 11.2333C6.84127 11.0106 6.53245 10.8874 6.21191 10.8902C5.89137 10.893 5.58474 11.0215 5.35807 11.2482C5.1314 11.4749 5.00283 11.7815 5.00005 12.102C4.99726 12.4226 5.12048 12.7314 5.34318 12.962L9.01077 16.6296C9.24003 16.8587 9.55093 16.9875 9.8751 16.9875C10.1993 16.9875 10.5102 16.8587 10.7394 16.6296L19.2972 8.07184C19.5198 7.84127 19.6431 7.53245 19.6403 7.21191C19.6375 6.89136 19.5089 6.58474 19.2823 6.35807C19.0556 6.1314 18.749 6.00283 18.4284 6.00005C18.1079 5.99726 17.7991 6.12048 17.5685 6.34318Z"
      fill="currentColor"
    />
  </svg>
);

const Indeterminate = () => (
  <svg
    className="indeterminate"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={(e) => e.stopPropagation()}
  >
    <rect x="5" y="10" width="14" height="3" rx="1.5" fill="currentColor" />
  </svg>
);

import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { randomString } from ":/utils";
import { Field, FieldProps } from ":/components/Forms/Field";
import { LabelledBox } from ":/components/Forms/LabelledBox";

export type InputOnlyProps = {
  label?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  charCounter?: boolean;
  charCounterMax?: number;
};

export type InputProps = InputHTMLAttributes<HTMLInputElement> &
  FieldProps &
  InputOnlyProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      defaultValue,
      label,
      id,
      icon,
      rightIcon,
      charCounter,
      charCounterMax,
      ...props
    }: InputProps,
    ref,
  ) => {
    const classes = ["c__input"];
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [inputFocus, setInputFocus] = useState(false);
    const [value, setValue] = useState(defaultValue || props.value || "");
    const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(!value);
    const idToUse = useRef(id || randomString());
    const rightTextToUse = charCounter
      ? `${value.toString().length}/${charCounterMax}`
      : props.rightText;

    const updateLabel = () => {
      if (inputFocus) {
        setLabelAsPlaceholder(false);
        return;
      }
      setLabelAsPlaceholder(!value);
    };

    useEffect(() => {
      updateLabel();
    }, [inputFocus, value]);

    // If the input is used as a controlled component, we need to update the local value.
    useEffect(() => {
      if (defaultValue !== undefined) {
        return;
      }
      setValue(props.value || "");
    }, [props.value]);

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
      <Field {...props} rightText={rightTextToUse} className={className}>
        {/* We disabled linting for this specific line because we consider that the onClick props is only used for */}
        {/* mouse users, so this do not engender any issue for accessibility. */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={classNames(
            "c__input__wrapper",
            props.state && "c__input__wrapper--" + props.state,
            {
              "c__input__wrapper--disabled": props.disabled,
            },
          )}
          onClick={() => {
            inputRef.current?.focus();
          }}
        >
          {!!icon && <div className="c__input__icon-left">{icon}</div>}
          <LabelledBox
            label={label}
            htmlFor={idToUse.current}
            labelAsPlaceholder={labelAsPlaceholder}
            disabled={props.disabled}
          >
            <input
              type="text"
              className={classes.join(" ")}
              {...inputProps}
              id={idToUse.current}
              value={value}
              onFocus={(e) => {
                setInputFocus(true);
                props.onFocus?.(e);
              }}
              onBlur={(e) => {
                setInputFocus(false);
                props.onBlur?.(e);
              }}
              onChange={(e) => {
                setValue(e.target.value);
                props.onChange?.(e);
              }}
              ref={(inputTextRef) => {
                if (ref) {
                  if (typeof ref === "function") {
                    ref(inputTextRef);
                  } else {
                    ref.current = inputTextRef;
                  }
                }
                inputRef.current = inputTextRef;
              }}
            />
          </LabelledBox>
          {!!rightIcon && (
            <div className="c__input__icon-right">{rightIcon}</div>
          )}
        </div>
      </Field>
    );
  },
);

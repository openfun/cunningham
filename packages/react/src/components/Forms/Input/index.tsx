import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import { randomString } from ":/utils";
import { Field, FieldProps } from ":/components/Forms/Field";
import { LabelledBox } from ":/components/Forms/LabelledBox";

export interface InputRefType {
  input: HTMLInputElement | null;
}

type Props = InputHTMLAttributes<HTMLInputElement> &
  FieldProps & {
    label?: string;
    icon?: ReactNode;
    rightIcon?: ReactNode;
    charCounter?: boolean;
    charCounterMax?: number;
  };

export const Input = forwardRef<InputRefType, Props>(
  (
    {
      className,
      defaultValue,
      label,
      id,
      icon,
      rightIcon,
      state = "default",
      text,
      rightText,
      fullWidth,
      charCounter,
      charCounterMax,
      ...props
    }: Props,
    ref
  ) => {
    const classes = ["c__input"];
    if (className) {
      classes.push(className);
    }

    const inputRef = useRef<HTMLInputElement>(null);
    const [inputFocus, setInputFocus] = useState(false);
    const [value, setValue] = useState(defaultValue || props.value || "");
    const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(!value);
    const idToUse = useRef(id || randomString());
    const rightTextToUse = charCounter
      ? `${value.toString().length}/${charCounterMax}`
      : rightText;

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

    useImperativeHandle(ref, () => ({
      get input() {
        return inputRef.current;
      },
    }));

    return (
      <Field
        state={state}
        text={text}
        rightText={rightTextToUse}
        fullWidth={fullWidth}
      >
        {/* We disabled linting for this specific line because we consider that the onClick props is only used for */}
        {/* mouse users, so this do not engender any issue for accessibility. */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={classNames(
            "c__input__wrapper",
            "c__input__wrapper--" + state,
            {
              "c__input__wrapper--disabled": props.disabled,
            }
          )}
          onClick={() => {
            inputRef.current?.focus();
          }}
        >
          {!!icon && icon}
          <LabelledBox
            label={label}
            htmlFor={idToUse.current}
            labelAsPlaceholder={labelAsPlaceholder}
          >
            <input
              type="text"
              className={classes.join(" ")}
              {...props}
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
              ref={inputRef}
            />
          </LabelledBox>
          {!!rightIcon && rightIcon}
        </div>
      </Field>
    );
  }
);

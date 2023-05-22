import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { DateValue, parseDate } from "@internationalized/date";
import {
  DatePickerStateOptions,
  useDatePickerState,
} from "@react-stately/datepicker";
import { useDatePicker } from "@react-aria/datepicker";
import classNames from "classnames";
import { Button } from ":/components/Button";
import { Field, FieldProps } from ":/components/Forms/Field";
import { LabelledBox } from ":/components/Forms/LabelledBox";
import { DateField } from ":/components/Forms/DatePicker/DateField";
import { Calendar } from ":/components/Forms/DatePicker/Calendar";
import { Popover } from ":/components/Popover";
import { useCunningham } from ":/components/Provider";

type DatePickerProps = PropsWithChildren &
  FieldProps & {
    label: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    minValue?: string;
    maxValue?: string;
    onChange?: (value: string) => void | undefined;
    disabled?: boolean;
  };

export const DatePicker = ({
  label,
  name,
  disabled = false,
  ...props
}: DatePickerProps) => {
  const datePickerOptions: DatePickerStateOptions<DateValue> = {
    value:
      props.value === undefined
        ? undefined
        : (props.value && parseDate(props.value)) || null,
    defaultValue: props.defaultValue
      ? parseDate(props.defaultValue)
      : undefined,
    minValue: props.minValue ? parseDate(props.minValue) : undefined,
    maxValue: props.maxValue ? parseDate(props.maxValue) : undefined,
    onChange: (v: DateValue | null) => {
      const date = v?.toString() || "";
      props.onChange?.(date);
    },
    shouldCloseOnSelect: true,
    granularity: "day",
    isDisabled: disabled,
  };

  const state = useDatePickerState(datePickerOptions);
  const pickerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { t } = useCunningham();

  const { fieldProps, buttonProps, groupProps, calendarProps } = useDatePicker(
    datePickerOptions,
    state,
    wrapperRef
  );

  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState(true);
  const [isDateInvalid, setIsDateInvalid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setLabelAsPlaceholder(!state.isOpen && !state.value);
  }, [state.value, state.isOpen]);

  useEffect(() => {
    setIsDateInvalid(
      state.validationState === "invalid" || props.state === "error"
    );
  }, [state.validationState, props.state]);

  return (
    <Field {...props}>
      <div
        ref={pickerRef}
        className={classNames("c__date-picker", {
          "c__date-picker--disabled": disabled,
          "c__date-picker--invalid": isDateInvalid,
          "c__date-picker--focused":
            !isDateInvalid && !disabled && (state.isOpen || isFocused),
        })}
      >
        <div
          className={classNames("c__date-picker__wrapper", {
            "c__date-picker__wrapper--clickable": labelAsPlaceholder,
          })}
          ref={wrapperRef}
          {...groupProps}
          role="button"
          tabIndex={0}
          onClick={() => !state.isOpen && state.open()}
        >
          {state.value && (
            <input type="hidden" name={name} value={state.value?.toString()} />
          )}
          <Button
            {...{
              ...buttonProps,
              "aria-label": t(
                state.isOpen
                  ? "components.forms.date_picker.toggle_button_aria_label_close"
                  : "components.forms.date_picker.toggle_button_aria_label_open"
              ),
            }}
            color="tertiary"
            size="small"
            className="c__date-picker__wrapper__toggle"
            onClick={state.toggle}
            icon={<span className="material-icons">calendar_today</span>}
            disabled={disabled}
          />
          <LabelledBox label={label} labelAsPlaceholder={labelAsPlaceholder}>
            <div className="c__date-picker__inner">
              {!labelAsPlaceholder && (
                <DateField
                  {...{
                    ...fieldProps,
                    onFocusChange: (focus) => setIsFocused(focus),
                  }}
                />
              )}
            </div>
          </LabelledBox>
        </div>
        {state.isOpen && (
          <Popover parentRef={pickerRef} onClickOutside={state.close}>
            <Calendar {...calendarProps} />
          </Popover>
        )}
      </div>
    </Field>
  );
};

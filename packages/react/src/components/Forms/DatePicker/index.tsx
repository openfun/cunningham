import React, { PropsWithChildren, useMemo, useRef, useState } from "react";
import {
  CalendarDate,
  DateValue,
  parseAbsoluteToLocal,
  toCalendarDate,
} from "@internationalized/date";
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
    value?: null | Date | string;
    defaultValue?: Date | string;
    minValue?: Date | string;
    maxValue?: Date | string;
    onChange?: (value: string) => void | undefined;
    disabled?: boolean;
  };

export const DatePicker = ({
  label,
  name,
  disabled = false,
  ...props
}: DatePickerProps) => {
  if (props.defaultValue && props.value) {
    throw new Error(
      "You cannot use both defaultValue and value props on DatePicker component"
    );
  }

  const parseCalendarDate = (
    rawDate: Date | string | undefined
  ): undefined | CalendarDate => {
    if (!rawDate) {
      return undefined;
    }
    try {
      const ISODateString = new Date(rawDate).toISOString();
      return toCalendarDate(parseAbsoluteToLocal(ISODateString));
    } catch (e) {
      throw new Error(
        "Invalid date format when initializing props on DatePicker component"
      );
    }
  };

  const datePickerOptions: DatePickerStateOptions<DateValue> = {
    value:
      // Force clear the component's value when passing null or an empty string.
      props.value === "" || props.value === null
        ? null
        : parseCalendarDate(props.value),
    defaultValue: parseCalendarDate(props.defaultValue),
    minValue: parseCalendarDate(props.minValue),
    maxValue: parseCalendarDate(props.maxValue),
    onChange: (value: DateValue | null) => {
      props.onChange?.(value?.toString() || "");
    },
    shouldCloseOnSelect: true,
    granularity: "day",
    isDisabled: disabled,
    label,
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

  const [isFocused, setIsFocused] = useState(false);

  const labelAsPlaceholder = useMemo(
    () => !state.isOpen && !state.value,
    [state.value, state.isOpen]
  );

  const isDateInvalid = useMemo(
    () => state.validationState === "invalid" || props.state === "error",
    [state.validationState, props.state]
  );

  // onPress props don't exist on the <Button /> component.
  // Remove it to avoid any warning.
  const { onPress: onPressToggleButton, ...otherButtonProps } = buttonProps;

  return (
    <Field {...props}>
      <div
        ref={pickerRef}
        className={classNames("c__date-picker", {
          "c__date-picker--disabled": disabled,
          "c__date-picker--invalid": isDateInvalid,
          "c__date-picker--success": props.state === "success",
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
          aria-label={label}
          role="button"
          tabIndex={0}
          onClick={() => !state.isOpen && state.open()}
        >
          {state.value && (
            <input type="hidden" name={name} value={state.value?.toString()} />
          )}
          <Button
            {...{
              ...otherButtonProps,
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
          <Popover
            parentRef={pickerRef}
            onClickOutside={state.close}
            borderless
          >
            <Calendar {...calendarProps} />
          </Popover>
        )}
      </div>
    </Field>
  );
};

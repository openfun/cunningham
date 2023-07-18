import React, { useMemo, useRef, useState } from "react";
import {
  DatePickerStateOptions,
  useDatePickerState,
} from "@react-stately/datepicker";
import { DateValue } from "@internationalized/date";
import { useDatePicker } from "@react-aria/datepicker";
import DatePickerAux, {
  DatePickerAuxSubProps,
} from ":/components/Forms/DatePicker/DatePickerAux";
import { Calendar } from ":/components/Forms/DatePicker/Calendar";
import DateFieldBox from ":/components/Forms/DatePicker/DateField";
import { StringOrDate } from ":/components/Forms/DatePicker/types";
import {
  getDefaultPickerOptions,
  parseCalendarDate,
} from ":/components/Forms/DatePicker/utils";

export type DatePickerProps = DatePickerAuxSubProps & {
  value?: null | StringOrDate;
  label: string;
  defaultValue?: StringOrDate;
  onChange?: (value: string | null) => void | undefined;
};

export const DatePicker = (props: DatePickerProps) => {
  if (props.defaultValue && props.value) {
    throw new Error(
      "You cannot use both defaultValue and value props on DatePicker component",
    );
  }
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const options: DatePickerStateOptions<DateValue> = {
    ...getDefaultPickerOptions(props),
    value:
      // Force clear the component's value when passing null or an empty string.
      props.value === "" || props.value === null
        ? null
        : parseCalendarDate(props.value),
    defaultValue: parseCalendarDate(props.defaultValue),
    onChange: (value: DateValue | null) => {
      props.onChange?.(value?.toString() || "");
    },
  };
  const pickerState = useDatePickerState(options);
  const { fieldProps, calendarProps, ...pickerProps } = useDatePicker(
    options,
    pickerState,
    ref,
  );

  const labelAsPlaceholder = useMemo(
    () => !isFocused && !pickerState.isOpen && !pickerState.value,
    [pickerState.value, pickerState.isOpen, isFocused],
  );

  const calendar = <Calendar {...calendarProps} />;

  return (
    <DatePickerAux
      {...{
        ...props,
        labelAsPlaceholder,
        isFocused,
        pickerState,
        pickerProps,
        calendar,
        onClear: () => pickerState.setValue(null as unknown as DateValue),
      }}
      ref={ref}
    >
      <DateFieldBox
        {...{
          ...fieldProps,
          label: props.label,
          labelAsPlaceholder,
          onFocusChange: setIsFocused,
        }}
      />
    </DatePickerAux>
  );
};

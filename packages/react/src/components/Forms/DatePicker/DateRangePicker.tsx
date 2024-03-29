import React, { useMemo, useRef, useState } from "react";
import { DateValue } from "@internationalized/date";
import {
  DateRangePickerStateOptions,
  useDateRangePickerState,
} from "@react-stately/datepicker";
import { useDateRangePicker } from "@react-aria/datepicker";
import { DateRange } from "react-aria";
import { CalendarRange } from ":/components/Forms/DatePicker/Calendar";
import DatePickerAux, {
  DatePickerAuxSubProps,
} from ":/components/Forms/DatePicker/DatePickerAux";
import DateFieldBox from ":/components/Forms/DatePicker/DateField";
import {
  convertDateValueToString,
  getDefaultPickerOptions,
  parseRangeDateValue,
} from ":/components/Forms/DatePicker/utils";

export type DateRangePickerProps = DatePickerAuxSubProps & {
  startLabel: string;
  endLabel: string;
  value?: null | [string, string];
  defaultValue?: [string, string];
  onChange?: (value: [string, string] | null) => void;
};

export const DateRangePicker = ({
  startLabel,
  endLabel,
  ...props
}: DateRangePickerProps) => {
  if (props.defaultValue && props.value) {
    throw new Error(
      "You cannot use both defaultValue and value props on DateRangePicker component",
    );
  }
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const options: DateRangePickerStateOptions<DateValue> = {
    ...getDefaultPickerOptions(props),
    value:
      props.value === null
        ? null
        : parseRangeDateValue(props.value, props.timezone),
    defaultValue: parseRangeDateValue(props.defaultValue, props.timezone),
    onChange: (value: DateRange) => {
      props.onChange?.(
        value?.start && value.end
          ? [
              convertDateValueToString(value.start, props.timezone),
              convertDateValueToString(value.end, props.timezone),
            ]
          : null,
      );
    },
  };
  const pickerState = useDateRangePickerState(options);
  const { startFieldProps, endFieldProps, calendarProps, ...pickerProps } =
    useDateRangePicker(options, pickerState, ref);

  const labelAsPlaceholder = useMemo(
    () =>
      !isFocused &&
      !pickerState.isOpen &&
      !pickerState.value?.start &&
      !pickerState.value?.end,
    [pickerState.value, pickerState.isOpen, isFocused],
  );

  const calendar = <CalendarRange {...calendarProps} />;

  return (
    <DatePickerAux
      {...{
        ...props,
        labelAsPlaceholder,
        isFocused,
        pickerState,
        pickerProps,
        optionalClassName: "c__date-picker__range",
        isRange: true,
        onClear: () => {
          pickerState.setValue({
            start: null as unknown as DateValue,
            end: null as unknown as DateValue,
          });
        },
        calendar,
      }}
      ref={ref}
    >
      <DateFieldBox
        {...{
          ...startFieldProps,
          label: startLabel,
          labelAsPlaceholder,
          onFocusChange: setIsFocused,
          disabled: props.disabled,
        }}
      />
      <div className="c__date-picker__range__separator" />
      <DateFieldBox
        {...{
          ...endFieldProps,
          label: endLabel,
          labelAsPlaceholder,
          onFocusChange: setIsFocused,
          disabled: props.disabled,
        }}
      />
    </DatePickerAux>
  );
};

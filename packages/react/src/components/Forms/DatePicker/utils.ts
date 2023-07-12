import {
  DateValue,
  parseAbsoluteToLocal,
  ZonedDateTime,
  toZoned,
  getLocalTimeZone,
} from "@internationalized/date";
import { DateRange } from "react-aria";
import { DatePickerAuxSubProps } from ":/components/Forms/DatePicker/DatePickerAux";

export const parseDateValue = (
  rawDate: string | undefined,
): undefined | ZonedDateTime => {
  if (!rawDate) {
    return undefined;
  }
  try {
    return parseAbsoluteToLocal(rawDate);
  } catch (e) {
    throw new Error(
      "Invalid date format when initializing props on DatePicker component",
    );
  }
};

export const parseRangeDateValue = (
  rawRange: [string, string] | undefined,
): DateRange | undefined => {
  if (!rawRange || !rawRange[0] || !rawRange[1]) {
    return undefined;
  }
  return {
    start: parseDateValue(rawRange[0])!,
    end: parseDateValue(rawRange[1])!,
  };
};

export const convertDateValueToString = (date: DateValue | null): string => {
  try {
    const localTimezone = getLocalTimeZone();
    // If timezone is already set, it would be kept, else the selection is set at midnight
    // on the local timezone, then converted to a UTC offset.
    return date ? toZoned(date, localTimezone).toAbsoluteString() : "";
  } catch (e) {
    throw new Error(
      "Invalid date format when converting date value on DatePicker component",
    );
  }
};

export const getDefaultPickerOptions = (props: DatePickerAuxSubProps): any => ({
  minValue: parseDateValue(props.minValue),
  maxValue: parseDateValue(props.maxValue),
  shouldCloseOnSelect: true,
  granularity: "day",
  isDisabled: props.disabled,
  label: props.label,
});

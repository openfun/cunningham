import {
  CalendarDate,
  DateValue,
  parseAbsoluteToLocal,
  toCalendarDate,
  ZonedDateTime,
  toZoned,
  getLocalTimeZone,
} from "@internationalized/date";
import { DateRange } from "react-aria";
import {
  StringOrDate,
  StringsOrDateRange,
} from ":/components/Forms/DatePicker/types";
import { DatePickerAuxSubProps } from ":/components/Forms/DatePicker/DatePickerAux";

export const parseCalendarDate = (
  rawDate: StringOrDate | undefined,
): undefined | CalendarDate => {
  if (!rawDate) {
    return undefined;
  }
  try {
    const ISODateString = new Date(rawDate).toISOString();
    return toCalendarDate(parseAbsoluteToLocal(ISODateString));
  } catch (e) {
    throw new Error(
      "Invalid date format when initializing props on DatePicker component",
    );
  }
};

export const parseRangeCalendarDate = (
  rawRange: StringsOrDateRange | undefined,
): DateRange | undefined => {
  if (!rawRange || !rawRange[0] || !rawRange[1]) {
    return undefined;
  }
  return {
    start: parseCalendarDate(rawRange[0])!,
    end: parseCalendarDate(rawRange[1])!,
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
      "Invalid date format when converting date value on DatePicker component"
    );
  }
};

export const getDefaultPickerOptions = (props: DatePickerAuxSubProps): any => ({
  minValue: parseCalendarDate(props.minValue),
  maxValue: parseCalendarDate(props.maxValue),
  shouldCloseOnSelect: true,
  granularity: "day",
  isDisabled: props.disabled,
  label: props.label,
});

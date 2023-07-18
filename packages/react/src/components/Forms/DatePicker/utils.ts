import {
  CalendarDate,
  parseAbsoluteToLocal,
  toCalendarDate,
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

export const getDefaultPickerOptions = (props: DatePickerAuxSubProps): any => ({
  minValue: parseCalendarDate(props.minValue),
  maxValue: parseCalendarDate(props.maxValue),
  shouldCloseOnSelect: true,
  granularity: "day",
  isDisabled: props.disabled,
  label: props.label,
});

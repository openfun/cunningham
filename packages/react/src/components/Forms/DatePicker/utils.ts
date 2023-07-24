import {
  DateValue,
  parseAbsoluteToLocal,
  ZonedDateTime,
  toZoned,
  getLocalTimeZone,
  parseAbsolute,
} from "@internationalized/date";
import { DateRange } from "react-aria";
import { DatePickerAuxSubProps } from ":/components/Forms/DatePicker/DatePickerAux";

export const isValidTimeZone = (timezone: string) => {
  try {
    // Check if Intl is available and supports time zones
    if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
      throw new Error("Time zones are not available in this environment");
    }

    // Test if the provided time zone is valid
    Intl.DateTimeFormat(undefined, { timeZone: timezone });

    return true;
  } catch (error) {
    // If an error occurs, it could be due to an invalid time zone or lack of Intl support
    return false;
  }
};

export const parseDateValue = (
  rawDate: string | undefined,
  timezone?: string,
): undefined | ZonedDateTime => {
  if (!rawDate) {
    return undefined;
  }
  try {
    if (timezone && !isValidTimeZone(timezone)) {
      throw new Error("Invalid timezone provided.");
    }
    return timezone
      ? parseAbsolute(rawDate, timezone)
      : parseAbsoluteToLocal(rawDate);
  } catch (e) {
    const errorMessage = e instanceof Error ? ": " + e.message : ".";
    throw new Error("Failed to parse date value" + errorMessage);
  }
};

export const parseRangeDateValue = (
  rawRange: [string, string] | undefined,
  timezone?: string,
): DateRange | undefined => {
  if (!rawRange || !rawRange[0] || !rawRange[1]) {
    return undefined;
  }
  return {
    start: parseDateValue(rawRange[0], timezone)!,
    end: parseDateValue(rawRange[1], timezone)!,
  };
};

export const convertDateValueToString = (
  date: DateValue | null,
  timezone?: string,
): string => {
  try {
    if (!date) {
      return "";
    }
    const localTimezone = timezone || getLocalTimeZone();
    if (!isValidTimeZone(localTimezone)) {
      throw new Error("Invalid timezone provided.");
    }
    return toZoned(date, localTimezone).toAbsoluteString();
  } catch (e) {
    const errorMessage = e instanceof Error ? ": " + e.message : ".";
    throw new Error("Failed to convert date value to string" + errorMessage);
  }
};

export const getDefaultPickerOptions = (props: DatePickerAuxSubProps): any => ({
  minValue: parseDateValue(props.minValue, props.timezone),
  maxValue: parseDateValue(props.maxValue, props.timezone),
  shouldCloseOnSelect: true,
  granularity: "day",
  isDisabled: props.disabled,
  label: props.label,
});

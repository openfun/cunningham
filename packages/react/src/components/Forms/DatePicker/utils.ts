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

/**
 * Checks if a given time zone is valid and supported by the environment.
 * @param timezone The time zone to validate.
 * @returns true if the time zone is valid and supported, false otherwise.
 */
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

/**
 * Parses an ISO 8601 date and time string with a UTC offset or in UTC.
 * @param rawDate - The raw date string to parse.
 * @param timezone - (Optional) The timezone to use for parsing. If not provided, the local timezone will be used.
 * @returns The parsed ZonedDateTime object or undefined if the input date is undefined.
 * @throws {Error} - If an invalid date or timezone format is encountered.
 */
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

/**
 * Parses a range of ISO 8601 date and time string with a UTC offset or in UTC.
 * @param rawRange - The range of raw date strings to parse.
 * @param timezone - (Optional) The timezone to use for parsing. If not provided, the local timezone will be used.
 * @returns The parsed DateRange object or undefined if the input date range is undefined or uncomplete.
 */
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

/**
 * Converts a DateValue object to an ISO 8601 formatted string in UTC.
 * @param date - The DateValue object to convert.
 * @param timezone - (Optional) The timezone to use for the conversion. If not provided, the local timezone will be used.
 * @returns The string representation of the date or an empty string if the input date is null.
 * @throws {Error} - If an invalid date or timezone format is encountered.
 */
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

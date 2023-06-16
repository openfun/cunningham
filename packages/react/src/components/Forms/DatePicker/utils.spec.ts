import { CalendarDate, DateValue, parseDate } from "@internationalized/date";
import {
  parseCalendarDate,
  parseRangeCalendarDate,
} from ":/components/Forms/DatePicker/utils";
import { StringOrDate } from ":/components/Forms/DatePicker/types";

const expectDateToBeEqual = (
  parsedDate: CalendarDate | DateValue | undefined,
  expectedYear: number,
  expectedMonth: number,
  expectedDay: number
) => {
  expect(parsedDate).not.eq(undefined);
  expect(parsedDate?.year === expectedYear);
  expect(parsedDate?.month === expectedMonth);
  expect(parsedDate?.day === expectedDay);
};

describe("parseCalendarDate", () => {
  it.each([
    [2023, 4, 12],
    [2022, 1, 1],
    [2022, 12, 31],
    [2022, 5, 2],
  ])("parse an iso string date", (year: number, month: number, day: number) => {
    const d = new Date(year, month, day);
    const parsedDate = parseCalendarDate(d.toISOString());
    expectDateToBeEqual(parsedDate, year, month, day);
  });

  it.each([
    [2023, 4, 12],
    [2022, 1, 1],
    [2022, 12, 31],
    [2022, 5, 2],
  ])(
    "parse a 'YYYY-MM-DD' date",
    (year: number, month: number, day: number) => {
      const stringDate = `${year}-${month}-${day}`;
      const parsedDate = parseCalendarDate(stringDate);
      expectDateToBeEqual(parsedDate, year, month, day);
    }
  );

  it.each([
    [2023, 4, 12],
    [2022, 1, 1],
    [2022, 12, 31],
    [2022, 5, 2],
  ])("parse a datetime date", (year: number, month: number, day: number) => {
    const date = new Date(year, month, day);
    const parsedDate = parseCalendarDate(date);
    expectDateToBeEqual(parsedDate, year, month, day);
  });

  it.each([undefined, ""])("parse an empty or null date", (date) => {
    const parsedDate = parseCalendarDate(date);
    expect(parsedDate).eq(undefined);
  });

  it.each([
    "35/04/2024",
    "11 janvier 20O2",
    "22.04.2022",
    "22-4-2022",
    "2022-04-1T00:00:00-00:00",
    "2022-04-01 T00:00:00-00:00",
  ])("parse a wrong date", (wrongFormattedDate) => {
    expect(() => parseCalendarDate(wrongFormattedDate)).toThrow(
      "Invalid date format when initializing props on DatePicker component"
    );
  });

  it.each([
    [4, "2023-04-22"],
    [5, "2023-04-30"],
    [7, "2023-04-22"],
  ])(
    "parse date to locale timezone, converted to day before",
    (offset: number, dateString: string) => {
      // Get the local offset
      const localOffset = new Date().getTimezoneOffset() / 60;
      const formattedOffset = offset.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      });

      // Create an ISO string in a timezone that is the day after in local timezone
      const offsetISODate = `${dateString}T${
        24 - (offset - localOffset - 1)
      }:00:00-${formattedOffset}:00`;

      // Parse this ISO string, that should be converted to local timezone
      const parsedDate = parseCalendarDate(offsetISODate);

      // Make sure the ISO string have been converted to the local timezone
      const nextDay = parseDate(dateString).add({ days: 1 });
      expect(parsedDate?.compare(nextDay)).eq(0);
    }
  );

  it.each([
    [4, "2023-04-22"],
    [5, "2023-04-30"],
    [7, "2023-04-22"],
  ])(
    "parse date to locale timezone, converted to same day",
    (offset: number, dateString: string) => {
      // Get the local offset
      const localOffset = new Date().getTimezoneOffset() / 60;
      const formattedOffset = offset.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
      });

      // Create an ISO string in a timezone that is the day after in local timezone
      const offsetISODate = `${dateString}T${
        24 - (offset - localOffset + 2)
      }:00:00-${formattedOffset}:00`;

      // Parse this ISO string, that should be converted to local timezone
      const parsedDate = parseCalendarDate(offsetISODate);
      const sameDay = parseDate(dateString);

      // Make sure the ISO string have been converted to the local timezone
      expect(parsedDate?.compare(sameDay)).eq(0);
    }
  );
});

describe("parseRangeCalendarDate", () => {
  it.each([
    ["2023-03-22", "2023-04-22"],
    [new Date(2023, 3, 22), "2023-04-22"],
    ["2023-03-22", new Date(2023, 4, 22)],
    ["2022-03-22T00:00:00-00:00", "2023-04-22"],
  ])("parse a date range", (start: string | Date, end: string | Date) => {
    const range = parseRangeCalendarDate([start, end]);
    expectDateToBeEqual(range?.start, 2023, 3, 22);
    expectDateToBeEqual(range?.end, 2023, 4, 22);
  });

  it.each([
    ["", "2023-03-22"],
    ["2023-03-22", ""],
  ])(
    "parse a partially null or empty date range",
    (start: StringOrDate, end: StringOrDate) => {
      expect(parseRangeCalendarDate([start, end])).eq(undefined);
    }
  );

  it("parse an undefined date range", () => {
    expect(parseRangeCalendarDate(undefined)).eq(undefined);
  });

  it("parse an inverted date range", () => {
    // Utils function accepts start date superior to the end date
    // However, DateRangePicker will trigger an error with the parsed range.
    const range = parseRangeCalendarDate(["2023-05-22", "2023-04-22"]);
    expectDateToBeEqual(range?.start, 2023, 5, 22);
    expectDateToBeEqual(range?.end, 2023, 4, 22);
  });
});

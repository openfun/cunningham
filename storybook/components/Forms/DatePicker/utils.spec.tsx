import { DateValue, parseAbsolute, parseDate } from "@internationalized/date";
import { vi } from "vitest";
import {
  convertDateValueToString,
  isValidTimeZone,
  parseDateValue,
  parseRangeDateValue,
} from ":/components/Forms/DatePicker/utils";

const expectDateToBeEqual = (
  parsedDate: DateValue | undefined,
  expectedYear: number,
  expectedMonth: number,
  expectedDay: number,
) => {
  expect(parsedDate).not.eq(undefined);
  expect(parsedDate?.year).eq(expectedYear);
  expect(parsedDate?.month).eq(expectedMonth);
  expect(parsedDate?.day).eq(expectedDay);
};

vi.mock("@internationalized/date", async () => {
  const mod = await vi.importActual<typeof import("@internationalized/date")>(
    "@internationalized/date",
  );
  return {
    ...mod,
    // Note: Restoring mocks will cause the function to return 'undefined'.
    // Consider providing a default implementation to be restored instead.
    getLocalTimeZone: vi.fn().mockReturnValue("Europe/Paris"),
  };
});

describe("parseDateValue", () => {
  it("parse a 'YYYY-MM-DDThh:mm:ssZ' date", () => {
    const parsedDate = parseDateValue("2023-05-11T00:00:00.000Z");
    expectDateToBeEqual(parsedDate, 2023, 5, 11);
    expect(parsedDate?.hour).eq(0);
  });

  it("parse a 'YYYY-MM-DDThh:mm:ss±hh:mm' date", () => {
    const parsedDate = parseDateValue("2023-05-11T00:00:00.000+00:00");
    expectDateToBeEqual(parsedDate, 2023, 5, 11);
    expect(parsedDate?.hour).eq(0);
  });

  it("should parse time to the right timezone", async () => {
    const parsedDate = parseDateValue(
      "2023-05-11T00:00:00.000Z",
      "America/Sao_Paulo",
    );
    expectDateToBeEqual(parsedDate, 2023, 5, 10);
    expect(parsedDate?.hour).eq(21);
  });

  it.each([undefined, ""])("parse an empty or null date", (date) => {
    const parsedDate = parseDateValue(date);
    expect(parsedDate).eq(undefined);
  });

  it.each([
    "35/04/2024",
    "2023-05-11",
    "11 janvier 20O2",
    "22.04.2022",
    "22-4-2022",
    "2022-04-1T00:00:00-00:00",
    "2022-04-01 T00:00:00-00:00",
    "2022-04-01T00:00:00.000",
  ])("parse a wrong date", (wrongFormattedDate) => {
    expect(() => parseDateValue(wrongFormattedDate)).toThrow(
      /Failed to parse date value:/,
    );
  });

  it("should raise an error when timezone is invalid", async () => {
    expect(() =>
      parseDateValue("2023-05-11T00:00:00.000Z", "Invalid/Timezone"),
    ).toThrow(/Failed to parse date value:/);
  });
});

describe("parseRangeDateValue", () => {
  it("parse a date range", () => {
    const range = parseRangeDateValue([
      "2023-03-22T00:00:00.000Z",
      "2023-04-22T00:00:00.000Z",
    ]);
    expectDateToBeEqual(range?.start, 2023, 3, 22);
    expectDateToBeEqual(range?.end, 2023, 4, 22);
  });

  it.each([
    ["", "2023-03-22"],
    ["2023-03-22", ""],
  ])(
    "parse a partially null or empty date range",
    (start: string, end: string) => {
      expect(parseRangeDateValue([start, end])).eq(undefined);
    },
  );

  it("parse an undefined date range", () => {
    expect(parseRangeDateValue(undefined)).eq(undefined);
  });

  it("parse an inverted date range", () => {
    // Utils function accepts start date superior to the end date
    // However, DateRangePicker will trigger an error with the parsed range.
    const range = parseRangeDateValue([
      "2023-05-22T00:00:00.000Z",
      "2023-04-22T00:00:00.000Z",
    ]);
    expectDateToBeEqual(range?.start, 2023, 5, 22);
    expectDateToBeEqual(range?.end, 2023, 4, 22);
  });
});

describe("convertDateValueToString", () => {
  it("should return an empty string for null date", () => {
    const date: DateValue | null = null;
    const result = convertDateValueToString(date);
    expect(result).toBe("");
  });

  it("should return a UTC ISO 8601 string from a CalendarDate", async () => {
    const date = parseDate("2023-05-25");
    const result = convertDateValueToString(date);
    expect(result).eq("2023-05-24T22:00:00.000Z");
  });

  it("should return a UTC ISO 8601 string from a ZonedDateTime", async () => {
    // Europe/Paris is the mocked local timezone.
    const date = parseAbsolute("2023-05-25T00:00:00.000+02:00", "Europe/Paris");
    const result = convertDateValueToString(date);
    expect(result).eq("2023-05-24T22:00:00.000Z");
  });

  it("should convert time to the right timezone", async () => {
    const date = parseDate("2023-05-25");
    const result = convertDateValueToString(date, "America/Sao_Paulo");
    expect(result).eq("2023-05-25T03:00:00.000Z");
  });

  it("should raise an error when timezone is invalid", async () => {
    const date = parseDate("2023-05-25");
    expect(() => convertDateValueToString(date, "Invalid/Timezone")).toThrow(
      /Failed to convert date value to string:/,
    );
  });
});

describe("isValidTimeZone", () => {
  it.each(["UTC", "Europe/Paris", "America/Sao_Paulo"])(
    "should return true when timezone is valid",
    (timezone) => {
      const isValid = isValidTimeZone(timezone);
      expect(isValid).toBe(true);
    },
  );

  it("should return false when timezone is invalid", () => {
    const isNotValid = isValidTimeZone("Invalid/Timezone");
    expect(isNotValid).toBe(false);
  });

  it("should return false when Intl or time zones are not available", () => {
    // Mock Intl to simulate the absence of Intl or time zones support
    const originalDateTimeFormat = Intl.DateTimeFormat;
    vi.spyOn(Intl, "DateTimeFormat").mockImplementation(() => {
      throw new Error("Time zones are not available");
    });
    const result = isValidTimeZone("Europe/Paris");
    expect(result).toBe(false);
    // Restore the original implementation after the test
    (Intl as any).DateTimeFormat = originalDateTimeFormat;
  });
});

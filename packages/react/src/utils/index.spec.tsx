import { expect } from "vitest";
import { range } from ":/utils/index";

describe("range", () => {
  it.each([
    [-10, 10],
    [-10, -10],
    [10, 20],
    [1, 5],
    [1, 1],
    [10, 10],
  ])("returns a range of number", async (min, max) => {
    const output = range(min, max);
    // Check length of the range.
    expect(output.length).eq(max - min + 1);

    // Check first and last value.
    expect(output[0]).eq(min);
    expect(output.slice(-1)[0]).eq(max);

    // Check step between values.
    output.forEach(
      (item, index) =>
        index < output.length - 1 && expect(output[index + 1] - item).eq(1)
    );
  });

  it.each([
    [-30, -40],
    [10, 5],
    [10, 0],
  ])("raises error if max is inferior to min", async (min, max) => {
    expect(() => range(min, max)).toThrow(
      "`min` arg must be inferior to `max` arg."
    );
  });
});

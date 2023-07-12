import { render, screen, within } from "@testing-library/react";
import React, { FormEvent, useState } from "react";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { CunninghamProvider } from ":/components/Provider";
import { DateRangePicker } from ":/components/Forms/DatePicker/DateRangePicker";
import { Button } from ":/components/Button";

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

describe("<DateRangePicker/>", () => {
  const expectDatesToBeEqual = (
    firstDate: Date | string | undefined | null,
    secondDate: Date | string | undefined | null,
  ) => {
    expect(firstDate).toBeDefined();
    expect(secondDate).toBeDefined();
    expect(new Date(firstDate!).toLocaleDateString()).eq(
      new Date(secondDate!).toLocaleDateString(),
    );
  };

  const expectCalendarToBeClosed = () => {
    expect(screen.queryByRole("application")).toBeNull();
  };

  const expectDateFieldsToBeDisplayed = () => {
    expect(screen.queryAllByRole("presentation")).toBeTruthy();
  };

  const expectDateFieldsToBeHidden = async () => {
    const dateFields = await screen.queryAllByRole("presentation");
    expect(dateFields.length).eq(2);
    dateFields.forEach((dateField) => {
      expect(Array.from(dateField.parentElement!.classList)).contains(
        "c__date-picker__inner--collapsed",
      );
    });
  };

  const expectDateRangePickerStateToBe = async (state: string) => {
    const input = (await screen.findAllByRole("button"))![0];
    const classNames =
      input.parentElement && Array.from(input.parentElement.classList);
    expect(classNames).contains(`c__date-picker--${state}`);
  };

  const expectCalendarToBeOpen = () => {
    const calendar = screen.queryByRole("application");
    expect(calendar).toBeDefined();
    expect(calendar).not.toBeNull();
    expect(Array.from(calendar!.classList)).contains(
      "c__calendar__wrapper--opened",
    );
  };

  const expectedSelectedCells = (selectionSize: number) => {
    const selectedCells = screen.queryAllByRole("gridcell", {
      selected: true,
    });
    expect(selectedCells.length).eq(selectionSize);
  };

  it("toggles calendar", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Pick a date"
          endLabel="Pick a date"
          name="datepicker"
        />
      </CunninghamProvider>,
    );

    const [input, button] = await screen.findAllByRole("button");

    // It returns the clickable div.
    expect(input.tagName).toEqual("DIV");

    // It returns the toggle button.
    expect(button.tagName).toEqual("BUTTON");

    // Calendar is initially closed.
    expectCalendarToBeClosed();
    await expectDateFieldsToBeHidden();

    // Toggle button opens the calendar.
    await user.click(button);
    expectCalendarToBeOpen();
    expectDateFieldsToBeDisplayed();

    // Clicking again closes the calendar.
    await user.click(button);
    expectCalendarToBeClosed();
    await expectDateFieldsToBeHidden();

    // Click on the input opens the calendar.
    await user.click(input);
    expectCalendarToBeOpen();
    expectDateFieldsToBeDisplayed();

    // Clicking again on the input should not close the calendar.
    // Click could happen while selecting the date field input.
    await user.click(input);
    expectCalendarToBeOpen();
    expectDateFieldsToBeDisplayed();

    // While the calendar open, clicking on
    // the toggle button closes the calendar.
    await user.click(button);
    expectCalendarToBeClosed();
  });

  it("focuses in the right order with no picked date range", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
        />
      </CunninghamProvider>,
    );
    // Get elements that should receive focus when no date is picked.
    const [input, toggleButton] = await screen.findAllByRole("button")!;

    await user.keyboard("{Tab}");
    expect(input).toHaveFocus();
    expectCalendarToBeClosed();

    await user.keyboard("{Tab}");
    expect(toggleButton).toHaveFocus();
    expectCalendarToBeClosed();

    await user.keyboard("{Enter}");
    expectCalendarToBeOpen();

    expectedSelectedCells(0);
  });

  it.each([
    ["2022-05-25T00:00:00.000Z", "2022-05-26T00:00:00.000Z"],
    ["2023-06-01T00:00:00.000Z", "2024-05-26T00:00:00.000Z"],
  ])("has a default value", async (start: string, end: string) => {
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[start, end]}
        />
      </CunninghamProvider>,
    );
    // Get picked date.
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expectDatesToBeEqual(start, startInput.textContent);
    expectDatesToBeEqual(end, endInput.textContent);
    expectDateFieldsToBeDisplayed();
  });

  it("focuses in the right order with a default value", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[
            "2023-04-25T00:00:00.000Z",
            "2023-05-25T00:00:00.000Z",
          ]}
        />
      </CunninghamProvider>,
    );

    // Get elements that should receive focus when a date is already picked.
    const [input, toggleButton] = await screen.findAllByRole("button")!;
    const clearButton = screen.getByRole("button", {
      name: "Clear date",
    });
    const [
      monthStartSegment,
      dayStartSegment,
      yearStartSegment,
      monthEndSegment,
      dayEndSegment,
      yearEndSegment,
    ] = await screen.findAllByRole("spinbutton")!;

    // Navigate through elements using Tab.
    await user.keyboard("{Tab}");
    expect(input).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(toggleButton).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(monthStartSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(dayStartSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(yearStartSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(monthEndSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(dayEndSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(yearEndSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(clearButton).toHaveFocus();
  });

  it("picks a date range", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
        />
      </CunninghamProvider>,
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(input);

    // Select all grid-cells.
    const gridCells = await screen.findAllByRole("gridcell");

    // Select the first clickable grid-cell.
    const startGridCellButton = within(
      gridCells.filter(
        (gridCell) => !gridCell.getAttribute("aria-disabled"),
      )![0],
    ).getByRole("button")!;

    // Pick a start date.
    const gridCellStartDate = startGridCellButton
      .getAttribute("aria-label")
      ?.replace("Today, ", "");
    await user.click(startGridCellButton);

    expectCalendarToBeOpen();

    // Select the second clickable grid-cell.
    const endGridCellButton = within(
      gridCells.filter(
        (gridCell) => !gridCell.getAttribute("aria-disabled"),
      )![1],
    ).getByRole("button")!;

    // Pick an end date.
    const gridCellEndDate = endGridCellButton
      .getAttribute("aria-label")
      ?.replace("Today, ", "");
    await user.click(endGridCellButton);

    // Calendar should close on range's selection.
    expectCalendarToBeClosed();
    expectDateFieldsToBeDisplayed();

    // Reopen the calendar.
    await user.click(toggleButton);

    // Get the selected cells in calendar grid.
    const selectedCells = screen.queryAllByRole("gridcell", {
      selected: true,
    })!;

    // Extract the selected range
    const selectedRange = within(selectedCells[0])
      .getByRole("button")!
      .getAttribute("aria-label")
      ?.replace("selected", "")
      ?.replace("Today, ", "");

    // Make sure start and end dates are in the selected range,
    // that describes the range with its start and end date.
    expect(selectedRange).contains(gridCellStartDate);
    expect(selectedRange).contains(gridCellEndDate);

    // Get the selected date in the date field.
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expectDatesToBeEqual(gridCellStartDate, startInput.textContent);
    expectDatesToBeEqual(gridCellEndDate, endInput.textContent);
  });

  it("picks a date range with start and end date equal", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
        />
      </CunninghamProvider>,
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(input);

    // Select all grid-cells.
    const gridCells = await screen.findAllByRole("gridcell");

    // Select the first clickable grid-cell.
    const gridCellButton = within(
      gridCells.filter(
        (gridCell) => !gridCell.getAttribute("aria-disabled"),
      )![0],
    ).getByRole("button")!;

    // Pick a start date.
    const gridCellDate = gridCellButton
      .getAttribute("aria-label")
      ?.replace("Today, ", "");
    await user.click(gridCellButton);

    expectCalendarToBeOpen();

    // Click again on the same date, to select the end date.
    await user.click(gridCellButton);

    // Calendar should close on range's selection.
    expectCalendarToBeClosed();
    expectDateFieldsToBeDisplayed();

    // Reopen the calendar.
    await user.click(toggleButton);

    // Get the selected cells in calendar grid.
    const selectedCells = screen.queryAllByRole("gridcell", {
      selected: true,
    })!;

    // Extract the selected range
    const selectedRange = within(selectedCells[0])
      .getByRole("button")!
      .getAttribute("aria-label")
      ?.replace("selected", "")
      ?.replace("Today, ", "");

    // Make sure start and end dates are in the selected range,
    // that describes the range with its start and end date.
    expect(selectedRange).contains(gridCellDate);
    expect(selectedRange).contains(gridCellDate);

    // Get the selected date in the date field.
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expectDatesToBeEqual(gridCellDate, startInput.textContent);
    expectDatesToBeEqual(gridCellDate, endInput.textContent);
  });

  it("picks a date range using keyboard", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          defaultValue={[
            "2023-01-01T00:00:00.000Z",
            "2023-01-01T00:00:00.000Z",
          ]}
          name="datepicker"
        />
      </CunninghamProvider>,
    );
    const input = (await screen.findAllByRole("button"))![0];
    await user.click(input);
    expectCalendarToBeOpen();

    // Start range selection using keyboard.
    await user.keyboard("{Enter}");
    expectCalendarToBeOpen();
    expectedSelectedCells(1);

    // Select the next cell.
    await user.keyboard("{ArrowRight}");
    expectCalendarToBeOpen();
    expectedSelectedCells(2);

    // Select the next cell.
    await user.keyboard("{ArrowRight}");
    expectCalendarToBeOpen();
    expectedSelectedCells(3);

    // End range selection using keyboard.
    await user.keyboard("{Enter}");
    expectCalendarToBeClosed();

    await user.click(input);
    expectCalendarToBeOpen();

    expectedSelectedCells(3);

    const selectedCells = screen.getAllByRole("gridcell", {
      selected: true,
    });

    // Extract the selected range
    const selectedRange = within(selectedCells[0])
      .getByRole("button")!
      .getAttribute("aria-label")
      ?.replace("selected", "");

    // Make sure start and end dates are in the selected range.
    expect(selectedRange).contains("January 1");
    expect(selectedRange).not.contains("January 2");
    expect(selectedRange).contains("January 3");

    // Get the selected date in the date field.
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expectDatesToBeEqual("2023-01-01", startInput.textContent);
    expectDatesToBeEqual("2023-01-03", endInput.textContent);
  });

  it("picks a date range spanning multiple months", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[
            "2023-01-01T00:00:00.000Z",
            "2023-01-01T00:00:00.000Z",
          ]}
        />
      </CunninghamProvider>,
    );
    const input = (await screen.findAllByRole("button"))![0];
    await user.click(input);
    expectCalendarToBeOpen();

    const startDate = "Tuesday, January 3, 2023";
    const endDate = "Tuesday, February 28, 2023";

    // Select the start date.
    const startGridCellButton = await screen.getByRole("button", {
      name: startDate,
    })!;
    await user.click(startGridCellButton);
    expectCalendarToBeOpen();

    // Navigate to the next month.
    const nextMonthButton = screen.getByRole("button", {
      name: "Next month",
    });
    await user.click(nextMonthButton);
    expectCalendarToBeOpen();

    // Select the end date.
    const endGridCellButton = await screen.getByRole("button", {
      name: endDate,
    })!;
    await user.click(endGridCellButton);
    expectCalendarToBeClosed();

    // Reopen calendar.
    await user.click(input);

    // Get the selected date in the date field.
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expectDatesToBeEqual(startDate, startInput.textContent);
    expectDatesToBeEqual(endDate, endInput.textContent);
  });

  it("picks a date range spanning multiple years", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[
            "2023-01-01T00:00:00.000Z",
            "2023-01-01T00:00:00.000Z",
          ]}
        />
      </CunninghamProvider>,
    );
    const input = (await screen.findAllByRole("button"))![0];
    await user.click(input);
    expectCalendarToBeOpen();

    const startDate = "Tuesday, January 3, 2023";
    const endDate = "Thursday, January 4, 2024";

    // Select the start date.
    const startGridCellButton = await screen.getByRole("button", {
      name: startDate,
    })!;
    await user.click(startGridCellButton);
    expectCalendarToBeOpen();

    // Navigate to the next year.
    const nextYearButton = screen.getByRole("button", {
      name: "Next year",
    });
    await user.click(nextYearButton);
    expectCalendarToBeOpen();

    // Select the end date.
    const endGridCellButton = await screen.getByRole("button", {
      name: endDate,
    })!;
    await user.click(endGridCellButton);
    expectCalendarToBeClosed();

    // Reopen calendar.
    await user.click(input);

    // Get the selected date in the date field.
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expectDatesToBeEqual(startDate, startInput.textContent);
    expectDatesToBeEqual(endDate, endInput.textContent);
  });

  it("types a date range", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
        />
      </CunninghamProvider>,
    );

    // Open calendar to display text segment
    const input = (await screen.findAllByRole("button"))![0];
    await user.click(input);

    const [
      monthStartSegment,
      dayStartSegment,
      yearStartSegment,
      monthEndSegment,
      dayEndSegment,
      yearEndSegment,
    ] = await screen.findAllByRole("spinbutton")!;

    // Select the first segment, month one.
    await user.click(monthStartSegment);
    expect(monthStartSegment).toHaveFocus();

    // Type month's start value.
    await user.keyboard("{1}{2}");
    expect(dayStartSegment).toHaveFocus();

    // Type day's start value.
    await user.keyboard("{5}");
    expect(yearStartSegment).toHaveFocus();

    // Type year's start value.
    await user.keyboard("{2}{0}{2}{3}");
    expect(monthEndSegment).toHaveFocus();

    // Type month's end value.
    await user.keyboard("{1}{2}");
    expect(dayEndSegment).toHaveFocus();

    // Type day's end value.
    await user.keyboard("{6}");
    expect(yearEndSegment).toHaveFocus();

    // Type year's end value.
    await user.keyboard("{2}{0}{2}{3}");

    // Check date field value.
    expectDateFieldsToBeDisplayed();
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expect(startInput.textContent).eq("12/5/2023");
    expect(endInput.textContent).eq("12/6/2023");
  });

  it("types an invalid date range", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
        />
      </CunninghamProvider>,
    );

    // Open calendar to display text segment
    const input = (await screen.findAllByRole("button"))![0];
    await user.click(input);

    const [
      monthStartSegment,
      dayStartSegment,
      yearStartSegment,
      monthEndSegment,
      dayEndSegment,
      yearEndSegment,
    ] = await screen.findAllByRole("spinbutton")!;

    // Select the first segment, month one.
    await user.click(monthStartSegment);
    expect(monthStartSegment).toHaveFocus();

    // Type month's start value.
    await user.keyboard("{1}{2}");
    expect(dayStartSegment).toHaveFocus();

    // Type day's start value.
    await user.keyboard("{6}");
    expect(yearStartSegment).toHaveFocus();

    // Type year's start value.
    await user.keyboard("{2}{0}{2}{3}");
    expect(monthEndSegment).toHaveFocus();

    // Type month's end value.
    await user.keyboard("{1}{2}");
    expect(dayEndSegment).toHaveFocus();

    // Type day's end value.
    await user.keyboard("{5}");
    expect(yearEndSegment).toHaveFocus();

    // Type year's end value.
    await user.keyboard("{2}{0}{2}{3}");

    // Check date field value.
    expectDateFieldsToBeDisplayed();
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expect(startInput.textContent).eq("12/6/2023");
    expect(endInput.textContent).eq("12/5/2023");

    // Make sure the date picker is showing error.
    await expectDateRangePickerStateToBe("invalid");
  });

  it("has an uncontrolled and a controlled value", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() =>
      render(
        <CunninghamProvider>
          <DateRangePicker
            startLabel="Start date"
            endLabel="End date"
            name="datepicker"
            defaultValue={[
              "2022-05-25T00:00:00.000Z",
              "2022-05-26T00:00:00.000Z",
            ]}
            value={["2022-05-25T00:00:00.000Z", "2022-05-26T00:00:00.000Z"]}
          />
        </CunninghamProvider>,
      ),
    ).toThrow(
      "You cannot use both defaultValue and value props on DateRangePicker component",
    );
  });

  it.each([
    ["this_not_a_valid_date", "2022-05-12T00:00:00.000Z"],
    ["2022-05-12T00:00:00.000Z", "2023-13-13"],
    ["2025-25-05T00:00:00.000Z", "2022-05-12T00:00:00.000Z"],
  ])("has not a valid range value", async (start: string, end: string) => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() =>
      render(
        <CunninghamProvider>
          <DateRangePicker
            startLabel="Start date"
            endLabel="End date"
            name="datepicker"
            defaultValue={[start, end]}
          />
        </CunninghamProvider>,
      ),
    ).toThrow(
      "Invalid date format when initializing props on DatePicker component",
    );
  });

  it("has not a valid range value", async () => {
    // Start date is superior to end date in the default range.
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[
            "2024-05-25T00:00:00.000Z",
            "2022-05-26T00:00:00.000Z",
          ]}
        />
      </CunninghamProvider>,
    );
    await expectDateRangePickerStateToBe("invalid");
  });

  it("clears date", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[
            "2023-05-25T00:00:00.000Z",
            "2023-05-27T00:00:00.000Z",
          ]}
        />
      </CunninghamProvider>,
    );

    const clearButton = screen.getByRole("button", {
      name: "Clear date",
    });
    await user.click(clearButton);
    expectCalendarToBeOpen();

    // Date field's value should be set to a placeholder value.
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expect(startInput.textContent).eq("mm/dd/yyyy");
    expect(endInput.textContent).eq("mm/dd/yyyy");

    const startGridCell = screen.getByRole("gridcell", {
      name: "25",
    })!;

    // Make sure start grid-cell is not selected anymore.
    expect(startGridCell.getAttribute("aria-selected")).toBeNull();
    expect(
      startGridCell.classList.contains(
        "c__calendar__wrapper__grid__week-row__background--range--start",
      ),
    ).toBe(false);

    // Make sure end grid-cell is not selected anymore.
    const endGridCell = screen.getByRole("gridcell", {
      name: "27",
    })!;
    expect(endGridCell.getAttribute("aria-selected")).toBeNull();
    expect(
      endGridCell.classList.contains(
        "c__calendar__wrapper__grid__week-row__background--range--end",
      ),
    ).toBe(false);

    // Close the calendar.
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // Make sure the empty date field is hidden when closing the calendar.
    await expectDateFieldsToBeHidden();
  });

  it.each([
    ["2023-01-01T00:00:00.000Z", "2023-01-01T00:00:00.000Z"],
    ["2023-01-01T00:00:00.000Z", "2023-03-01T00:00:00.000Z"],
  ])(
    "has a start or a end date inferior to minValue",
    async (start: string, end: string) => {
      render(
        <CunninghamProvider>
          <DateRangePicker
            startLabel="Start date"
            endLabel="End date"
            name="datepicker"
            defaultValue={[start, end]}
            minValue="2023-02-01T00:00:00.000Z"
          />
        </CunninghamProvider>,
      );
      await expectDateRangePickerStateToBe("invalid");
    },
  );

  it.each([
    ["2023-01-01T00:00:00.000Z", "2023-03-01T00:00:00.000Z"],
    ["2023-03-01T00:00:00.000Z", "2023-03-01T00:00:00.000Z"],
  ])(
    "has a start or a end date superior to maxValue",
    async (start: string, end: string) => {
      render(
        <CunninghamProvider>
          <DateRangePicker
            startLabel="Start date"
            endLabel="End date"
            name="datepicker"
            defaultValue={[start, end]}
            maxValue="2023-02-01T00:00:00.000Z"
          />
        </CunninghamProvider>,
      );
      await expectDateRangePickerStateToBe("invalid");
    },
  );

  it("renders disabled", async () => {
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[
            "2023-01-01T00:00:00.000Z",
            "2023-01-01T00:00:00.000Z",
          ]}
          disabled={true}
        />
      </CunninghamProvider>,
    );
    await expectDateRangePickerStateToBe("disabled");

    const [input, button] = await screen.findAllByRole("button");

    // Make sure toggle button and click on input are disabled.
    expect(input.getAttribute("aria-disabled")).eq("true");
    expect(button).toBeDisabled();

    // Make sure the clear button is not visible and disabled.
    expect(
      screen.queryByRole("button", { name: "Clear date", hidden: true }),
    ).toBeDisabled();

    // Make sure each segment of the date field is disabled.
    const dateFieldInputs = await screen.queryAllByRole("spinbutton");
    dateFieldInputs.forEach((dateFieldInput) =>
      expect(dateFieldInput).toHaveAttribute("aria-disabled"),
    );
  });

  it("renders focused", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[
            "2023-01-01T00:00:00.000Z",
            "2023-01-01T00:00:00.000Z",
          ]}
        />
      </CunninghamProvider>,
    );
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);
    expectCalendarToBeOpen();
    await expectDateRangePickerStateToBe("focused");
  });

  it("renders a selected range", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DateRangePicker
          startLabel="Start date"
          endLabel="End date"
          name="datepicker"
          defaultValue={[
            "2023-01-01T00:00:00.000Z",
            "2023-01-10T00:00:00.000Z",
          ]}
        />
      </CunninghamProvider>,
    );
    // Toggle button opens the calendar.
    const button = (await screen.findAllByRole("button"))![0];
    await user.click(button);

    const selectedCells = screen.queryAllByRole("gridcell", {
      selected: true,
    });

    // Make sure all selected cells render the selected styling.
    selectedCells.forEach((selectedCell) => {
      const cellButton = within(selectedCell).getByRole("button")!;
      expect(Array.from(cellButton!.classList)).contains(
        "c__calendar__wrapper__grid__week-row__button--selected",
      );
    });
    const commonClassName =
      "c__calendar__wrapper__grid__week-row__background--range";
    // Make sure the start of selection has the start styling.
    const startCellButton = within(selectedCells[0]).getByRole("button")!;
    expect(Array.from(startCellButton.parentElement!.classList)).contains(
      `${commonClassName}--start`,
    );
    // Make sure the end of selection has the end styling.
    const endCellButton = within(
      selectedCells[selectedCells.length - 1],
    ).getByRole("button")!;
    expect(Array.from(endCellButton.parentElement!.classList)).contains(
      `${commonClassName}--end`,
    );
  });

  it("works controlled", async () => {
    const user = userEvent.setup();
    const Wrapper = () => {
      const [value, setValue] = useState<[string, string] | null>([
        "2023-04-25T00:00:00.000Z",
        "2023-04-26T00:00:00.000Z",
      ]);
      return (
        <CunninghamProvider>
          <div>
            <div>Value = {value?.join(" ")}|</div>
            <Button onClick={() => setValue(null)}>Clear</Button>
            <DateRangePicker
              startLabel="Start date"
              endLabel="End date"
              value={value}
              onChange={(e) => setValue(e)}
            />
          </div>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    // Make sure value is selected.
    screen.getByText(
      "Value = 2023-04-25T00:00:00.000Z 2023-04-26T00:00:00.000Z|",
    );

    // Make sure value is initially render in the date field component.
    const [startInput, endInput] = await screen.queryAllByRole("presentation");
    expectDatesToBeEqual("2023-04-25", startInput.textContent);
    expectDatesToBeEqual("2023-04-26", endInput.textContent);

    // Open the calendar grid.
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);
    expectCalendarToBeOpen();

    const startGridCell = within(
      await screen.getByRole("gridcell", { name: "12" }),
    ).getByRole("button")!;

    const endGridCell = within(
      await screen.getByRole("gridcell", { name: "14" }),
    ).getByRole("button")!;

    // Select a new value in the calendar grid.
    await user.click(startGridCell);
    await user.click(endGridCell);
    expectCalendarToBeClosed();

    // Make sure value is selected.
    screen.getByText(
      `Value = 2023-04-12T00:00:00.000Z 2023-04-14T00:00:00.000Z|`,
    );

    // Clear value.
    const clearButton = screen.getByRole("button", {
      name: "Clear",
    });
    await user.click(clearButton);

    // Make sure value is cleared.
    await expectDateFieldsToBeHidden();
    screen.getByText("Value = |");
  });

  it("submits forms data", async () => {
    let formData: any;
    const Wrapper = () => {
      const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        formData = {
          datepickerStart: data.get("datepicker_start"),
          datepickerEnd: data.get("datepicker_end"),
        };
      };

      return (
        <CunninghamProvider>
          <div>
            <form onSubmit={onSubmit}>
              <DateRangePicker
                startLabel="Pick a date"
                endLabel="Pick a date"
                name="datepicker"
              />
              <Button>Submit</Button>
            </form>
          </div>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    const user = userEvent.setup();
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    // Submit the form being empty.
    await user.click(submitButton);
    expect(formData).toEqual({
      datepickerStart: "",
      datepickerEnd: "",
    });

    // Open calendar
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    const allSegments = await screen.getAllByRole("spinbutton");
    const startMonthSegment = allSegments![0];

    // Select the first segment, month one.
    await user.click(startMonthSegment);
    expect(startMonthSegment).toHaveFocus();

    // Type start date's value.
    await user.keyboard("{5}{1}{0}{2}{0}{2}{3}");

    // Type end date's value.
    await user.keyboard("{5}{1}{2}{2}{0}{2}{3}");

    // Submit form being filled with a date.
    await user.click(submitButton);
    expectCalendarToBeClosed();
    expectDateFieldsToBeDisplayed();

    // Make sure form's value matches.
    expect(formData).toEqual({
      datepickerStart: "2023-05-09T22:00:00.000Z",
      datepickerEnd: "2023-05-11T22:00:00.000Z",
    });

    // Clear picked date.
    const clearButton = screen.getByRole("button", {
      name: "Clear date",
    });
    await user.click(clearButton);
    expectDateFieldsToBeDisplayed();

    // Submit the form being empty.
    await user.click(submitButton);

    // Date field disappears when the user click outside the comppnent.
    await expectDateFieldsToBeHidden();

    // Make sure form's value is null.
    expect(formData).toEqual({
      datepickerStart: "",
      datepickerEnd: "",
    });
  });
});

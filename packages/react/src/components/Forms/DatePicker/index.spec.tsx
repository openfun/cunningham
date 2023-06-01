import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import React, { useState } from "react";
import { expect, vi, afterEach } from "vitest";
import { CunninghamProvider } from ":/components/Provider";
import { DatePicker } from ":/components/Forms/DatePicker/index";
import { Button } from ":/components/Button";

describe("<DatePicker/>", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const expectCalendarToBeClosed = () => {
    expect(screen.queryByRole("group")).toBeNull();
  };

  const expectCalendarToBeOpen = () => {
    const calendar = screen.queryByRole("group");
    expect(calendar).toBeDefined();
    expect(calendar).not.toBeNull();
    expect(Array.from(calendar!.classList)).contains(
      "c__calendar__wrapper--opened"
    );
  };

  const expectDateFieldToBeHidden = () => {
    expect(screen.queryByRole("presentation")).toBeNull();
  };

  const expectDateFieldToBeDisplayed = () => {
    expect(screen.queryByRole("presentation")).toBeTruthy();
  };

  const expectDatesToBeEqual = (
    firstDate: Date | string | undefined | null,
    secondDate: Date | string | undefined | null
  ) => {
    expect(firstDate).toBeDefined();
    expect(secondDate).toBeDefined();
    expect(new Date(firstDate!).toLocaleDateString()).eq(
      new Date(secondDate!).toLocaleDateString()
    );
  };

  const expectFocusedMonthToBeEqual = (expectedDate: Date) => {
    const focusedMonth = screen
      .getByRole("combobox", {
        name: "Select a month",
      })!
      .textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq(
      expectedDate.toLocaleString("default", { month: "short" })
    );
  };

  const expectFocusedYearToBeEqual = (expectedDate: Date) => {
    const focusedYear = screen
      .getByRole("combobox", {
        name: "Select a year",
      })!
      .textContent?.replace("arrow_drop_down", "");

    expect(focusedYear).eq(
      expectedDate.toLocaleString("default", { year: "numeric" })
    );
  };

  const expectMenuToBeOpen = (menu: HTMLElement) => {
    expect(Array.from(menu.classList)).contains("c__calendar__menu--opened");
  };

  const expectMenuToBeClosed = (menu: HTMLElement) => {
    expect(Array.from(menu.classList)).not.contains(
      "c__calendar__menu--opened"
    );
  };

  const expectDatePickerStateToBe = async (state: string) => {
    const [input, _] = await screen.findAllByRole("button")!;
    const classNames =
      input.parentElement && Array.from(input.parentElement.classList);
    expect(classNames).contains(`c__date-picker--${state}`);
  };

  it("toggles calendar", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker label="Pick a date" name="datepicker" />
      </CunninghamProvider>
    );

    const [input, button] = await screen.findAllByRole("button");

    // It returns the clickable div.
    expect(input.tagName).toEqual("DIV");

    // It returns the toggle button.
    expect(button.tagName).toEqual("BUTTON");

    // Calendar is initially closed.
    expectCalendarToBeClosed();
    expectDateFieldToBeHidden();

    // Toggle button opens the calendar.
    await user.click(button);
    expectCalendarToBeOpen();
    expectDateFieldToBeDisplayed();

    // Clicking again closes the calendar.
    await user.click(button);
    expectCalendarToBeClosed();
    expectDateFieldToBeHidden();

    // Click on the input opens the calendar.
    await user.click(input);
    expectCalendarToBeOpen();
    expectDateFieldToBeDisplayed();

    // Clicking again on the input should not close the calendar.
    // Click could happen while selecting the date field input.
    await user.click(input);
    expectCalendarToBeOpen();
    expectDateFieldToBeDisplayed();

    // While the calendar open, clicking on
    // the toggle button closes the calendar.
    await user.click(button);
    expectCalendarToBeClosed();
  });

  it("focuses in the right order with no picked date", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker label="Pick a date" name="datepicker" />
      </CunninghamProvider>
    );
    // Get elements that should receive focus when no date is picked.
    const [input, toggleButton] = await screen.findAllByRole("button")!;

    await user.keyboard("{Tab}");
    expect(input).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(toggleButton).toHaveFocus();

    await user.keyboard("{Enter}");
    expectCalendarToBeOpen();
  });

  it("focuses in the right order with a default value", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-04-25"
        />
      </CunninghamProvider>
    );

    // Get elements that should receive focus when a date is already picked.
    const [input, toggleButton] = await screen.findAllByRole("button")!;
    const clearButton = screen.getByRole("button", {
      name: "Clear date",
    });
    const [monthSegment, daySegment, YearSegment] = await screen.findAllByRole(
      "spinbutton"
    )!;

    await user.keyboard("{Tab}");
    expect(input).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(toggleButton).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(monthSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(daySegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(YearSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(clearButton).toHaveFocus();
  });

  it("picks a date", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker label="Pick a date" name="datepicker" />
      </CunninghamProvider>
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(input);

    // Select all grid-cells.
    const gridCells = await screen.findAllByRole("gridcell");

    // Select the first clickable grid-cell.
    const gridCellButton = within(
      gridCells.filter(
        (gridCell) => !gridCell.getAttribute("aria-disabled")
      )![0]
    ).getByRole("button")!;

    // Pick a date.
    await user.click(gridCellButton);
    const gridCellDate = gridCellButton.getAttribute("aria-label");

    // Calendar should close on date's selection.
    expectCalendarToBeClosed();
    expectDateFieldToBeDisplayed();

    // Reopen the calendar.
    await user.click(toggleButton);

    // Get the selected date in calendar grid.
    const selectedDate = within(
      screen.getByRole("gridcell", {
        selected: true,
      })!
    )
      .getByRole("button")!
      .getAttribute("aria-label")
      ?.replace("selected", "");

    expectDatesToBeEqual(selectedDate, gridCellDate);

    // Get the selected date in the date field.
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expectDatesToBeEqual(dateFieldContent, gridCellDate);
  });

  it("type a date", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-04-05"
        />
      </CunninghamProvider>
    );
    const [monthSegment, daySegment, yearSegment] = await screen.findAllByRole(
      "spinbutton"
    )!;
    // Select the first segment, month one.
    await user.click(monthSegment);
    expect(monthSegment).toHaveFocus();

    // Type month's value.
    await user.keyboard("{1}{2}");
    expect(daySegment).toHaveFocus();

    // Type day's value.
    await user.keyboard("{5}");
    expect(yearSegment).toHaveFocus();

    // Type year's value.
    await user.keyboard("{2}{0}{2}{3}");

    // Check date field value.
    expectDateFieldToBeDisplayed();
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expectDatesToBeEqual("2023-12-05", dateFieldContent);
  });

  it("type an invalid date", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-04-05"
          minValue="2022-12-03"
        />
      </CunninghamProvider>
    );
    const [monthSegment, daySegment, yearSegment] = await screen.findAllByRole(
      "spinbutton"
    )!;
    // Select the first segment, month one.
    await user.click(monthSegment);
    expect(monthSegment).toHaveFocus();

    // Type month's value.
    await user.keyboard("{1}{2}");
    expect(daySegment).toHaveFocus();

    // Type day's value.
    await user.keyboard("{5}");
    expect(yearSegment).toHaveFocus();

    // Type year's value.
    await user.keyboard("{2}{0}{2}{1}");

    // Check date field value.
    expectDateFieldToBeDisplayed();
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expectDatesToBeEqual("2021-12-05", dateFieldContent);

    // Make sure the date picker is showing error.
    expectDatePickerStateToBe("invalid");
  });

  it.each([
    "2022-05-25",
    "2023-06-01T13:50",
    "2025-03-25",
    "Mar 25 2025",
    "25 Mar 2025",
    new Date("2025-04-23"),
  ])("has a default value", async (defaultValue) => {
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );
    // Get picked date.
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expectDatesToBeEqual(defaultValue, dateFieldContent);
    expectDateFieldToBeDisplayed();
  });

  it("has an uncontrolled a controlled value", async () => {
    const defaultValue = new Date("2023-05-24");
    const value = new Date("2023-05-24");
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() =>
      render(
        <CunninghamProvider>
          <DatePicker
            label="Pick a date"
            name="datepicker"
            defaultValue={defaultValue}
            value={value}
          />
        </CunninghamProvider>
      )
    ).toThrow(
      "You cannot use both defaultValue and value props on DatePicker component"
    );
  });

  it.each(["this_not_a_valid_date", "2023-13-13", "2025-25-05"])(
    "has not a valid date value",
    async (invalidDate) => {
      vi.spyOn(console, "error").mockImplementation(() => undefined);
      expect(() =>
        render(
          <CunninghamProvider>
            <DatePicker
              label="Pick a date"
              name="datepicker"
              defaultValue={invalidDate}
            />
          </CunninghamProvider>
        )
      ).toThrow(
        "Invalid date format when initializing props on DatePicker component"
      );
    }
  );

  it("clears date", async () => {
    const defaultValue = new Date("2023-05-24");
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );
    const clearButton = screen.getByRole("button", {
      name: "Clear date",
    });
    await user.click(clearButton);
    expectCalendarToBeOpen();

    // Date field's value should set to a placeholder value.
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expect(dateFieldContent).eq("mm/dd/yyyy");

    const isGridCellSelected = screen
      .getByRole("gridcell", { name: `${defaultValue.getDate()}` })!
      .getAttribute("aria-selected");
    expect(isGridCellSelected).toBeNull();

    // Close the calendar.
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    // Make sure the empty date field is hidden when closing the calendar.
    expectDateFieldToBeHidden();
  });

  it("has date inferior to minValue", async () => {
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-01-01"
          minValue="2023-02-01"
        />
      </CunninghamProvider>
    );
    await expectDatePickerStateToBe("invalid");
  });

  it("has date superior to maxValue", async () => {
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-03-01"
          maxValue="2023-02-01"
        />
      </CunninghamProvider>
    );
    await expectDatePickerStateToBe("invalid");
  });

  it("has an invalid value outside min/max range", async () => {
    const defaultValue = new Date("2023-03-01");
    const minValue = new Date(defaultValue.setMonth(4));
    const maxValue = new Date(defaultValue.setMonth(5));
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
          maxValue={minValue}
          minValue={maxValue}
        />
      </CunninghamProvider>
    );
    await expectDatePickerStateToBe("invalid");
  });

  it("works controlled", async () => {
    const user = userEvent.setup();
    const Wrapper = () => {
      const [value, setValue] = useState<string | null>("2023-04-25");
      return (
        <CunninghamProvider>
          <div>
            <div>Value = {value}|</div>
            <Button onClick={() => setValue(null)}>Clear</Button>
            <DatePicker
              label="Pick a date"
              name="datepicker"
              value={value}
              onChange={(e) => setValue(e)}
            />
          </div>
        </CunninghamProvider>
      );
    };
    render(<Wrapper />);

    // Make sure value is selected.
    screen.getByText("Value = 2023-04-25|");

    // Make sure value is initially render in the date field component.
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expectDatesToBeEqual("2023-04-25", dateFieldContent);

    // Open the calendar grid.
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);
    expectCalendarToBeOpen();

    // Find the 12th of April.
    const gridCell = within(
      await screen.getByRole("gridcell", { name: "12" })
    ).getByRole("button")!;

    // Select a new value in the calendar grid.
    await user.click(gridCell);
    expectCalendarToBeClosed();

    // Make sure value is selected.
    screen.getByText(`Value = 2023-04-12|`);

    // Clear value.
    const clearButton = screen.getByRole("button", {
      name: "Clear",
    });
    await user.click(clearButton);

    // Make sure value is cleared.
    expectDateFieldToBeHidden();
    screen.getByText("Value = |");
  });

  it("renders disabled", async () => {
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-03-01"
          disabled={true}
        />
      </CunninghamProvider>
    );
    await expectDatePickerStateToBe("disabled");

    const [input, button] = await screen.findAllByRole("button");

    expect(input.getAttribute("aria-disabled")).eq("true");
    expect(button).toBeDisabled();

    const clearButton = screen.getByRole("button", {
      name: "Clear date",
    });
    expect(clearButton).toBeDisabled();

    const dateFieldInputs = await screen.queryAllByRole("spinbutton");
    dateFieldInputs.forEach((dateFieldInput) =>
      expect(dateFieldInput).toHaveAttribute("aria-disabled")
    );
  });

  it("renders focused", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-03-01"
        />
      </CunninghamProvider>
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);
    expectCalendarToBeOpen();
    await expectDatePickerStateToBe("focused");
  });

  // it("submits forms data", async () => {
  // todo : understand this.
  // });

  it("clicks next and previous focused month", async () => {
    const defaultValue = new Date("2023-05-24");
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    expectFocusedMonthToBeEqual(defaultValue);

    const previousMonthButton = screen.getByRole("button", {
      name: "Previous month",
    });
    const nextMonthButton = screen.getByRole("button", {
      name: "Next month",
    });

    await user.click(previousMonthButton);
    defaultValue.setMonth(defaultValue.getMonth() - 1);
    expectFocusedMonthToBeEqual(defaultValue);

    await user.click(nextMonthButton);
    defaultValue.setMonth(defaultValue.getMonth() + 1);
    expectFocusedMonthToBeEqual(defaultValue);

    await user.click(nextMonthButton);
    defaultValue.setMonth(defaultValue.getMonth() + 1);
    expectFocusedMonthToBeEqual(defaultValue);
  });

  it("clicks next and previous focused year", async () => {
    const defaultValue = new Date("2023-05-24");
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    expectFocusedYearToBeEqual(defaultValue);

    const previousYearButton = screen.getByRole("button", {
      name: "Previous year",
    });
    const nextYearButton = screen.getByRole("button", {
      name: "Next year",
    });

    await user.click(previousYearButton);
    defaultValue.setFullYear(defaultValue.getFullYear() - 1);
    expectFocusedYearToBeEqual(defaultValue);

    await user.click(nextYearButton);
    defaultValue.setFullYear(defaultValue.getFullYear() + 1);
    expectFocusedYearToBeEqual(defaultValue);

    await user.click(nextYearButton);
    defaultValue.setFullYear(defaultValue.getFullYear() + 1);
    expectFocusedYearToBeEqual(defaultValue);
  });

  it("renders disabled next and previous month", async () => {
    const defaultValue = new Date("2023-05-24");
    const minValue = new Date(defaultValue.setDate(22));
    const maxValue = new Date(defaultValue.setDate(26));
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
          minValue={minValue}
          maxValue={maxValue}
        />
      </CunninghamProvider>
    );

    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    const previousMonthButton = screen.getByRole("button", {
      name: "Previous month",
    });
    expect(previousMonthButton).toBeDisabled();

    const nextMonthButton = screen.getByRole("button", {
      name: "Next month",
    });
    expect(nextMonthButton).toBeDisabled();
  });

  it("renders disabled next and previous year", async () => {
    const defaultValue = new Date("2023-05-24");
    const minValue = new Date(defaultValue.setDate(22));
    const maxValue = new Date(defaultValue.setDate(26));
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
          minValue={minValue}
          maxValue={maxValue}
        />
      </CunninghamProvider>
    );

    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    const previousYearButton = screen.getByRole("button", {
      name: "Previous year",
    });
    expect(previousYearButton).toBeDisabled();

    const nextYearButton = screen.getByRole("button", {
      name: "Next year",
    });
    expect(nextYearButton).toBeDisabled();
  });

  it("renders partially disabled next and previous month", async () => {
    const user = userEvent.setup();
    const minValue = new Date("2023-04-23");
    const maxValue = new Date("2023-06-23");
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-05-23"
          minValue={minValue}
          maxValue={maxValue}
        />
      </CunninghamProvider>
    );

    // Open the calendar.
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    const previousMonthButton = screen.getByRole("button", {
      name: "Previous month",
    });
    const nextMonthButton = screen.getByRole("button", {
      name: "Next month",
    });

    // Previous and next month buttons should not be disabled.
    // Some days in previous and next month can be selected.
    expect(previousMonthButton).not.toBeDisabled();
    expect(nextMonthButton).not.toBeDisabled();

    // Month n-2 should not be accessible,
    // as month n-1 is partially disabled,
    // all days from month n-2 are disabled.
    await user.click(previousMonthButton);
    expect(previousMonthButton).toBeDisabled();
    expect(nextMonthButton).not.toBeDisabled();

    // Get all the calendar's cells to check their state.
    let gridCells = await screen.findAllByRole("gridcell");

    // By default, calendar's cells outside the focused month are disabled (month n-1 and n+1).
    // Cells within the focused month superior to the minDate should be clickable.
    // Cells inferior to the minDate should be disabled.
    gridCells.forEach((gridCell) => {
      const button = within(gridCell).getByRole("button")!;
      const value = new Date(
        button.getAttribute("aria-label")!.replace("First available date", "")
      );
      if (
        value.getMonth() === minValue.getMonth() &&
        value.getDate() < minValue.getDate()
      ) {
        expect(button).toBeDisabled();
      } else if (value.getMonth() === minValue.getMonth()) {
        expect(button).not.toBeDisabled();
      } else {
        expect(button).toBeDisabled();
      }
    });

    await user.click(nextMonthButton);
    expect(previousMonthButton).not.toBeDisabled();
    expect(nextMonthButton).not.toBeDisabled();

    await user.click(nextMonthButton);
    expect(previousMonthButton).not.toBeDisabled();
    expect(nextMonthButton).toBeDisabled();

    gridCells = await screen.findAllByRole("gridcell");
    gridCells.forEach((gridCell) => {
      const button = within(gridCell).getByRole("button")!;
      const buttonLabel = button
        .getAttribute("aria-label")
        ?.replace("Last available date", "");
      expect(buttonLabel).toBeDefined();
      const value = new Date(buttonLabel!);
      if (
        value.getMonth() === maxValue.getMonth() &&
        value.getDate() > maxValue.getDate()
      ) {
        expect(button).toBeDisabled();
      } else if (value.getMonth() === maxValue.getMonth()) {
        expect(button).not.toBeDisabled();
      } else {
        expect(button).toBeDisabled();
      }
    });
  });

  it("selects a focused month", async () => {
    const user = userEvent.setup();
    const defaultValue = new Date("2023-05-23");
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    const monthDropdown = screen.getByRole("combobox", {
      name: "Select a month",
    });

    const [monthMenu, yearMenu] = await screen.findAllByRole("listbox");

    expectMenuToBeClosed(monthMenu);
    expectMenuToBeClosed(yearMenu);

    let focusedMonth = monthDropdown.textContent?.replace(
      "arrow_drop_down",
      ""
    );
    expect(focusedMonth).eq(
      defaultValue.toLocaleString("default", { month: "short" })
    );

    await user.click(monthDropdown);
    expectMenuToBeOpen(monthMenu);
    expectMenuToBeClosed(yearMenu);

    defaultValue.setMonth(8);
    const option: HTMLLIElement = screen.getByRole("option", {
      name: defaultValue.toLocaleString("default", { month: "long" }),
    });
    await user.click(option);

    expectMenuToBeClosed(monthMenu);
    expectMenuToBeClosed(yearMenu);

    focusedMonth = monthDropdown.textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq(
      defaultValue.toLocaleString("default", { month: "short" })
    );
  });

  it("selects a focused year", async () => {
    const user = userEvent.setup();
    const defaultValue = new Date("2023-05-23");
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    const yearDropdown = screen.getByRole("combobox", {
      name: "Select a year",
    });

    const [monthMenu, yearMenu] = await screen.findAllByRole("listbox");

    expectMenuToBeClosed(yearMenu);
    expectMenuToBeClosed(monthMenu);

    let focusedMonth = yearDropdown.textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq(
      defaultValue.toLocaleString("default", { year: "numeric" })
    );

    await user.click(yearDropdown);
    expectMenuToBeOpen(yearMenu);
    expectMenuToBeClosed(monthMenu);

    defaultValue.setFullYear(2024);
    const option: HTMLLIElement = screen.getByRole("option", {
      name: defaultValue.toLocaleString("default", { year: "numeric" }),
    });
    await user.click(option);

    expectMenuToBeClosed(yearMenu);
    expectMenuToBeClosed(monthMenu);

    focusedMonth = yearDropdown.textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq(
      defaultValue.toLocaleString("default", { year: "numeric" })
    );
  });

  it("can not select cells outside the focused month", async () => {
    const user = userEvent.setup();
    const defaultValue = new Date("2023-05-23");
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );
    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    const gridCells = await screen.findAllByRole("gridcell");

    gridCells.forEach((gridCell) => {
      const button = within(gridCell).getByRole("button")!;
      const value = new Date(
        button.getAttribute("aria-label")!.replace("selected", "")
      );
      if (defaultValue.getMonth() === value.getMonth()) {
        expect(button).not.toBeDisabled();
      } else {
        expect(button).toBeDisabled();
      }
    });
  });

  it("navigate previous focused month with keyboard", async () => {
    const user = userEvent.setup();
    const defaultValue = new Date("2023-05-01");
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );

    const previousMonthValue = new Date(defaultValue);
    previousMonthValue.setDate(defaultValue.getDate() - 1);

    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    await user.keyboard("{ArrowUp}");
    expectFocusedMonthToBeEqual(previousMonthValue);

    // Reopens the calendar menu.
    await user.click(toggleButton);
    await user.click(toggleButton);

    expectFocusedMonthToBeEqual(defaultValue);

    await user.keyboard("{ArrowLeft}");
    expectFocusedMonthToBeEqual(previousMonthValue);
  });

  it("navigate next focused month with keyboard", async () => {
    const user = userEvent.setup();
    const defaultValue = new Date("2023-05-31");
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue={defaultValue}
        />
      </CunninghamProvider>
    );

    const nextMonthValue = new Date(defaultValue);
    nextMonthValue.setDate(defaultValue.getDate() + 1);

    const [input, toggleButton] = await screen.findAllByRole("button");
    await user.click(toggleButton);

    await user.keyboard("{ArrowDown}");
    expectFocusedMonthToBeEqual(nextMonthValue);

    // Reopens the calendar menu.
    await user.click(toggleButton);
    await user.click(toggleButton);

    expectFocusedMonthToBeEqual(defaultValue);

    await user.keyboard("{ArrowRight}");
    expectFocusedMonthToBeEqual(nextMonthValue);
  });
});

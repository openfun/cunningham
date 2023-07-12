import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import React, { FormEvent, useState } from "react";
import { afterEach, expect, vi } from "vitest";
import { CunninghamProvider } from ":/components/Provider";
import { DatePicker } from ":/components/Forms/DatePicker/DatePicker";
import { Button } from ":/components/Button";

describe("<DatePicker/>", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  const expectCalendarToBeClosed = () => {
    expect(screen.queryByRole("application")).toBeNull();
  };

  const expectCalendarToBeOpen = () => {
    const calendar = screen.queryByRole("application");
    expect(calendar).toBeDefined();
    expect(calendar).not.toBeNull();
    expect(Array.from(calendar!.classList)).contains(
      "c__calendar__wrapper--opened"
    );
  };

  const expectDateFieldToBeHidden = () => {
    const dateField = screen.queryByRole("presentation");
    expect(dateField).toBeTruthy();
    expect(Array.from(dateField!.parentElement!.classList)).contains(
      "c__date-picker__inner--collapsed"
    );
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
    const input = (await screen.findAllByRole("button"))![0];
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

  it("toggles calendar with keyboard", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker label="Pick a date" name="datepicker" />
      </CunninghamProvider>
    );
    const [input, toggleButton] = await screen.findAllByRole("button")!;

    await user.keyboard("{Tab}");
    expect(input).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(toggleButton).toHaveFocus();

    await user.keyboard("{Enter}");
    expectCalendarToBeOpen();
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
    const [monthSegment, daySegment, yearSegment] = await screen.findAllByRole(
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
    expect(yearSegment).toHaveFocus();
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
    const [monthSegment, daySegment, yearSegment] = await screen.findAllByRole(
      "spinbutton"
    )!;

    // Navigate through elements using Tab.
    await user.keyboard("{Tab}");
    expect(input).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(toggleButton).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(monthSegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(daySegment).toHaveFocus();

    await user.keyboard("{Tab}");
    expect(yearSegment).toHaveFocus();

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

    // Date field's value should be set to a placeholder value.
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expect(dateFieldContent).eq("mm/dd/yyyy");

    const isGridCellSelected = screen
      .getByRole("gridcell", { name: `${defaultValue.getDate()}` })!
      .getAttribute("aria-selected");
    expect(isGridCellSelected).toBeNull();

    // Close the calendar.
    const toggleButton = (await screen.findAllByRole("button"))![1];
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
    // Should be invalid if the picked date is outside the min/max range.
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          name="datepicker"
          defaultValue="2023-03-01"
          maxValue="2023-04-01"
          minValue="2023-05-01"
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
              onChange={(e: string | null) => setValue(e)}
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
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);
    expectCalendarToBeOpen();

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

    // Make sure toggle button and click on input are disabled.
    expect(input.getAttribute("aria-disabled")).eq("true");
    expect(button).toBeDisabled();

    // Make sure the clear button is not visible and disabled.
    expect(
      screen.queryByRole("button", { name: "Clear date", hidden: true })
    ).toBeDisabled();

    // Make sure each segment of the date field is disabled.
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
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);
    expectCalendarToBeOpen();
    await expectDatePickerStateToBe("focused");
  });

  it("submits forms data", async () => {
    let formData: any;
    const Wrapper = () => {
      const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        formData = {
          datepicker: data.get("datepicker"),
        };
      };

      return (
        <CunninghamProvider>
          <div>
            <form onSubmit={onSubmit}>
              <DatePicker label="Pick a date" name="datepicker" />
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
      datepicker: "",
    });

    // Open calendar
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    const monthSegment = await screen.getByRole("spinbutton", {
      name: /month/,
    });
    // Select the first segment, month one.
    await user.click(monthSegment);
    expect(monthSegment).toHaveFocus();

    // Type date's value.
    await user.keyboard("{1}{2}{5}{2}{0}{2}{3}");

    // Submit form being filled with a date.
    await user.click(submitButton);
    expectCalendarToBeClosed();
    expectDateFieldToBeDisplayed();

    // Make sure form's value matches.
    expect(formData).toEqual({
      datepicker: "2023-12-05",
    });

    // Clear picked date.
    const clearButton = screen.getByRole("button", {
      name: "Clear date",
    });
    await user.click(clearButton);
    expectDateFieldToBeDisplayed();

    // Submit the form being empty.
    await user.click(submitButton);

    // Date field disappears when the user click outside the comppnent.
    expectDateFieldToBeHidden();

    // Make sure form's value is null.
    expect(formData).toEqual({
      datepicker: "",
    });
  });

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
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // Focused month of the calendar grid should be the one from the default value.
    expectFocusedMonthToBeEqual(defaultValue);

    const previousMonthButton = screen.getByRole("button", {
      name: "Previous month",
    });
    const nextMonthButton = screen.getByRole("button", {
      name: "Next month",
    });

    // Focus previous month.
    await user.click(previousMonthButton);
    defaultValue.setMonth(defaultValue.getMonth() - 1);
    expectFocusedMonthToBeEqual(defaultValue);

    // Get back to the default focused month.
    await user.click(nextMonthButton);
    defaultValue.setMonth(defaultValue.getMonth() + 1);
    expectFocusedMonthToBeEqual(defaultValue);

    // Focus next month.
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
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // Focused year of the calendar grid should be the one from the default value.
    expectFocusedYearToBeEqual(defaultValue);

    const previousYearButton = screen.getByRole("button", {
      name: "Previous year",
    });
    const nextYearButton = screen.getByRole("button", {
      name: "Next year",
    });

    // Focus previous year.
    await user.click(previousYearButton);
    defaultValue.setFullYear(defaultValue.getFullYear() - 1);
    expectFocusedYearToBeEqual(defaultValue);

    // Get back to the default focused month.
    await user.click(nextYearButton);
    defaultValue.setFullYear(defaultValue.getFullYear() + 1);
    expectFocusedYearToBeEqual(defaultValue);

    // Focus next year.
    await user.click(nextYearButton);
    defaultValue.setFullYear(defaultValue.getFullYear() + 1);
    expectFocusedYearToBeEqual(defaultValue);
  });

  it("renders disabled next and previous month", async () => {
    const defaultValue = new Date("2023-05-24");
    const minValue = new Date("2023-05-22");
    const maxValue = new Date("2023-05-26");
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

    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // minValue doesn't allow to navigate to previous month.
    const previousMonthButton = screen.getByRole("button", {
      name: "Previous month",
    });
    expect(previousMonthButton).toBeDisabled();

    // maxValue doesn't allow to navigate to previous month.
    const nextMonthButton = screen.getByRole("button", {
      name: "Next month",
    });
    expect(nextMonthButton).toBeDisabled();
  });

  it("renders disabled next and previous year", async () => {
    const defaultValue = new Date("2023-05-24");
    const minValue = new Date("2023-05-22");
    const maxValue = new Date("2023-05-26");
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

    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // minValue doesn't allow to navigate to previous year.
    const previousYearButton = screen.getByRole("button", {
      name: "Previous year",
    });
    expect(previousYearButton).toBeDisabled();

    // maxValue doesn't allow to navigate to next year.
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
    const toggleButton = (await screen.findAllByRole("button"))![1];
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

    // By default, calendar's cells outside the focused month are not visible (month n-1 and n+1).
    // Cells within the focused month superior to the minDate should be clickable.
    // Cells inferior to the minDate, within the month, should be disabled.
    gridCells.forEach((gridCell) => {
      try {
        const button = within(gridCell).getByRole("button")!;
        const value = new Date(
          button.getAttribute("aria-label")!.replace("First available date", "")
        );
        expect(value.getMonth() === minValue.getMonth());
        if (value.getDate() < minValue.getDate()) {
          expect(button).toBeDisabled();
        } else {
          expect(button).not.toBeDisabled();
        }
      } catch (e: any) {
        // Make sure outside grid-cells render any button element, even disabled.
        expect(e.message).contains(
          'Unable to find an accessible element with the role "button"'
        );
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
      try {
        const button = within(gridCell).getByRole("button")!;
        const buttonLabel = button
          .getAttribute("aria-label")
          ?.replace("Last available date", "");
        expect(buttonLabel).toBeDefined();
        const value = new Date(buttonLabel!);
        expect(value.getMonth() === minValue.getMonth());
        if (value.getDate() > maxValue.getDate()) {
          expect(button).toBeDisabled();
        } else {
          expect(button).not.toBeDisabled();
        }
      } catch (e: any) {
        // Make sure outside grid-cells render any button element, even disabled.
        expect(e.message).contains(
          'Unable to find an accessible element with the role "button"'
        );
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
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // Get month dropdown.
    const monthDropdown = screen.getByRole("combobox", {
      name: "Select a month",
    });

    const [monthMenu, yearMenu] = await screen.findAllByRole("listbox");

    expectMenuToBeClosed(monthMenu);
    expectMenuToBeClosed(yearMenu);

    // Make sure the selected item matched the default value.
    let focusedMonth = monthDropdown.textContent?.replace(
      "arrow_drop_down",
      ""
    );
    expect(focusedMonth).eq(
      defaultValue.toLocaleString("default", { month: "short" })
    );

    // Open month dropdown.
    await user.click(monthDropdown);
    expectMenuToBeOpen(monthMenu);
    expectMenuToBeClosed(yearMenu);

    // Select a month option.
    defaultValue.setMonth(8);
    const option: HTMLLIElement = screen.getByRole("option", {
      name: defaultValue.toLocaleString("default", { month: "long" }),
    });
    await user.click(option);

    expectMenuToBeClosed(monthMenu);
    expectMenuToBeClosed(yearMenu);

    // Make sure focused month has properly updated.
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
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // Get year dropdown.
    const yearDropdown = screen.getByRole("combobox", {
      name: "Select a year",
    });

    const [monthMenu, yearMenu] = await screen.findAllByRole("listbox");

    expectMenuToBeClosed(yearMenu);
    expectMenuToBeClosed(monthMenu);

    // Make sure the selected item matched the default value.
    let focusedMonth = yearDropdown.textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq(
      defaultValue.toLocaleString("default", { year: "numeric" })
    );

    await user.click(yearDropdown);
    expectMenuToBeOpen(yearMenu);
    expectMenuToBeClosed(monthMenu);

    // Select a year option.
    defaultValue.setFullYear(2024);
    const option: HTMLLIElement = screen.getByRole("option", {
      name: defaultValue.toLocaleString("default", { year: "numeric" }),
    });
    await user.click(option);

    expectMenuToBeClosed(yearMenu);
    expectMenuToBeClosed(monthMenu);

    // Make sure focused month has properly updated.
    focusedMonth = yearDropdown.textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq(
      defaultValue.toLocaleString("default", { year: "numeric" })
    );
  });

  it("renders only cell within the focused month", async () => {
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
    // Open the calendar.
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // Get all grid-cells from the calendar.
    const gridCells = await screen.findAllByRole("gridcell");
    let visibleValues: Array<Date> = [];
    // Make sure that all visible grid-cells are within the focused month.
    gridCells.forEach((gridCell) => {
      try {
        const button = within(gridCell).getByRole("button");
        const value = new Date(
          button.getAttribute("aria-label")!.replace("selected", "")
        );
        expect(button).not.toBeDisabled();
        expect(defaultValue.getMonth() === value.getMonth());
        visibleValues = [value, ...visibleValues];
      } catch (e: any) {
        // Make sure outside grid-cells render any button element, even disabled.
        expect(e.message).contains(
          'Unable to find an accessible element with the role "button"'
        );
      }
    });
    // Make sure we get as many visible values as days in the focused month.
    expect(visibleValues.length).eq(31);
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

    // Open calendar.
    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    // Navigate to the previous month using keyboard.
    // default value is the cell of the calendar grid.
    // Thus, navigating one cell up, changes the focused month.
    await user.keyboard("{ArrowUp}");
    expectFocusedMonthToBeEqual(previousMonthValue);

    // Reopen the calendar menu to reset the focused month.
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

    const toggleButton = (await screen.findAllByRole("button"))![1];
    await user.click(toggleButton);

    await user.keyboard("{ArrowDown}");
    expectFocusedMonthToBeEqual(nextMonthValue);

    // Reopen the calendar menu to reset the focused month.
    await user.click(toggleButton);
    await user.click(toggleButton);

    expectFocusedMonthToBeEqual(defaultValue);

    // Navigate to the previous month using keyboard.
    // default value is the last cell of the calendar grid.
    // Thus, navigating one cell right, changes the focused month.
    await user.keyboard("{ArrowRight}");
    expectFocusedMonthToBeEqual(nextMonthValue);
  });

  it("uses the locale props calendar system", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider>
        <DatePicker
          label="Pick a date"
          locale="hi-IN-u-ca-indian"
          defaultValue="2023-06-25"
        />
      </CunninghamProvider>
    );

    const input = (await screen.findAllByRole("button"))[0];

    // Toggle button opens the calendar.
    await user.click(input);
    expectCalendarToBeOpen();
    expectDateFieldToBeDisplayed();

    // Make sure dateField is in the right locale
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expect(dateFieldContent).eq("4/4/1945 शक");

    // Make sure month is in the right locale
    const focusedMonth = screen
      .getByRole("combobox", {
        name: "Select a month",
      })!
      .textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq("आषाढ़");

    // Make sure year is in the right locale
    const focusedYear = screen
      .getByRole("combobox", {
        name: "Select a year",
      })!
      .textContent?.replace("arrow_drop_down", "");
    expect(focusedYear).eq("1945 शक");

    // Make sure weekdays are in the right locale
    screen.getByText("रवि");
    screen.getByText("सोम");
    screen.getByText("मंगल");
    screen.getByText("बुध");
    screen.getByText("गुरु");
    screen.getByText("शुक्र");
    screen.getByText("शनि");
  });

  it("uses the cunningham provider props calendar systems", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider currentLocale="fr-FR">
        <DatePicker label="Pick a date" defaultValue="2023-06-25" />
      </CunninghamProvider>
    );

    const input = (await screen.findAllByRole("button"))[0];

    // Toggle button opens the calendar.
    await user.click(input);
    expectCalendarToBeOpen();
    expectDateFieldToBeDisplayed();

    // Make sure dateField is in the right locale
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expect(dateFieldContent).eq("25/06/2023");

    // Make sure month is in the right locale
    const focusedMonth = screen
      .getByRole("combobox", {
        name: "Sélectionner un mois",
      })!
      .textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq("juin");

    // Make sure year is in the right locale
    const focusedYear = screen
      .getByRole("combobox", {
        name: "Sélectionner une année",
      })!
      .textContent?.replace("arrow_drop_down", "");
    expect(focusedYear).eq("2023");

    // Make sure weekdays are in the right locale
    screen.getByText("lun.");
    screen.getByText("mar.");
    screen.getByText("mer.");
    screen.getByText("jeu.");
    screen.getByText("ven.");
    screen.getByText("sam.");
    screen.getByText("dim.");
  });

  it("makes sure the locale props override the cunningham provider calendar system", async () => {
    const user = userEvent.setup();
    render(
      <CunninghamProvider currentLocale="fr-FR">
        <DatePicker
          label="Pick a date"
          defaultValue="2023-06-25"
          locale="hi-IN-u-ca-indian"
        />
      </CunninghamProvider>
    );

    const input = (await screen.findAllByRole("button"))[0];

    // Toggle button opens the calendar.
    await user.click(input);
    expectCalendarToBeOpen();
    expectDateFieldToBeDisplayed();

    // Make sure dateField is in the right locale
    const dateFieldContent = screen.getByRole("presentation").textContent;
    expect(dateFieldContent).eq("4/4/1945 शक");

    // Make sure month is in the right locale
    // And aria-label uses the right translation.
    const focusedMonth = screen
      .getByRole("combobox", {
        name: "Sélectionner un mois",
      })!
      .textContent?.replace("arrow_drop_down", "");
    expect(focusedMonth).eq("आषाढ़");

    // Make sure year is in the right locale
    // And aria-label uses the right translation.
    const focusedYear = screen
      .getByRole("combobox", {
        name: "Sélectionner une année",
      })!
      .textContent?.replace("arrow_drop_down", "");
    expect(focusedYear).eq("1945 शक");

    // Make sure weekdays are in the right locale
    screen.getByText("रवि");
    screen.getByText("सोम");
    screen.getByText("मंगल");
    screen.getByText("बुध");
    screen.getByText("गुरु");
    screen.getByText("शुक्र");
    screen.getByText("शनि");
  });

  it("has a wrong locale props", async () => {
    vi.spyOn(console, "error").mockImplementation(() => undefined);
    expect(() =>
      render(
        <CunninghamProvider>
          <DatePicker label="Pick a date" locale="111" />
        </CunninghamProvider>
      )
    ).toThrow("Incorrect locale information provided");
  });
});

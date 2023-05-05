import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import { expect } from "vitest";
import React, { FormEvent, useState } from "react";
import { Select } from ":/components/Forms/Select/index";
import { Button } from ":/components/Button";
import { CunninghamProvider } from ":/components/Provider";

describe("<Select/>", () => {
  const expectMenuToBeOpen = (menu: HTMLDivElement) => {
    expect(Array.from(menu.classList)).contains("c__select__menu--opened");
  };
  const expectOptions = (expectedOptions: string[]) => {
    const options = screen.getAllByRole("option");
    expect(options.length).toBe(expectedOptions.length);
    options.forEach((option, i) => {
      expect(option).toHaveTextContent(expectedOptions[i]);
    });
  };
  const expectMenuToBeClosed = (menu: HTMLDivElement) => {
    expect(Array.from(menu.classList)).not.contains("c__select__menu--opened");
  };
  const expectOptionToBeSelected = (option: HTMLLIElement) => {
    expect(option).toHaveAttribute("aria-selected", "true");
    expect(Array.from(option.classList)).contains(
      "c__select__menu__item--selected"
    );
    expect(Array.from(option.classList)).contains(
      "c__select__menu__item--highlight"
    );
  };
  const expectOptionToBeUnselected = (option: HTMLLIElement) => {
    expect(option).toHaveAttribute("aria-selected", "false");
    expect(Array.from(option.classList)).not.contains(
      "c__select__menu__item--selected"
    );
  };

  describe("Searchable", () => {
    it("shows all options when clicking on the input", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
              },
              {
                label: "Panama",
              },
              {
                label: "London",
              },
              {
                label: "New York",
              },
              {
                label: "Tokyo",
              },
            ]}
            searchable={true}
          />
        </CunninghamProvider>
      );

      const input = screen.getByRole("combobox", {
        name: "City",
      });
      // It returns the input.
      expect(input.tagName).toEqual("INPUT");

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });

      expectMenuToBeClosed(menu);

      // Click on the input.
      await user.click(input);
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama", "London", "New York", "Tokyo"]);

      // Select an option.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "New York",
      });
      await user.click(option);

      // The menu should be closed.
      expectMenuToBeClosed(menu);

      // The input should have the selected value.
      expect(input).toHaveValue("New York");
    });
    it("filters options when typing", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
                value: "paris",
              },
              {
                label: "Panama",
                value: "panama",
              },
              {
                label: "London",
                value: "london",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            searchable={true}
          />
        </CunninghamProvider>
      );

      const input = screen.getByRole("combobox", {
        name: "City",
      });
      // It returns the input.
      expect(input.tagName).toEqual("INPUT");

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });

      expectMenuToBeClosed(menu);

      // Click on the input.
      await user.click(input);
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama", "London", "New York", "Tokyo"]);

      // Verify that filtering works.
      await user.type(input, "Pa");
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama"]);

      await user.type(input, "r");
      expectOptions(["Paris"]);

      // Select option.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "Paris",
      });
      await user.click(option);

      expect(input).toHaveValue("Paris");
    });
    it("clears value", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
              },
              {
                label: "Panama",
              },
              {
                label: "London",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            searchable={true}
            defaultValue="new_york"
          />
        </CunninghamProvider>
      );

      const user = userEvent.setup();
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveValue("New York");

      // Clear selection.
      const clearButton = screen.getByRole("button", {
        name: "Clear selection",
      });
      await user.click(clearButton);
      expect(input).toHaveValue("");
    });
    it("should select with defaultValue using label", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
              },
              {
                label: "Panama",
              },
              {
                label: "London",
              },
              {
                label: "New York",
              },
              {
                label: "Tokyo",
              },
            ]}
            searchable={true}
            defaultValue="New York"
          />
        </CunninghamProvider>
      );

      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveValue("New York");
    });
    it("should select with defaultValue using value", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
              },
              {
                label: "Panama",
              },
              {
                label: "London",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            searchable={true}
            defaultValue="new_york"
          />
        </CunninghamProvider>
      );

      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveValue("New York");
    });
    it("should not select any value if there is not match", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
              },
              {
                label: "Panama",
              },
              {
                label: "London",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            searchable={true}
            defaultValue="not_found"
          />
        </CunninghamProvider>
      );

      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveValue("");
    });
    it("works controlled", async () => {
      const Wrapper = () => {
        const [value, setValue] = useState<string | number | undefined>(
          "london"
        );
        return (
          <CunninghamProvider>
            <div>
              <div>Value = {value}|</div>
              <Button onClick={() => setValue(undefined)}>Clear</Button>
              <Select
                label="City"
                options={[
                  {
                    label: "Paris",
                    value: "paris",
                  },
                  {
                    label: "London",
                    value: "london",
                  },
                  {
                    label: "New York",
                    value: "new_york",
                  },
                  {
                    label: "Tokyo",
                    value: "tokyo",
                  },
                ]}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                searchable={true}
              />
            </div>
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);

      const input = screen.getByRole("combobox", {
        name: "City",
      });

      // Make sure value is selected.
      screen.getByText("Value = london|");

      // Change value.
      const user = userEvent.setup();
      await user.click(input);

      // Make sure the option is selected.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "London",
      });
      expectOptionToBeSelected(option);

      // List should show only selected value.
      expectOptions(["London"]);

      // Clear value.
      const button = screen.getByRole("button", {
        name: "Clear",
      });
      await user.click(button);

      // Select an option.
      await user.click(input);
      await user.click(
        screen.getByRole("option", {
          name: "New York",
        })
      );

      // Make sure value is selected.
      screen.getByText("Value = new_york|");

      // clear value.
      await user.click(button);

      // Make sure value is cleared.
      screen.getByText("Value = |");
    });
    it("renders disabled", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
                value: "paris",
              },
              {
                label: "London",
                value: "london",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            disabled={true}
            searchable={true}
          />
        </CunninghamProvider>
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveAttribute("disabled");

      const button: HTMLButtonElement = document.querySelector(
        ".c__select__inner__actions__open"
      )!;
      expect(button).toBeDisabled();

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      expectMenuToBeClosed(menu);

      const user = userEvent.setup();

      // Try to open the menu.
      await user.click(input);

      // Make sure menu is still closed.
      expectMenuToBeClosed(menu);

      // Make sure no value is rendered
      const valueRendered = document.querySelector(".c__select__inner__value");
      expect(valueRendered).toHaveTextContent("");

      // Try to type
      await user.type(input, "Pa");
      expectMenuToBeClosed(menu);
    });
    it("submits form data", async () => {
      let formData: any;
      const Wrapper = () => {
        const onSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          formData = {
            city: data.get("city"),
          };
        };

        return (
          <CunninghamProvider>
            <div>
              <form onSubmit={onSubmit}>
                <Select
                  label="City"
                  name="city"
                  options={[
                    {
                      label: "Paris",
                      value: "paris",
                    },
                    {
                      label: "London",
                      value: "london",
                    },
                    {
                      label: "New York",
                      value: "new_york",
                    },
                    {
                      label: "Tokyo",
                      value: "tokyo",
                    },
                  ]}
                  searchable={true}
                />
                <Button>Submit</Button>
              </form>
            </div>
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);

      const user = userEvent.setup();
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const button = screen.getByRole("button", {
        name: "Submit",
      });

      // Submit the form being empty.
      await user.click(button);
      expect(formData).toEqual({
        city: null,
      });

      // Try to type something and verify that is does not submit it.
      await user.type(input, "Pa");
      await user.click(button);
      expect(formData).toEqual({
        city: null,
      });

      // Select an option
      await user.clear(input);
      await user.click(input);
      expectMenuToBeOpen(menu);

      await user.click(
        screen.getByRole("option", {
          name: "New York",
        })
      );

      // Submit the form being fulfilled.
      await user.click(button);
      expect(formData).toEqual({
        city: "new_york",
      });

      // Clear selection.
      const clearButton = screen.getByRole("button", {
        name: "Clear selection",
      });
      await userEvent.click(clearButton);

      // Submit again.
      await user.click(button);
      expect(formData).toEqual({
        city: null,
      });
    });
  });

  describe("Simple", () => {
    it("should select an option and unselect it", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
              },
              {
                label: "London",
              },
              {
                label: "New York",
              },
              {
                label: "Tokyo",
              },
            ]}
          />
        </CunninghamProvider>
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const label = screen.getByText("City");
      const valueRendered = document.querySelector(".c__select__inner__value");

      // Make sure no value is rendered.
      expect(valueRendered).toHaveTextContent("");
      expectMenuToBeClosed(menu);
      expect(
        screen.queryByRole("option", { name: "Paris" })
      ).not.toBeInTheDocument();

      // Make sure the label is set as placeholder.
      expect(Array.from(label.classList)).toContain("placeholder");

      await user.click(input);

      // Make sure the menu is opened and options are rendered.
      expectMenuToBeOpen(menu);
      expect(
        screen.queryByRole("option", { name: "Paris" })
      ).toBeInTheDocument();

      // Make sure the option is not selected.
      let option: HTMLLIElement = screen.getByRole("option", {
        name: "London",
      });
      expectOptionToBeUnselected(option);

      // Select an option.
      await user.click(option);

      // Make sure option is selected.
      expect(valueRendered).toHaveTextContent("London");
      expect(Array.from(label.classList)).not.toContain("placeholder");

      // Make sure menu is automatically closed.
      expectMenuToBeClosed(menu);

      // Open it again
      await user.click(input);

      expectMenuToBeOpen(menu);

      // Make sure the option is marked as selected.
      option = screen.getByRole("option", { name: "London" });
      expectOptionToBeSelected(option);

      // Clear selection.
      const clearButton = screen.getByRole("button", {
        name: "Clear selection",
      });
      await userEvent.click(clearButton);

      // Make sure value is cleared.
      expect(valueRendered).toHaveTextContent("");
      expect(Array.from(label.classList)).toContain("placeholder");

      // Make sure the option is unselected.
      option = screen.getByRole("option", { name: "London" });
      await waitFor(() => expectOptionToBeUnselected(option));
    });
    it("should select with defaultValue using label", () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
              },
              {
                label: "London",
              },
              {
                label: "New York",
              },
              {
                label: "Tokyo",
              },
            ]}
            defaultValue="Tokyo"
          />
        </CunninghamProvider>
      );
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const label = screen.getByText("City");
      const valueRendered = document.querySelector(".c__select__inner__value");

      // Make sure option is selected.
      expect(valueRendered).toHaveTextContent("Tokyo");
      expect(Array.from(label.classList)).not.toContain("placeholder");

      // Make sure menu is automatically closed.
      expectMenuToBeClosed(menu);
    });
    it("should select with defaultValue using value", () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
                value: "paris",
              },
              {
                label: "London",
                value: "london",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            defaultValue="new_york"
          />
        </CunninghamProvider>
      );
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const label = screen.getByText("City");
      const valueRendered = document.querySelector(".c__select__inner__value");

      // Make sure option is selected.
      expect(valueRendered).toHaveTextContent("New York");
      expect(Array.from(label.classList)).not.toContain("placeholder");

      // Make sure menu is automatically closed.
      expectMenuToBeClosed(menu);
    });
    it("works controlled", async () => {
      const Wrapper = () => {
        const [value, setValue] = useState<string | number | undefined>(
          "london"
        );
        return (
          <CunninghamProvider>
            <div>
              <div>Value = {value}|</div>
              <Button onClick={() => setValue(undefined)}>Clear</Button>
              <Select
                label="City"
                options={[
                  {
                    label: "Paris",
                    value: "paris",
                  },
                  {
                    label: "London",
                    value: "london",
                  },
                  {
                    label: "New York",
                    value: "new_york",
                  },
                  {
                    label: "Tokyo",
                    value: "tokyo",
                  },
                ]}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);

      const input = screen.getByRole("combobox", {
        name: "City",
      });

      // Make sure value is selected.
      screen.getByText("Value = london|");

      // Change value.
      const user = userEvent.setup();
      await user.click(input);

      // Make sure the option is selected.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "London",
      });
      expectOptionToBeSelected(option);

      // Select an option.
      await user.click(
        screen.getByRole("option", {
          name: "New York",
        })
      );

      // Make sure value is selected.
      screen.getByText("Value = new_york|");

      // clear value.
      const button = screen.getByRole("button", {
        name: "Clear",
      });
      await user.click(button);

      // Make sure value is cleared.
      screen.getByText("Value = |");
    });

    it("renders disabled", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
                value: "paris",
              },
              {
                label: "London",
                value: "london",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            disabled={true}
          />
        </CunninghamProvider>
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveAttribute("disabled");

      const button: HTMLButtonElement = document.querySelector(
        ".c__select__inner__actions__open"
      )!;
      expect(button).toBeDisabled();

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      expectMenuToBeClosed(menu);

      const user = userEvent.setup();

      // Try to open the menu.
      await user.click(input);

      // Make sure menu is still closed.
      expectMenuToBeClosed(menu);

      // Make sure no value is rendered
      const valueRendered = document.querySelector(".c__select__inner__value");
      expect(valueRendered).toHaveTextContent("");
    });
    it("renders with text", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
                value: "paris",
              },
              {
                label: "London",
                value: "london",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            text="This is a text"
          />
        </CunninghamProvider>
      );
      screen.getByText("This is a text");
    });
    it("renders with state=error", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
                value: "paris",
              },
              {
                label: "London",
                value: "london",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            text="This is a text"
            state="error"
          />
        </CunninghamProvider>
      );
      expect(
        document.querySelector(".c__select.c__select--error")
      ).toBeInTheDocument();
    });
    it("renders with state=success", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="City"
            options={[
              {
                label: "Paris",
                value: "paris",
              },
              {
                label: "London",
                value: "london",
              },
              {
                label: "New York",
                value: "new_york",
              },
              {
                label: "Tokyo",
                value: "tokyo",
              },
            ]}
            text="This is a text"
            state="success"
          />
        </CunninghamProvider>
      );
      expect(
        document.querySelector(".c__select.c__select--success")
      ).toBeInTheDocument();
    });
    it("submits form data", async () => {
      let formData: any;
      const Wrapper = () => {
        const onSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          formData = {
            city: data.get("city"),
          };
        };

        return (
          <CunninghamProvider>
            <div>
              <form onSubmit={onSubmit}>
                <Select
                  label="City"
                  name="city"
                  options={[
                    {
                      label: "Paris",
                      value: "paris",
                    },
                    {
                      label: "London",
                      value: "london",
                    },
                    {
                      label: "New York",
                      value: "new_york",
                    },
                    {
                      label: "Tokyo",
                      value: "tokyo",
                    },
                  ]}
                />
                <Button>Submit</Button>
              </form>
            </div>
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);

      const user = userEvent.setup();
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const button = screen.getByRole("button", {
        name: "Submit",
      });

      // Submit the form being empty.
      await user.click(button);
      expect(formData).toEqual({
        city: null,
      });

      // Select an option
      await user.click(input);
      expectMenuToBeOpen(menu);

      await user.click(
        screen.getByRole("option", {
          name: "New York",
        })
      );

      // Submit the form being fulfilled.
      await user.click(button);
      expect(formData).toEqual({
        city: "new_york",
      });

      // Clear selection.
      const clearButton = screen.getByRole("button", {
        name: "Clear selection",
      });
      await userEvent.click(clearButton);

      // Submit again.
      await user.click(button);
      expect(formData).toEqual({
        city: null,
      });
    });
  });
});

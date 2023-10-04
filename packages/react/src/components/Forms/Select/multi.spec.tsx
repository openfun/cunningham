import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from "@testing-library/react";
import React, { createRef, FormEvent, useState } from "react";
import { expect } from "vitest";
import { within } from "@testing-library/dom";
import { CunninghamProvider } from ":/components/Provider";
import { Select, SelectHandle } from ":/components/Forms/Select/index";
import {
  expectMenuToBeClosed,
  expectMenuToBeOpen,
  expectOptions,
  expectOptionToBeDisabled,
  expectOptionToBeUnselected,
  expectSelectedOptions,
} from ":/components/Forms/Select/test-utils";
import { Button } from ":/components/Button";

describe("<Select multi={true} />", () => {
  describe("Simple", async () => {
    it("should select options and clear them one by one", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "Cities",
      });
      const label = screen.getByText("Cities")!.parentElement!;

      // Expect no options to be selected.
      expectSelectedOptions([]);

      // Make sure the label is set as placeholder.
      expect(Array.from(label.classList)).toContain("placeholder");

      await user.click(input);

      // Make sure the menu is opened and options are rendered.
      expectMenuToBeOpen(menu);
      expect(
        screen.queryByRole("option", { name: "Paris" }),
      ).toBeInTheDocument();

      // Make sure the option is not selected.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "London",
      });
      expectOptionToBeUnselected(option);

      // Select an option.
      await user.click(option);

      // Make sure the option is selected.
      expectSelectedOptions(["London"]);

      // Make sure the menu stays open.
      expectMenuToBeOpen(menu);

      // Make sure the option is removed from the menu.
      expect(
        screen.queryByRole("option", { name: "London" }),
      ).not.toBeInTheDocument();

      // Select other options.
      await user.click(
        screen.getByRole("option", {
          name: "Tokyo",
        }),
      );
      await user.click(
        screen.getByRole("option", {
          name: "Panama",
        }),
      );

      await waitFor(() => expectSelectedOptions(["London", "Tokyo", "Panama"]));

      // Clear one option.
      await user.click(
        within(
          screen.getByText("Panama").parentNode as HTMLDivElement,
        ).getByRole("button", {
          name: "Clear selection",
        }),
      );
      await waitFor(() => expectSelectedOptions(["London", "Tokyo"]));

      // Clear one option.
      await user.click(
        within(
          screen.getByText("London").parentNode as HTMLDivElement,
        ).getByRole("button", {
          name: "Clear selection",
        }),
      );
      await waitFor(() => expectSelectedOptions(["Tokyo"]));

      // Clear one option.
      await user.click(
        within(
          screen.getByText("Tokyo").parentNode as HTMLDivElement,
        ).getByRole("button", {
          name: "Clear selection",
        }),
      );
      expectSelectedOptions([]);
    });

    it("should clear all selected options", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      await user.click(input);

      // Select options.
      await user.click(
        screen.getByRole("option", {
          name: "London",
        }),
      );
      await user.click(
        screen.getByRole("option", {
          name: "Tokyo",
        }),
      );
      await user.click(
        screen.getByRole("option", {
          name: "Panama",
        }),
      );
      expectSelectedOptions(["London", "Tokyo", "Panama"]);

      // Clear selection.
      const clearButton = screen.getByRole("button", {
        name: "Clear all selections",
      });
      await user.click(clearButton);
      expectSelectedOptions([]);
    });

    it("should select with defaultValue using label", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            defaultValue={["Tokyo", "New York"]}
            multi={true}
          />
        </CunninghamProvider>,
      );
      expectSelectedOptions(["New York", "Tokyo"]);
    });

    it("should select with defaultValue using value", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            defaultValue={["tokyo", "new_york"]}
            multi={true}
          />
        </CunninghamProvider>,
      );
      expectSelectedOptions(["New York", "Tokyo"]);
    });

    it("works controlled", async () => {
      const Wrapper = () => {
        const [value, setValue] = useState<string[]>(["london"]);
        return (
          <CunninghamProvider>
            <div>
              <div>Value = {JSON.stringify(value)}|</div>
              <Button onClick={() => setValue([])}>Clear</Button>
              <Select
                label="Cities"
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
                multi={true}
                value={value}
                onChange={(e) => setValue(e.target.value as string[])}
              />
            </div>
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);

      const input = screen.getByRole("combobox", {
        name: "Cities",
      });

      // Make sure value is selected.
      screen.getByText('Value = ["london"]|');

      // Change value.
      const user = userEvent.setup();
      await user.click(input);

      // Make sure the option is removed from the menu.
      expect(
        screen.queryByRole("option", { name: "London" }),
      ).not.toBeInTheDocument();

      // Select an option.
      await user.click(
        screen.getByRole("option", {
          name: "New York",
        }),
      );

      // Make sure value is selected.
      screen.getByText('Value = ["london","new_york"]|');

      // clear value.
      const button = screen.getByRole("button", {
        name: "Clear",
      });
      await user.click(button);

      // Make sure value is cleared.
      screen.getByText("Value = []|");
    });

    it("renders disabled", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      expect(input).toHaveAttribute("disabled");

      const button: HTMLButtonElement = document.querySelector(
        ".c__select__inner__actions__open",
      )!;
      expect(button).toBeDisabled();

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "Cities",
      });
      expectMenuToBeClosed(menu);

      const user = userEvent.setup();

      // Try to open the menu.
      await user.click(input);

      // Make sure menu is still closed.
      expectMenuToBeClosed(menu);

      // Make sure no value is rendered
      expectSelectedOptions([]);
    });

    it("renders with text", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );
      screen.getByText("This is a text");
    });

    it("renders with state=error", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );
      expect(
        document.querySelector(".c__select.c__select--error"),
      ).toBeInTheDocument();
    });

    it("renders with state=success", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );
      expect(
        document.querySelector(".c__select.c__select--success"),
      ).toBeInTheDocument();
    });

    it("submits form data", async () => {
      let formData: any;
      const Wrapper = () => {
        const onSubmit = (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          const data = new FormData(e.currentTarget);
          formData = {
            cities: data.getAll("cities"),
          };
        };

        return (
          <CunninghamProvider>
            <div>
              <form onSubmit={onSubmit}>
                <Select
                  label="Cities"
                  name="cities"
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
                  multi={true}
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
        name: "Cities",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "Cities",
      });
      const button = screen.getByRole("button", {
        name: "Submit",
      });

      // Submit the form being empty.
      expectSelectedOptions([]);
      await user.click(button);
      expect(formData).toEqual({
        cities: [],
      });

      // Select an option
      await user.click(input);
      expectMenuToBeOpen(menu);

      await user.click(
        screen.getByRole("option", {
          name: "New York",
        }),
      );
      expectSelectedOptions(["New York"]);

      // Close the menu.
      await user.click(input);
      expectMenuToBeClosed(menu);

      // Submit the form being fulfilled.
      await user.click(button);
      expect(formData).toEqual({
        cities: ["new_york"],
      });
      expectSelectedOptions(["New York"]);

      // Select another option.
      await user.click(input);
      await user.click(
        await screen.findByRole("option", {
          name: "Paris",
        }),
      );
      expectSelectedOptions(["New York", "Paris"]);

      // Close the menu.
      await user.click(input);
      expectMenuToBeClosed(menu);

      // Submit the form being fulfilled.
      await user.click(button);
      expect(formData).toEqual({
        cities: ["new_york", "paris"],
      });

      // Clear selection.
      const clearButton = screen.getByRole("button", {
        name: "Clear all selections",
      });
      await userEvent.click(clearButton);

      // Submit again.
      await user.click(button);
      expect(formData).toEqual({
        cities: [],
      });
    });

    it("should not be clearable", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            clearable={false}
            defaultValue={["Paris"]}
            multi={true}
          />
        </CunninghamProvider>,
      );
      screen.getByRole("combobox", {
        name: "Cities",
      });

      // Make sure default value is rendered.
      expectSelectedOptions(["Paris"]);
      // Make sure the clear button is not rendered.
      expect(
        screen.queryByRole("button", {
          name: "Clear all selections",
        }),
      ).not.toBeInTheDocument();
    });

    it("is not possible to select disabled options", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
            multi={true}
            options={[
              {
                label: "Paris",
              },
              {
                label: "London",
              },
              {
                label: "New York",
                disabled: true,
              },
              {
                label: "Tokyo",
              },
            ]}
          />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "Cities",
      });

      // Make sure the select is empty.
      expectSelectedOptions([]);

      const user = userEvent.setup();
      await user.click(input);
      expectMenuToBeOpen(menu);

      // Make sure the disabled option is not selectable.
      let option: HTMLLIElement = screen.getByRole("option", {
        name: "New York",
      });
      expectOptionToBeDisabled(option);

      // Try to click on the disabled option.
      await user.click(option);

      expectMenuToBeOpen(menu);
      // Make sure the select is still empty.
      expectSelectedOptions([]);

      // Select a not disabled option.
      option = screen.getByRole("option", {
        name: "Tokyo",
      });

      await user.click(option);
      await waitFor(() => expectSelectedOptions(["Tokyo"]));
    });

    it("is accessible if the the label is not shown", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
            options={[
              {
                label: "Paris",
              },
              {
                label: "London",
              },
              {
                label: "New York",
                disabled: true,
              },
              {
                label: "Tokyo",
              },
            ]}
            hideLabel={true}
            multi={true}
          />
        </CunninghamProvider>,
      );
      // Make sure the input is accessible.
      screen.getByRole("combobox", {
        name: "Cities",
      });
      const label = screen.getByText("Cities")!.parentElement!;
      expect(Array.from(label.classList)).toContain("offscreen");
    });

    it("is possible to select again the last deleted item", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );

      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      expectSelectedOptions([]);

      const user = userEvent.setup();
      await user.click(input);

      // Select options.
      await user.click(
        screen.getByRole("option", {
          name: "Paris",
        }),
      );
      expectSelectedOptions(["Paris"]);

      // Clear selection.
      const clearButton = screen.getByRole("button", {
        name: "Clear all selections",
      });
      await user.click(clearButton);
      expectSelectedOptions([]);

      // Select again London.
      await user.click(input);
      await user.click(
        screen.getByRole("option", {
          name: "Paris",
        }),
      );
      expectSelectedOptions(["Paris"]);
    });

    it("blurs from ref", async () => {
      const ref = createRef<SelectHandle>();
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
            ]}
            multi={true}
            ref={ref}
          />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const user = userEvent.setup();

      // Make sure the select is not focused.
      expect(document.activeElement?.className).toEqual("");

      // Focus the select.
      await user.click(input);
      expectMenuToBeOpen(menu);
      expect(document.activeElement?.className).toContain("c__button");

      // Blur the select.
      ref.current?.blur();

      // Make sure the select is blured.
      await waitFor(() => expectMenuToBeClosed(menu));
      expect(document.activeElement?.className).toEqual("");
    });
  });

  describe("Searchable", async () => {
    it("shows all options when clicking on the input", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );

      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      // It returns the input.
      expect(input.tagName).toEqual("INPUT");

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "Cities",
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

      expectMenuToBeOpen(menu);

      expectSelectedOptions(["New York"]);
    });

    it("filters options when typing", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );

      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      // It returns the input.
      expect(input.tagName).toEqual("INPUT");

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "Cities",
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
    });

    it("selects the option on enter", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );

      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      // It returns the input.
      expect(input.tagName).toEqual("INPUT");

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "Cities",
      });

      expectMenuToBeClosed(menu);

      // Click on the input.
      await user.click(input);
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama", "London", "New York", "Tokyo"]);

      // Verify that filtering works.
      await user.type(input, "Par");
      expectOptions(["Paris"]);

      await user.type(input, "{enter}");

      await waitFor(() => expectSelectedOptions(["Paris"]));
    });

    it("remove last selected value on backspace", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
            defaultValue={["panama", "tokyo", "new_york"]}
          />
        </CunninghamProvider>,
      );

      expectSelectedOptions(["Panama", "New York", "Tokyo"]);

      const input = screen.getByRole("combobox", {
        name: "Cities",
      });

      // Type few characters.
      await user.type(input, "Par");
      expectOptions(["Paris"]);

      // Remove "Par" characters.
      await user.type(input, "{backspace}");
      await user.type(input, "{backspace}");
      await user.type(input, "{backspace}");
      expectSelectedOptions(["Panama", "New York", "Tokyo"]);

      await user.type(input, "{backspace}");
      expectSelectedOptions(["Panama", "New York"]);

      await user.type(input, "{backspace}");
      expectSelectedOptions(["Panama"]);

      await user.type(input, "{backspace}");
      expectSelectedOptions([]);

      // One last to be sure it works when already empty.
      await user.type(input, "{backspace}");
      expectSelectedOptions([]);
    });

    it("clears value", async () => {
      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
            searchable={true}
            defaultValue={["London", "Tokyo", "Panama"]}
          />
        </CunninghamProvider>,
      );

      expectSelectedOptions(["Panama", "London", "Tokyo"]);

      // Clear selection.
      const clearButton = screen.getByRole("button", {
        name: "Clear all selections",
      });
      await user.click(clearButton);
      expectSelectedOptions([]);
    });

    it("should select with defaultValue using label", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
            searchable={true}
            defaultValue={["London", "Tokyo", "Panama"]}
          />
        </CunninghamProvider>,
      );

      expectSelectedOptions(["Panama", "London", "Tokyo"]);
    });

    it("should select with defaultValue using value", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            defaultValue={["tokyo", "new_york"]}
            searchable={true}
            multi={true}
          />
        </CunninghamProvider>,
      );
      expectSelectedOptions(["New York", "Tokyo"]);
    });

    it("should not select any value if there is not match", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            defaultValue={["not_found", "new_york"]}
            searchable={true}
            multi={true}
          />
        </CunninghamProvider>,
      );
      expectSelectedOptions(["New York"]);
    });

    it("works controlled", async () => {
      const Wrapper = () => {
        const [value, setValue] = useState<string[]>(["london"]);
        return (
          <CunninghamProvider>
            <div>
              <div>Value = {JSON.stringify(value)}|</div>
              <Button onClick={() => setValue([])}>Clear</Button>
              <Select
                label="Cities"
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
                multi={true}
                searchable={true}
                value={value}
                onChange={(e) => setValue(e.target.value as string[])}
              />
            </div>
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);

      const input = screen.getByRole("combobox", {
        name: "Cities",
      });

      // Make sure value is selected.
      screen.getByText('Value = ["london"]|');
      expectSelectedOptions(["London"]);

      // Select one more value.
      const user = userEvent.setup();
      await user.click(input);
      await waitFor(() => expectOptions(["Paris", "New York", "Tokyo"]));
      await user.type(input, "New");
      await waitFor(() => expectOptions(["New York"]));
      await user.type(input, "{enter}}");
      expectSelectedOptions(["London", "New York"]);
      screen.getByText('Value = ["london","new_york"]|');

      // clear value.
      const button = screen.getByRole("button", {
        name: "Clear",
      });
      await user.click(button);

      // Make sure value is cleared.
      screen.getByText("Value = []|");
    });

    it("renders disabled", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
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
            multi={true}
          />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "Cities",
      });
      expect(input).toHaveAttribute("disabled");

      const button: HTMLButtonElement = document.querySelector(
        ".c__select__inner__actions__open",
      )!;
      expect(button).toBeDisabled();

      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "Cities",
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

    it("renders menu empty placeholder when there is no more options to display", async () => {
      render(
        <CunninghamProvider>
          <Select
            label="Cities"
            options={[
              {
                label: "Paris",
                value: "paris",
              },
              {
                label: "London",
                value: "london",
              },
            ]}
            multi={true}
          />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "Cities",
      });

      // Expect no options to be selected.
      expectSelectedOptions([]);

      const user = userEvent.setup();
      await user.click(input);

      await user.click(
        screen.getByRole("option", {
          name: "Paris",
        }),
      );
      expectSelectedOptions(["Paris"]);

      expect(
        screen.queryByText("No options available"),
      ).not.toBeInTheDocument();

      await user.click(
        screen.getByRole("option", {
          name: "London",
        }),
      );
      expectSelectedOptions(["Paris", "London"]);

      screen.getByText("No options available");
    });

    it("blurs from ref", async () => {
      const ref = createRef<SelectHandle>();
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
            ]}
            multi={true}
            searchable={true}
            ref={ref}
          />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const user = userEvent.setup();

      // Make sure the select is not focused.
      expect(document.activeElement?.tagName).toEqual("BODY");

      // Focus the select by focusing input.
      await user.click(input);
      expectMenuToBeOpen(menu);
      expect(document.activeElement?.tagName).toEqual("INPUT");

      // Blur the select.
      ref.current?.blur();

      // Make sure the select is blured.
      await waitFor(() => expectMenuToBeClosed(menu));
      expect(document.activeElement?.tagName).toEqual("BODY");
    });
  });
});

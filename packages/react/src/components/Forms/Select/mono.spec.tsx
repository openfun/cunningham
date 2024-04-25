import userEvent from "@testing-library/user-event";
import { act, render, screen, waitFor } from "@testing-library/react";
import { expect, vi } from "vitest";
import React, { createRef, FormEvent, useState } from "react";
import { within } from "@testing-library/dom";
import {
  Select,
  Option,
  SelectHandle,
  SelectProps,
  CallbackFetchOptions,
  ContextCallbackFetchOptions,
} from ":/components/Forms/Select/index";
import { Button } from ":/components/Button";
import { CunninghamProvider } from ":/components/Provider";
import {
  expectMenuToBeClosed,
  expectMenuToBeOpen,
  expectNoOptions,
  expectOptions,
  expectOptionToBeDisabled,
  expectOptionToBeSelected,
  expectOptionToBeUnselected,
} from ":/components/Forms/Select/test-utils";
import { Input } from ":/components/Forms/Input";

describe("<Select/>", () => {
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
        </CunninghamProvider>,
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
        </CunninghamProvider>,
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

      await user.type(input, "r", { skipClick: true });
      expectOptions(["Paris"]);

      // Select option.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "Paris",
      });
      await user.click(option);

      expect(input).toHaveValue("Paris");
    });
    it("clears the text input if no item is selected", async () => {
      const Wrapper = () => {
        const [value, setValue] = useState<string | number | undefined>();
        return (
          <CunninghamProvider>
            <div>Value = {value}|</div>
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
              value={value}
              onChange={(e) => setValue(e.target.value as any)}
            />
            <Input name="Something else" />
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);

      const user = userEvent.setup();
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      screen.getByText("Value = |");
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

      await user.type(input, "rr", { skipClick: true });
      expectNoOptions();

      expect(input).toHaveValue("Parr");

      // This is a way to blur the combobox.
      await user.click(screen.getByRole("textbox"));

      expect(input).toHaveValue("");
      screen.getByText("Value = |");
    });
    it("clears the added text to the existing value input on blur if no other item is selected", async () => {
      const Wrapper = () => {
        const [value, setValue] = useState<string | number | undefined>(
          "london",
        );
        return (
          <CunninghamProvider>
            <div>Value = {value}|</div>
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
              value={value}
              onChange={(e) => setValue(e.target.value as any)}
            />
            <Input name="Something else" />
          </CunninghamProvider>
        );
      };
      render(<Wrapper />);

      const user = userEvent.setup();
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      screen.getByText("Value = london|");
      // It returns the input.
      expect(input.tagName).toEqual("INPUT");

      expect(input).toHaveValue("London");
      await user.type(input, "rr");
      expect(input).toHaveValue("Londonrr");

      // This is a way to blur the combobox.
      await user.click(screen.getByRole("textbox"));

      expect(input).toHaveValue("London");
      screen.getByText("Value = london|");
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
        </CunninghamProvider>,
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
        </CunninghamProvider>,
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
        </CunninghamProvider>,
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
        </CunninghamProvider>,
      );

      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveValue("");
    });
    it("works controlled", async () => {
      const Wrapper = () => {
        const [value, setValue] = useState<string | number | undefined>(
          "london",
        );
        const [onChangeCounts, setOnChangeCounts] = useState(0);
        return (
          <CunninghamProvider>
            <div>
              <div>Value = {value}|</div>
              <div>onChangeCounts = {onChangeCounts}|</div>
              <Button onClick={() => setValue(undefined)}>Clear</Button>
              <Button onClick={() => setValue("paris")}>Set Paris</Button>
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
                onChange={(e) => {
                  setValue(e.target.value as string);
                  setOnChangeCounts(onChangeCounts + 1);
                }}
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
      screen.getByText("onChangeCounts = 0|");

      // Change value.
      const user = userEvent.setup();
      await user.click(input);

      // Make sure the option is selected.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "London",
      });
      expectOptionToBeSelected(option);

      // List should display all available options when re-opening.
      expectOptions(["Paris", "London", "New York", "Tokyo"]);

      // Clear value.
      const button = screen.getByRole("button", {
        name: "Clear",
      });
      await user.click(button);
      screen.getByText("Value = |");
      await screen.findByText("onChangeCounts = 0|");

      // Select an option.
      await user.click(input);
      await user.click(
        screen.getByRole("option", {
          name: "New York",
        }),
      );

      // Make sure value is selected.
      screen.getByText("Value = new_york|");
      screen.getByText("onChangeCounts = 1|");

      // clear value.
      await user.click(button);

      // Make sure value is cleared.
      screen.getByText("Value = |");

      // Make sure setting value works
      const buttonParis = screen.getByRole("button", {
        name: "Set Paris",
      });
      await user.click(buttonParis);

      screen.getByText("Value = paris|");
      expect(input).toHaveValue("Paris");
      screen.getByText("onChangeCounts = 1|");
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
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveAttribute("disabled");

      const button: HTMLButtonElement = document.querySelector(
        ".c__select__inner__actions__open",
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
        }),
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

    [
      {
        defaultValue: "panama",
        type: "default value",
        expected: "Panama",
      },
      {
        value: "panama",
        type: "value",
        expected: "Panama",
      },
      {
        type: "without values props",
        expected: "",
      },
    ].forEach(({ type, expected, ...props }) => {
      it(`render mutated option when select open and keep the filter activated with ${type}`, async () => {
        const myOptions = [
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
        ];

        const Wrapper = ({ options }: { options: Option[] }) => {
          return (
            <Select
              label="City"
              name="city"
              options={options}
              searchable={true}
              {...props}
            />
          );
        };

        const { rerender } = render(<Wrapper options={myOptions} />, {
          wrapper: CunninghamProvider,
        });

        const user = userEvent.setup();
        const input = screen.getByRole("combobox", {
          name: "City",
        });
        const menu: HTMLDivElement = screen.getByRole("listbox", {
          name: "City",
        });

        // Check init value (defaultValue / value / nothing)
        expect(input).toHaveValue(expected);

        // Add filter
        await user.clear(input);
        await user.type(input, "Pa");

        expectMenuToBeOpen(menu);

        expectOptions(["Paris", "Panama"]);

        myOptions.shift();

        // Rerender the select with the options mutated
        rerender(<Wrapper options={[...myOptions]} />);

        expectMenuToBeOpen(menu);

        // Options is refreshed
        expectOptions(["Panama"]);

        // Filter is still active
        expect(input).toHaveValue("Pa");

        myOptions.shift();

        // Rerender the select with the options mutated (only london left)
        rerender(<Wrapper options={[...myOptions]} />);

        // Filter is still active
        expect(input).toHaveValue("Pa");

        expect(screen.getByText("No options available")).toBeInTheDocument();

        await user.clear(input);

        expectOptions(["London"]);

        await user.click(
          screen.getByRole("option", {
            name: "London",
          }),
        );

        expect(input).toHaveValue("London");
      });
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
      await act(async () => {
        ref.current?.blur();
      });

      // Make sure the select is blured.
      await waitFor(() => expectMenuToBeClosed(menu));
      expect(document.activeElement?.tagName).toEqual("BODY");
    });

    it("renders custom options", async () => {
      const Wrapper = (props: SelectProps) => {
        return (
          <CunninghamProvider>
            <Select {...props} />
            <Button>Blur</Button>
          </CunninghamProvider>
        );
      };

      const props: SelectProps = {
        label: "City",
        searchable: true,
        options: [
          {
            label: "Paris",
            value: "paris",
            render: () => (
              <div>
                <img src="paris.png" alt="Paris flag" />
                Paris
              </div>
            ),
          },
          {
            label: "Panama",
            value: "panama",
            render: () => (
              <div>
                <img src="panama.png" alt="Panama flag" />
                Panama
              </div>
            ),
          },
          {
            label: "London",
            value: "london",
            render: () => (
              <div>
                <img src="london.png" alt="London flag" />
                London
              </div>
            ),
          },
        ],
      };

      const { rerender } = render(<Wrapper {...props} />);
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const blurButton = screen.getByRole("button", { name: "Blur" });
      const user = userEvent.setup();
      const valueRendered = document.querySelector(
        ".c__select__inner__value",
      ) as HTMLElement;

      await user.click(input);
      expectMenuToBeOpen(menu);
      screen.getByRole("img", { name: "Paris flag" });
      screen.getByRole("img", { name: "Panama flag" });
      screen.getByRole("img", { name: "London flag" });

      await user.type(input, "Pa");
      screen.getByRole("img", { name: "Paris flag" });
      screen.getByRole("img", { name: "Panama flag" });
      expect(
        screen.queryByRole("img", { name: "London flag" }),
      ).not.toBeInTheDocument();

      await user.click(
        screen.getByRole("option", { name: "Paris flag Paris" }),
      );
      await user.click(blurButton);

      // Make sure only the label is rendered by default.
      expect(input).toHaveValue("Paris");
      expect(input).not.toHaveClass("c__select__inner__value__input--hidden");
      expect(
        within(valueRendered).queryByRole("img", {
          name: "Paris flag",
        }),
      ).not.toBeInTheDocument();

      // Now showLabelWhenSelected to false.
      rerender(<Wrapper {...props} showLabelWhenSelected={false} />);

      // Make sure the HTML content of the option is rendered.
      // The input is still present in the DOM ( but hidden for users ).
      expect(input).toHaveValue("Paris");
      expect(input).toHaveClass("c__select__inner__value__input--hidden");
      within(valueRendered).getByRole("img", {
        name: "Paris flag",
      });

      // Focus on the input and make sure the custom HTML is removed.
      await user.click(input);
      expect(input).toHaveValue("Paris");
      expect(input).not.toHaveClass("c__select__inner__value__input--hidden");
      expect(
        within(valueRendered).queryByRole("img", {
          name: "Paris flag",
        }),
      ).not.toBeInTheDocument();

      // Blur the input and make sure the custom HTML is rendered.
      await user.click(blurButton);
      expect(input).toHaveValue("Paris");
      expect(input).toHaveClass("c__select__inner__value__input--hidden");
      within(valueRendered).getByRole("img", {
        name: "Paris flag",
      });
    });

    it("get the search term using onSearchInputChange", async () => {
      const user = userEvent.setup();
      let searchTerm: string | undefined;
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
            onSearchInputChange={(e) => {
              searchTerm = e.target.value;
            }}
          />
        </CunninghamProvider>,
      );

      const input = screen.getByRole("combobox", {
        name: "City",
      });

      await user.click(input);
      expect(searchTerm).toBeUndefined();

      await user.type(input, "Pa");
      expect(searchTerm).toEqual("Pa");

      await user.type(input, "r", { skipClick: true });
      expect(searchTerm).toEqual("Par");

      // Select option.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "Paris",
      });
      await user.click(option);
      expect(searchTerm).toBeUndefined();
    });

    it("gets the search term using onSearchInputChange through an async function provided as the options prop", async () => {
      type Spy = {
        asyncOptions: CallbackFetchOptions;
      };

      const spy: Spy = {
        asyncOptions: async (context) =>
          new Promise((resolve) => {
            const arrayCities = [
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
            ];

            // simulate a delayed response
            setTimeout(() => {
              const stringSearch = context?.search
                ? String(context.search)
                : "";

              const filterOptions = (arrayOptions: Option[], search: string) =>
                arrayOptions.filter((option) =>
                  option.label
                    .toLocaleLowerCase()
                    .includes(search.toLowerCase()),
                );

              const arrayOptions: Option[] = stringSearch
                ? filterOptions(arrayCities, stringSearch)
                : arrayCities;

              resolve(arrayOptions);
            }, 1);
          }),
      };
      const spiedAsyncOptions = vi.spyOn(spy, "asyncOptions");

      expect(spiedAsyncOptions).toHaveBeenCalledTimes(0);

      const user = userEvent.setup();
      render(
        <CunninghamProvider>
          <Select label="City" options={spy.asyncOptions} searchable={true} />
        </CunninghamProvider>,
      );

      expect(spiedAsyncOptions).toHaveBeenCalledTimes(1);

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

      expect(spiedAsyncOptions).toHaveBeenCalledTimes(3);
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama"]);

      await user.type(input, "r", { skipClick: true });
      expect(spiedAsyncOptions).toHaveBeenCalledTimes(4);
      expectOptions(["Paris"]);

      // Select option.
      const option: HTMLLIElement = screen.getByRole("option", {
        name: "Paris",
      });
      await user.click(option);

      expect(input).toHaveValue("Paris");
      expect(spiedAsyncOptions).toHaveBeenCalledTimes(5);
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
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const label = screen.getByText("City")!.parentElement!;
      const valueRendered = document.querySelector(".c__select__inner__value");

      // Make sure no value is rendered.
      expect(valueRendered).toHaveTextContent("");
      expectMenuToBeClosed(menu);
      expect(
        screen.queryByRole("option", { name: "Paris" }),
      ).not.toBeInTheDocument();

      // Make sure the label is set as placeholder.
      expect(Array.from(label.classList)).toContain("placeholder");

      await user.click(input);

      // Make sure the menu is opened and options are rendered.
      expectMenuToBeOpen(menu);
      expect(
        screen.queryByRole("option", { name: "Paris" }),
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
        </CunninghamProvider>,
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
        </CunninghamProvider>,
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
          "london",
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
                onChange={(e) => setValue(e.target.value as string)}
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
        }),
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
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      expect(input).toHaveAttribute("disabled");

      const button: HTMLButtonElement = document.querySelector(
        ".c__select__inner__actions__open",
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
        </CunninghamProvider>,
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
        }),
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

    it("should not be clearable", async () => {
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
            clearable={false}
            defaultValue="Paris"
          />
        </CunninghamProvider>,
      );
      screen.getByRole("combobox", {
        name: "City",
      });
      const valueRendered = document.querySelector(".c__select__inner__value");

      // Make sure default value is rendered.
      expect(valueRendered).toHaveTextContent("Paris");
      // Make sure the clear button is not rendered.
      expect(
        screen.queryByRole("button", {
          name: "Clear selection",
        }),
      ).not.toBeInTheDocument();
    });
    it("is not possible to select disabled options", async () => {
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
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const valueRendered = document.querySelector(".c__select__inner__value");

      // Make sure the select is empty.
      expect(valueRendered).toHaveTextContent("");

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
      expect(valueRendered).toHaveTextContent("");

      // Select a not disabled option.
      option = screen.getByRole("option", {
        name: "Tokyo",
      });

      await user.click(option);
      expectMenuToBeClosed(menu);
      expect(valueRendered).toHaveTextContent("Tokyo");
    });

    it("is accessible if the the label is not shown", async () => {
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
                disabled: true,
              },
              {
                label: "Tokyo",
              },
            ]}
            hideLabel={true}
          />
        </CunninghamProvider>,
      );
      // Make sure the input is accessible.
      screen.getByRole("combobox", {
        name: "City",
      });
      const label = screen.getByText("City")!.parentElement!;
      expect(Array.from(label.classList)).toContain("c__offscreen");
    });

    it("renders menu empty placeholder when there are no options to display", async () => {
      render(
        <CunninghamProvider>
          <Select label="City" options={[]} hideLabel={true} />
        </CunninghamProvider>,
      );
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const user = userEvent.setup();
      await user.click(input);
      screen.getByText("No options available");
    });

    it("updates the value if the value is removed from the options (uncontrolled)", async () => {
      let myOptions = [
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
      ];

      const Wrapper = ({ options }: { options: Option[] }) => {
        return <Select label="City" name="city" options={options} />;
      };

      const { rerender } = render(<Wrapper options={myOptions} />, {
        wrapper: CunninghamProvider,
      });

      const user = userEvent.setup();
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const valueRendered = document.querySelector(".c__select__inner__value");
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });

      // Check init value (defaultValue / value / nothing)
      expect(valueRendered).toHaveTextContent("");

      await user.click(input);
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama", "London"]);

      // Select London.
      await user.click(screen.getByRole("option", { name: "London" }));
      expect(valueRendered).toHaveTextContent("London");

      // Remove London from the options.
      myOptions = myOptions.filter((option) => option.value !== "london");
      // Rerender the select with the options mutated
      rerender(<Wrapper options={[...myOptions]} />);

      await user.click(input);
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama"]);
      expect(valueRendered).toHaveTextContent("");
    });

    it("still shows the selected current choice even if the options are different objects", async () => {
      const Wrapper = () => {
        const [value, setValue] = useState<string | number | undefined>();
        const [count, setCount] = useState(0);
        return (
          <CunninghamProvider>
            <div>
              <div>Value = {value}|</div>
              <Button onClick={() => setCount(count + 1)}>Rerender</Button>
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
                value={value}
                onChange={(e) => {
                  setValue(e.target.value as string);
                }}
              />
            </div>
          </CunninghamProvider>
        );
      };

      render(<Wrapper />, {
        wrapper: CunninghamProvider,
      });

      const user = userEvent.setup();
      const input = screen.getByRole("combobox", {
        name: "City",
      });

      // Select an option
      await user.click(input);
      await user.click(
        screen.getByRole("option", {
          name: "Panama",
        }),
      );

      // Verify that the value is selected.
      await user.click(input);
      expectOptionToBeSelected(screen.getByRole("option", { name: "Panama" }));

      // Rerender the select with the options mutated.
      await user.click(screen.getByRole("button", { name: "Rerender" }));

      // Verify that the value is still selected.
      await user.click(input);
      expectOptionToBeSelected(screen.getByRole("option", { name: "Panama" }));
    });

    it("updates the value if the value is removed from the options (controlled)", async () => {
      let myOptions = [
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
      ];

      const Wrapper = ({ options }: { options: Option[] }) => {
        const [value, setValue] = useState<string | number | undefined>();
        const [onChangeCounts, setOnChangeCounts] = useState(0);
        return (
          <CunninghamProvider>
            <div>
              <div>Value = {value}|</div>
              <div>onChangeCounts = {onChangeCounts}|</div>
              <Select
                label="City"
                options={options}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value as string);
                  setOnChangeCounts(onChangeCounts + 1);
                }}
              />
            </div>
          </CunninghamProvider>
        );
      };

      const { rerender } = render(<Wrapper options={myOptions} />, {
        wrapper: CunninghamProvider,
      });

      const user = userEvent.setup();
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const valueRendered = document.querySelector(".c__select__inner__value");
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });

      // Check init value (defaultValue / value / nothing)
      expect(valueRendered).toHaveTextContent("");
      screen.getByText("Value = |");
      screen.getByText("onChangeCounts = 0|");

      await user.click(input);
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama", "London"]);

      // Select London.
      await user.click(screen.getByRole("option", { name: "London" }));
      screen.getByText("Value = london|");
      screen.getByText("onChangeCounts = 1|");
      expect(valueRendered).toHaveTextContent("London");

      // Remove London from the options.
      myOptions = myOptions.filter((option) => option.value !== "london");
      // Rerender the select with the options mutated
      rerender(<Wrapper options={[...myOptions]} />);

      await user.click(input);
      expectMenuToBeOpen(menu);
      expectOptions(["Paris", "Panama"]);
      expect(valueRendered).toHaveTextContent("");
      screen.getByText("Value = |");
      screen.getByText("onChangeCounts = 2|");
    });

    it("updates the selected value label if the option label changes", async () => {
      const myOptions = [
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
      ];

      const Wrapper = ({ options }: { options: Option[] }) => {
        const [value, setValue] = useState<string | number | undefined>(
          "paris",
        );
        const [onChangeCounts, setOnChangeCounts] = useState(0);
        return (
          <CunninghamProvider>
            <div>
              <div>Value = {value}|</div>
              <div>onChangeCounts = {onChangeCounts}|</div>
              <Select
                label="City"
                options={options}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value as string);
                  setOnChangeCounts(onChangeCounts + 1);
                }}
              />
            </div>
          </CunninghamProvider>
        );
      };

      const { rerender } = render(<Wrapper options={myOptions} />, {
        wrapper: CunninghamProvider,
      });

      const valueRendered = document.querySelector(".c__select__inner__value");
      expect(valueRendered).toHaveTextContent("Paris");
      screen.getByText("Value = paris|");
      screen.getByText("onChangeCounts = 0|");

      rerender(
        <Wrapper
          options={[
            {
              label: "Paname",
              value: "paris",
            },
            ...myOptions.slice(1),
          ]}
        />,
      );

      expect(valueRendered).toHaveTextContent("Paname");
      screen.getByText("Value = paris|");
      screen.getByText("onChangeCounts = 0|");
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
      expect(document.activeElement?.className).toContain("c__select__wrapper");

      // Blur the select.
      await act(async () => {
        ref.current?.blur();
      });

      // Make sure the select is blured.
      await waitFor(() => expectMenuToBeClosed(menu));
      expect(document.activeElement?.className).toEqual("");
    });

    it("renders custom options", async () => {
      const Wrapper = (props: SelectProps) => {
        return (
          <CunninghamProvider>
            <Select {...props} />
          </CunninghamProvider>
        );
      };

      const props: SelectProps = {
        label: "City",
        options: [
          {
            label: "Paris",
            value: "paris",
            render: () => (
              <div>
                <img src="paris.png" alt="Paris flag" />
                Paris
              </div>
            ),
          },
          {
            label: "Panama",
            value: "panama",
            render: () => (
              <div>
                <img src="panama.png" alt="Panama flag" />
                Panama
              </div>
            ),
          },
          {
            label: "London",
            value: "london",
            render: () => (
              <div>
                <img src="london.png" alt="London flag" />
                London
              </div>
            ),
          },
        ],
      };

      const { rerender } = render(<Wrapper {...props} />);
      const input = screen.getByRole("combobox", {
        name: "City",
      });
      const menu: HTMLDivElement = screen.getByRole("listbox", {
        name: "City",
      });
      const user = userEvent.setup();
      const valueRendered = document.querySelector(
        ".c__select__inner__value",
      ) as HTMLElement;

      await user.click(input);
      expectMenuToBeOpen(menu);

      screen.getByRole("img", { name: "Paris flag" });
      screen.getByRole("img", { name: "Panama flag" });
      screen.getByRole("img", { name: "London flag" });

      await user.click(
        screen.getByRole("option", { name: "London flag London" }),
      );

      // Make sure only the label is rendered by default.
      expect(valueRendered).toHaveTextContent("London");
      expect(
        within(valueRendered).queryByRole("img", {
          name: "London flag",
        }),
      ).not.toBeInTheDocument();

      // Now showLabelWhenSelected to false.
      rerender(<Wrapper {...props} showLabelWhenSelected={false} />);

      // Make sure the HTML content of the option is rendered.
      expect(valueRendered).toHaveTextContent("London");
      within(valueRendered).getByRole("img", {
        name: "London flag",
      });
    });
  });

  it("renders with className", async () => {
    render(
      <CunninghamProvider>
        <Select
          label="City"
          options={[
            {
              label: "Paris",
            },
          ]}
          className="my-custom-class"
        />
      </CunninghamProvider>,
    );
    expect(
      document.querySelector(".c__field.my-custom-class"),
    ).toBeInTheDocument();
  });
});

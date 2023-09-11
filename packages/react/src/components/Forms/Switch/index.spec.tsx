import { render, screen } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { FieldProps } from "../Field";
import { Switch, SwitchOnlyProps } from ":/components/Forms/Switch/index";

const spyError = vi.spyOn(global.console, "error");

describe("<Switch/>", () => {
  afterAll(() => {
    spyError.mockRestore();
  });

  it("renders and can be checked", async () => {
    const user = userEvent.setup();
    render(<Switch label="Newsletter" />);
    const input: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Newsletter",
    });
    expect(input.checked).toEqual(false);
    await user.click(input);
    expect(input.checked).toEqual(true);
  });

  it("renders with default value and can be unchecked", async () => {
    const user = userEvent.setup();
    render(<Switch label="Newsletter" defaultChecked={true} />);
    const input: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Newsletter",
    });
    expect(input.checked).toEqual(true);
    await user.click(input);
    expect(input.checked).toEqual(false);
  });

  it("renders disabled", async () => {
    render(<Switch label="Newsletter" disabled={true} />);
    expect(screen.getByRole("checkbox", { name: "Newsletter" })).toBeDisabled();
    // Click and expect the checkbox does not get checked
    const user = userEvent.setup();
    const input: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Newsletter",
    });
    expect(input.checked).toEqual(false);
    await user.click(input);
    expect(input.checked).toEqual(false);
  });

  it("renders with text", async () => {
    render(<Switch label="Newsletter" text="Text" />);
    screen.getByText("Text");
  });

  it("renders with state=success", async () => {
    render(<Switch label="Newsletter" state="success" text="Success text" />);
    screen.getByText("Success text");
    expect(
      document.querySelector(".c__field.c__field--success"),
    ).toBeInTheDocument();
  });

  it("renders with state=error", async () => {
    render(<Switch label="Newsletter" state="error" text="Error text" />);
    screen.getByText("Error text");
    expect(
      document.querySelector(".c__field.c__field--error"),
    ).toBeInTheDocument();
  });

  it("renders multiple", async () => {
    // make sure switching one does not switch the others.
    const user = userEvent.setup();
    render(
      <div>
        <Switch label="Newsletter" />
        <Switch label="Notifications" />
        <Switch label="Phone" />
      </div>,
    );
    // expect all checkboxes to be unchecked
    const newsletter: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Newsletter",
    });
    const notifications: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Notifications",
    });
    const phone: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Phone",
    });
    expect(newsletter.checked).toEqual(false);
    expect(notifications.checked).toEqual(false);
    expect(phone.checked).toEqual(false);

    // Turn on only one checkbox.
    await user.click(newsletter);
    expect(newsletter.checked).toEqual(true);
    expect(notifications.checked).toEqual(false);
    expect(phone.checked).toEqual(false);

    // Turn off only one checkbox.
    await user.click(newsletter);
    expect(newsletter.checked).toEqual(false);
    expect(notifications.checked).toEqual(false);
    expect(phone.checked).toEqual(false);
  });

  it("renders with label right", async () => {
    render(<Switch label="Newsletter" labelSide="right" />);
    const input: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Newsletter",
    });
    expect(input.closest(".c__switch")).toHaveClass("c__switch--right");
  });

  it("renders controlled", async () => {
    const Wrapper = () => {
      const [checked, setChecked] = React.useState(false);
      return (
        <div>
          <div>Value: {JSON.stringify(checked)}.</div>
          <Switch
            label="Newsletter"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </div>
      );
    };
    render(<Wrapper />);
    const input: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Newsletter",
    });
    expect(input.checked).toEqual(false);
    screen.queryByText("Value: false.");
    await userEvent.click(input);
    expect(input.checked).toEqual(true);
    screen.queryByText("Value: true.");
    await userEvent.click(input);
    expect(input.checked).toEqual(false);
    screen.queryByText("Value: false.");
  });

  it("checks the props doesn't create error warning", async () => {
    const propsInput: Required<FieldProps & SwitchOnlyProps> = {
      label: "First name",
      fullWidth: true,
      className: "c__field--full-width",
      compact: false,
      state: "default",
      text: "my text",
      textItems: ["my text item 1", "my text item 2"],
      rightText: "my right text",
      labelSide: "right",
    };

    render(<Switch {...propsInput} />);
    expect(spyError).not.toHaveBeenCalled();
  });
});

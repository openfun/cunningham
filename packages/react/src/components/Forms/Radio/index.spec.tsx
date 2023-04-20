import userEvent from "@testing-library/user-event";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Radio, RadioGroup } from "components/Forms/Radio/index";

describe("<Radio/>", () => {
  it("should render", async () => {
    render(<Radio label="Yes" />);
    expect(screen.getByLabelText("Yes")).toBeInTheDocument();
  });
  it("should render checked", async () => {
    render(<Radio label="Yes" defaultChecked={true} />);
    const input: HTMLInputElement = screen.getByRole("radio", {
      name: "Yes",
    });
    expect(input.checked).toEqual(true);
  });
  it("should render disabled", async () => {
    render(<Radio label="Yes" disabled={true} />);
    expect(screen.getByRole("radio", { name: "Yes" })).toBeDisabled();
    // Click and expect the radio does not get checked
    const user = userEvent.setup();
    const input: HTMLInputElement = screen.getByRole("radio", {
      name: "Yes",
    });
    expect(input.checked).toEqual(false);
    await user.click(input);
    expect(input.checked).toEqual(false);
  });
  it("should render with text", async () => {
    render(<Radio label="Yes" text="Text" />);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
  it("should render with state=success", async () => {
    render(<Radio label="Yes" state="success" text="Success text" />);
    expect(screen.getByText("Success text")).toBeInTheDocument();
    expect(
      document.querySelector(".c__field.c__field--success")
    ).toBeInTheDocument();
  });
  it("should render with state=error", async () => {
    render(<Radio label="Yes" state="error" text="Error text" />);
    expect(screen.getByText("Error text")).toBeInTheDocument();
    expect(
      document.querySelector(".c__field.c__field--error")
    ).toBeInTheDocument();
  });
  it("should render with group", async () => {
    render(
      <RadioGroup>
        <Radio label="Yes" />
        <Radio label="No" />
      </RadioGroup>
    );
    screen.getByRole("radio", {
      name: "Yes",
    });
    screen.getByRole("radio", {
      name: "No",
    });
  });
  it("should render with group and checking one radio should unchecked all others", async () => {
    render(
      <RadioGroup>
        <Radio name="agree" label="Yes" />
        <Radio name="agree" label="No" />
      </RadioGroup>
    );
    const user = userEvent.setup();
    const yesInput: HTMLInputElement = screen.getByLabelText("Yes");
    const noInput: HTMLInputElement = screen.getByLabelText("No");
    expect(yesInput.checked).toEqual(false);
    expect(noInput.checked).toEqual(false);
    await user.click(yesInput);
    expect(yesInput.checked).toEqual(true);
    expect(noInput.checked).toEqual(false);
    await user.click(noInput);
    expect(yesInput.checked).toEqual(false);
    expect(noInput.checked).toEqual(true);
  });
  it("should render with group text", async () => {
    render(
      <RadioGroup text="Text">
        <Radio label="Yes" />
        <Radio label="No" />
      </RadioGroup>
    );
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
  it("should render with group state=success", async () => {
    render(
      <RadioGroup state="success" text="Success text">
        <Radio label="Yes" />
        <Radio label="No" />
      </RadioGroup>
    );
    expect(screen.getByText("Success text")).toBeInTheDocument();
    expect(
      document.querySelector(".c__radio__group.c__field.c__field--success")
    ).toBeInTheDocument();
  });
  it("should render with group state=error", async () => {
    render(
      <RadioGroup state="error" text="Error text">
        <Radio label="Yes" />
        <Radio label="No" />
      </RadioGroup>
    );
    expect(screen.getByText("Error text")).toBeInTheDocument();
    expect(
      document.querySelector(".c__radio__group.c__field.c__field--error")
    ).toBeInTheDocument();
  });
});

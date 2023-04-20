import userEvent from "@testing-library/user-event";
import React from "react";
import { render, screen } from "@testing-library/react";
import { Checkbox, CheckboxGroup } from "components/Forms/Checkbox/index";

describe("<Checkbox/>", () => {
  it("renders and can be checked", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Agree" />);
    const input: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Agree",
    });
    expect(input.checked).toEqual(false);
    await user.click(input);
    expect(input.checked).toEqual(true);
  });
  it("renders with default value and can be unchecked", async () => {
    const user = userEvent.setup();
    render(<Checkbox label="Agree" checked={true} />);
    const input: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Agree",
    });
    expect(input.checked).toEqual(true);
    await user.click(input);
    expect(input.checked).toEqual(false);
  });
  it("renders with indeterminate state", async () => {
    render(<Checkbox label="Agree" indeterminate={true} />);
    expect(document.querySelector("svg.indeterminate")).toBeInTheDocument();
  });
  it("renders disabled", async () => {
    render(<Checkbox label="Agree" disabled={true} />);
    expect(screen.getByRole("checkbox", { name: "Agree" })).toBeDisabled();
    // Click and expect the checkbox does not get checked
    const user = userEvent.setup();
    const input: HTMLInputElement = screen.getByRole("checkbox", {
      name: "Agree",
    });
    expect(input.checked).toEqual(false);
    await user.click(input);
    expect(input.checked).toEqual(false);
  });
  it("renders with text", async () => {
    render(<Checkbox label="Agree" text="Text" />);
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
  it("renders with state=success", async () => {
    render(<Checkbox label="Agree" state="success" text="Success text" />);
    expect(screen.getByText("Success text")).toBeInTheDocument();
    expect(
      document.querySelector(".c__field.c__field--success")
    ).toBeInTheDocument();
  });
  it("renders with state=error", async () => {
    render(<Checkbox label="Agree" state="error" text="Error text" />);
    expect(screen.getByText("Error text")).toBeInTheDocument();
    expect(
      document.querySelector(".c__field.c__field--error")
    ).toBeInTheDocument();
  });

  it("renders with group", async () => {
    render(
      <CheckboxGroup>
        <Checkbox label="Agree" />
        <Checkbox label="Disagree" />
      </CheckboxGroup>
    );
    screen.getByRole("checkbox", {
      name: "Agree",
    });
    screen.getByRole("checkbox", {
      name: "Disagree",
    });
  });
  it("renders with group text", async () => {
    render(
      <CheckboxGroup text="Text">
        <Checkbox label="Agree" />
        <Checkbox label="Disagree" />
      </CheckboxGroup>
    );
    expect(screen.getByText("Text")).toBeInTheDocument();
  });
  it("renders with group state=success", async () => {
    render(
      <CheckboxGroup state="success" text="Success text">
        <Checkbox label="Agree" />
        <Checkbox label="Disagree" />
      </CheckboxGroup>
    );
    expect(screen.getByText("Success text")).toBeInTheDocument();
    expect(
      document.querySelector(".c__checkbox__group.c__field.c__field--success")
    ).toBeInTheDocument();
  });
  it("renders with group state=error", async () => {
    render(
      <CheckboxGroup state="error" text="Error text">
        <Checkbox label="Agree" />
        <Checkbox label="Disagree" />
      </CheckboxGroup>
    );
    expect(screen.getByText("Error text")).toBeInTheDocument();
    expect(
      document.querySelector(".c__checkbox__group.c__field.c__field--error")
    ).toBeInTheDocument();
  });
});

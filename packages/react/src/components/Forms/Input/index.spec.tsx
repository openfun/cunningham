import { render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import { Input, InputRefType } from ":/components/Forms/Input/index";
import { Button } from ":/components/Button";

describe("<Input/>", () => {
  it("renders and can type", async () => {
    const user = userEvent.setup();
    render(<Input label="First name" />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "First name",
    });
    expect(input.value).toEqual("");
    await user.type(input, "John");
    expect(input.value).toEqual("John");
  });
  it("renders with default value and can type", async () => {
    const user = userEvent.setup();
    render(<Input label="First name" defaultValue="John" />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "First name",
    });

    expect(input.value).toEqual("John");
    await user.clear(input);
    expect(input.value).toEqual("");
    await user.type(input, "Paul");
    expect(input.value).toEqual("Paul");
  });
  it("renders with moving label", async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Input label="First name" />
        <Input label="Second name" />
      </div>
    );

    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "First name",
    });
    const input2: HTMLInputElement = screen.getByRole("textbox", {
      name: "Second name",
    });
    const label = screen.getByText("First name");
    expect(Array.from(label.classList)).toContain("placeholder");

    // Clicking on the input should remove the placeholder class.
    await user.click(input);

    expect(Array.from(label.classList)).not.toContain("placeholder");

    // Writing something should remove the placeholder class too.
    await user.type(input, "John");

    expect(Array.from(label.classList)).not.toContain("placeholder");

    // Clearing the input and focus out should add the placeholder class
    await user.clear(input);
    await user.click(input2);

    expect(Array.from(label.classList)).toContain("placeholder");
  });
  it("renders with state=success", async () => {
    render(<Input label="First name" state="success" />);
    expect(document.querySelector(".c__field--success")).toBeInTheDocument();
    expect(
      document.querySelector(".c__input__wrapper--success")
    ).toBeInTheDocument();
  });
  it("renders with state=error", async () => {
    render(<Input label="First name" state="error" />);
    expect(document.querySelector(".c__field--error")).toBeInTheDocument();
    expect(
      document.querySelector(".c__input__wrapper--error")
    ).toBeInTheDocument();
  });
  it("renders disabled", async () => {
    const user = userEvent.setup();
    render(<Input label="First name" disabled={true} />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "First name",
    });
    expect(
      document.querySelector(".c__input__wrapper--disabled")
    ).toBeInTheDocument();
    expect(input.value).toEqual("");
    // Disabled inputs should not be able to type.
    await user.type(input, "John");
    expect(input.value).toEqual("");
  });
  it("renders with left icon", async () => {
    render(
      <Input
        label="First name"
        icon={<span className="material-icons">apartment</span>}
      />
    );
    expect(document.querySelector(".material-icons")).toBeInTheDocument();
  });
  it("renders with right icon", async () => {
    render(
      <Input
        label="First name"
        rightIcon={<span className="material-icons">apartment</span>}
      />
    );
    expect(document.querySelector(".material-icons")).toBeInTheDocument();
  });
  it("renders with text", async () => {
    render(
      <Input
        label="First name"
        rightIcon={<span className="material-icons">apartment</span>}
        text="Some text"
      />
    );
    screen.getByText("Some text");
  });
  it("renders with text and text right", async () => {
    render(
      <Input
        label="First name"
        rightIcon={<span className="material-icons">apartment</span>}
        rightText="Some text right"
      />
    );
    screen.getByText("Some text right");
  });
  it("renders with char counter", async () => {
    const user = userEvent.setup();
    render(<Input label="First name" charCounter={true} charCounterMax={15} />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "First name",
    });
    screen.getByText("0/15");
    await user.type(input, "Jo");
    screen.getByText("2/15");
    await user.type(input, "hn");
    screen.getByText("4/15");
    await user.clear(input);
    screen.getByText("0/15");
  });
  it("forwards ref", async () => {
    const user = userEvent.setup();
    const Wrapper = () => {
      const ref = useRef<InputRefType>(null);
      return (
        <div>
          <Input label="First name" ref={ref} />
          <Button onClick={() => ref.current?.input?.focus()}>Focus</Button>
        </div>
      );
    };
    render(<Wrapper />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "First name",
    });
    expect(input).not.toHaveFocus();
    await user.click(screen.getByRole("button", { name: "Focus" }));
    expect(input).toHaveFocus();
  });
  it("works controlled", async () => {
    const Wrapper = () => {
      const [value, setValue] = React.useState("I am controlled");
      return (
        <div>
          <div>Value: {value}.</div>
          <Input
            label="First name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={() => setValue("")}>Reset</Button>
        </div>
      );
    };
    const user = userEvent.setup();
    render(<Wrapper />);
    const input: HTMLInputElement = screen.getByRole("textbox", {
      name: "First name",
    });
    screen.getByText("Value: I am controlled.");
    await user.type(input, "John");
    screen.getByText("Value: I am controlledJohn.");
    await user.clear(input);
    screen.getByText("Value: .");
  });
});

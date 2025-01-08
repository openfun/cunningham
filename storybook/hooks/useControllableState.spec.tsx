import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useControllableState } from ":/hooks/useControllableState";
import { Button } from ":/components/Button";

describe("useControllableState", () => {
  const TestComponent = (props: {
    value?: string;
    setValue?: (value: string) => void;
  }) => {
    const [value, setValue] = useControllableState(
      "default",
      props.value,
      props.setValue,
    );

    return (
      <div>
        <div>Controllable value: {value}|</div>
        <Button onClick={() => setValue("custom value")}>Set value</Button>
      </div>
    );
  };

  it("works non controlled", async () => {
    render(<TestComponent />);

    screen.getByText("Controllable value: default|");

    // Change internal state.
    const $button = screen.getByRole("button", { name: "Set value" });
    await userEvent.click($button);
    screen.getByText("Controllable value: custom value|");
  });

  it("work controlled", async () => {
    const Wrapper = () => {
      const [value, setValue] = React.useState("controlled value");
      return (
        <>
          <TestComponent value={value} setValue={setValue} />
          <Button onClick={() => setValue("new controlled value")}>
            Set controlled value
          </Button>
          <div>Controlled value: {value}|</div>
        </>
      );
    };
    render(<Wrapper />);

    const user = userEvent.setup();

    // Default value is controlled.
    screen.getByText("Controllable value: controlled value|");
    screen.getByText("Controlled value: controlled value|");

    // Set value from parent.
    const $button = screen.getByRole("button", {
      name: "Set controlled value",
    });

    await user.click($button);
    screen.getByText("Controllable value: new controlled value|");
    screen.getByText("Controlled value: new controlled value|");

    // Set value from child.
    const $buttonNested = screen.getByRole("button", {
      name: "Set value",
    });
    await user.click($buttonNested);
    screen.getByText("Controllable value: custom value|");
    screen.getByText("Controlled value: custom value|");
  });
});

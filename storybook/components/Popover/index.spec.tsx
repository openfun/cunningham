import React, { useRef } from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Popover } from ".";

interface TestComponentProps {
  borderless?: boolean;
  onClickOutside?: () => void;
}
const TestComponent = ({
  borderless,
  onClickOutside = () => {},
}: TestComponentProps) => {
  const parentRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div>Other container</div>
      <div ref={parentRef}>Parent container</div>
      <Popover
        parentRef={parentRef}
        onClickOutside={onClickOutside}
        borderless={borderless}
      >
        Hello Popover
      </Popover>
    </div>
  );
};

describe("<Popover />", () => {
  it("checks the render", async () => {
    render(<TestComponent />);

    expect(screen.getByText("Parent container")).toBeInTheDocument();
    expect(screen.getByText("Hello Popover")).toBeInTheDocument();
    expect(screen.queryByRole("dialog")).not.toHaveClass(
      "c__popover--borderless",
    );
  });

  it("checks the borderless prop", async () => {
    render(<TestComponent borderless />);
    expect(screen.getByRole("dialog")).toHaveClass("c__popover--borderless");
  });

  it("checks onClickOutside prop", async () => {
    const mockOnClickOutside = vi.fn();
    render(<TestComponent onClickOutside={mockOnClickOutside} />);

    await userEvent.click(screen.getByText("Parent container"));
    expect(mockOnClickOutside).not.toHaveBeenCalled();

    await userEvent.click(screen.getByText("Other container"));
    expect(mockOnClickOutside).toHaveBeenCalledTimes(1);
  });

  it("checks popover position top with parent not as origin", async () => {
    // by default window.innerHeight === 768
    const ref = React.createRef<HTMLDivElement>() as any;
    ref.current = {
      offsetTop: 400,
      clientHeight: 100,
      getBoundingClientRect: () => ({
        top: 700,
      }),
    };

    render(<Popover onClickOutside={() => {}} parentRef={ref} />);

    waitFor(
      () => {
        expect(screen.getByRole("dialog")).toHaveStyle({
          top: "400px",
        });
      },
      { timeout: 1000 },
    );
  });

  it("checks popover position top with parent as origin", async () => {
    // by default window.innerHeight === 768
    const ref = React.createRef<HTMLDivElement>() as any;
    ref.current = {
      offsetTop: 400,
      clientHeight: 0,
      getBoundingClientRect: () => ({
        top: 800,
      }),
    };

    render(<Popover onClickOutside={() => {}} parentRef={ref} />);

    waitFor(
      () => {
        expect(screen.getByRole("dialog")).toHaveStyle({
          top: "0px",
        });
      },
      { timeout: 1000 },
    );
  });

  it("checks popover position bottom", async () => {
    // by default window.innerHeight === 768
    const ref = React.createRef<HTMLDivElement>() as any;
    ref.current = {
      offsetTop: 500,
      clientHeight: 100,
      getBoundingClientRect: () => ({
        top: 200,
      }),
    };

    render(<Popover onClickOutside={() => {}} parentRef={ref} />);

    expect(await screen.findByRole("dialog")).toHaveStyle({
      top: undefined,
    });
  });
});

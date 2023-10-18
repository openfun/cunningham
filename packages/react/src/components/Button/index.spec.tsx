import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import userEvent from "@testing-library/user-event";
import { buildTheme, loadTokens } from ":/tests/Theme";
import { Button } from ":/components/Button";

describe("<Button/>", () => {
  it("renders", () => {
    render(<Button>Test button</Button>);
    const button = screen.getByRole("button", { name: "Test button" });
    expect(Array.from(button.classList)).toContain("c__button");
  });

  it("renders with custom class when using left icon", () => {
    render(<Button icon={<div>Icon</div>}>Test button</Button>);
    const button = screen.getByText("Test button");
    const classes = Array.from(button.classList);
    expect(classes).toContain("c__button");
    expect(classes).toContain("c__button--with-icon--left");
  });

  it("renders with modifier class --icon-only when only icon is defined", () => {
    render(<Button icon={<div>Icon</div>} />);
    const button = screen.getByRole("button");
    const classes = Array.from(button.classList);
    expect(classes).toContain("c__button");
    expect(classes).toContain("c__button--icon-only");
    expect(classes).not.toContain("c__button--with-icon--left");
    expect(classes).not.toContain("c__button--with-icon--right");
  });

  it("renders with custom class when using right icon", () => {
    render(
      <Button icon={<div>Icon</div>} iconPosition="right">
        Test button
      </Button>,
    );
    const button = screen.getByText("Test button");
    const classes = Array.from(button.classList);
    expect(classes).toContain("c__button");
    expect(classes).toContain("c__button--with-icon--right");
  });

  it("call onClick when click occurs", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Test button</Button>);
    const button = screen.getByRole("button", { name: "Test button" });
    expect(handleClick).not.toBeCalled();
    user.click(button);
    await waitFor(() => expect(handleClick).toHaveBeenCalled());
  });

  it("does not call onClick when click occurs on a disabled button", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled={true}>
        Test button
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Test button" });
    expect(handleClick).not.toBeCalled();
    await act(async () => user.click(button));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders as link when href is used", () => {
    render(
      <Button
        href="https://www.fun-mooc.fr/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open link
      </Button>,
    );
    const button = screen.getByRole("link", { name: "Open link" });
    expect(button).toHaveAttribute("target", "_blank");
    expect(button).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("uses custom token", async () => {
    await buildTheme();
    const tokens = await loadTokens();
    expect(
      tokens.themes.default.components.button["border-radius"],
    ).toBeDefined();
  });
});

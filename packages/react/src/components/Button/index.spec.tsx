import { describe, expect, it } from "vitest";
import { act, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { buildTheme, loadTokens } from "tests/Theme";
import userEvent from "@testing-library/user-event";
import { Button } from "./index";

describe("<Button/>", () => {
  it("renders", () => {
    render(<Button>Test button</Button>);
    const button = screen.getByRole("button", { name: "Test button" });
    expect(button.classList.contains("c__button")).toBe(true);
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
      </Button>
    );
    const button = screen.getByRole("button", { name: "Test button" });
    expect(handleClick).not.toBeCalled();
    await act(async () => user.click(button));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("uses custom token", async () => {
    await buildTheme();
    const tokens = await loadTokens();
    expect(tokens.components.button["border-radius"]).toBeDefined();
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { buildTheme, loadTokens } from "tests/Theme";
import { Button } from "./index";

describe("<Button/>", () => {
  it("renders", () => {
    render(<Button>Test button</Button>);
    const button = screen.getByRole("button", { name: "Test button" });
    expect(button.classList.contains("c__button")).toBe(true);
  });

  it("uses custom token", async () => {
    await buildTheme();
    const tokens = await loadTokens();
    expect(tokens.components.button["border-radius"]).toBeDefined();
    expect(tokens.components.button.shadow).toBeDefined();
  });
});

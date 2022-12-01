import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./index";

describe("<Button/>", () => {
  it("renders", () => {
    render(<Button />);
    const button = screen.getByRole("button", { name: "<Button/>" });
    expect(button.classList.contains("c__button")).toBe(true);
  });
});

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

const meta: Meta = {
  title: "Misc/Colors",
};

export default meta;
type Story = StoryObj<{}>;

const colors = [
  "primary",
  "secondary",
  "greyscale",
  "success",
  "info",
  "warning",
  "danger",
];
const tints = [900, 800, 700, 600, 500, 400, 300, 200, 100];

export const BackgroundColors: Story = {
  render: () => {
    return (
      <div>
        {colors.map((color) => (
          <div key={color} style={{ display: "flex", gap: "5px" }}>
            {tints.map((tint) => (
              <div
                key={color + tint}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexShrink: 0,
                  flexBasis: "120px",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <div
                  style={{ width: "72px", height: "48px" }}
                  className={"bg-" + color + "-" + tint}
                />
                <pre className="clr-greyscale-800 fs-s mt-st">
                  bg-{color}-{tint}
                </pre>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  },
};

export const TextColors: Story = {
  render: () => {
    return (
      <div>
        {colors.map((color) => (
          <div key={color} style={{ display: "flex", gap: "10px" }}>
            {tints.map((tint) => {
              const classes = ["fs-s", "mt-st", "clr-" + color + "-" + tint];
              return (
                <div
                  key={color + tint}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexShrink: 0,
                    flexBasis: "110px",
                    alignItems: "center",
                    flexGrow: 1,
                  }}
                >
                  <pre className={classes.join(" ")}>
                    clr-{color}-{tint}
                  </pre>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  },
};

export const Example: Story = {
  render: () => {
    return (
      <>
        <div className="bg-primary-500 clr-primary-text fw-medium p-t">
          I am a text on top of a primary-500 background 👋
        </div>
        <div className="clr-secondary-900 bg-secondary-500 clr-secondary-text fw-medium p-t">
          I am a text on top of a secondary-500 background 👋
        </div>
        <div className="bg-danger-500 clr-danger-text fw-medium p-t">
          I am a text on top of a danger-500 background 👋
        </div>
      </>
    );
  },
};

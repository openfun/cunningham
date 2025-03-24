import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { tokens } from ":/cunningham-tokens";

const meta: Meta = {
  title: "Misc/Spacings",
};

export default meta;
type Story = StoryObj<{}>;

export const Sizes: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Object.keys(tokens.themes.default.theme.font.sizes).map((key) => (
          <div key={key} className={"clr-greyscale-800 fs-" + key}>
            Using the <code>fs-{key}</code> class
          </div>
        ))}
      </div>
    );
  },
};

export const Weights: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Object.keys(tokens.themes.default.theme.font.weights).map((key) => (
          <div key={key} className={"clr-greyscale-800 fs-l fw-" + key}>
            Using the <code>fw-{key}</code> class
          </div>
        ))}
      </div>
    );
  },
};

export const Families: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {Object.keys(tokens.themes.default.theme.font.families).map((key) => (
          <div key={key} className={"clr-greyscale-800 f-" + key}>
            Using the <code>f-{key}</code> class
          </div>
        ))}
      </div>
    );
  },
};

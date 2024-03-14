import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { tokens } from ":/cunningham-tokens";

const meta: Meta = {
  title: "Misc/Spacings",
};

export default meta;
type Story = StoryObj<{}>;

export const Default: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {Object.entries(tokens.themes.default.theme.spacings).map(
          ([key, value]) => {
            return (
              <div
                key={key}
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  className="fw-bold clr-secondary-text"
                  style={{ width: "30px" }}
                >
                  -{key}
                </div>
                <div
                  className="fw-medium fs-m clr-secondary-text"
                  style={{ width: "100px" }}
                >
                  {value}
                </div>
                <div
                  className={"bg-danger-100 pl-" + key}
                  style={{ height: "48px", width: 0 }}
                />
              </div>
            );
          },
        )}
      </div>
    );
  },
};

export const Example: Story = {
  render: () => {
    return (
      <div className="clr-greyscale-800 bg-danger-100">
        <div className="clr-greyscale-800 bg-primary-500 clr-primary-text fw-medium p-t mb-l">
          Tiny padding + Large margin bottom
        </div>
        <div className="clr-secondary-900 bg-secondary-500 clr-secondary-text fw-medium p-l ml-b">
          Large padding + Base margin left
        </div>
      </div>
    );
  },
};

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
                  className={"bg-error-tertiary pl-" + key}
                  style={{ height: "48px", width: 0 }}
                />
              </div>
            );
          }
        )}
      </div>
    );
  },
};

export const Example: Story = {
  render: () => {
    return (
      <div className="clr-gray-800 bg-error-tertiary">
        <div className="clr-gray-800 bg-brand-tertiary  fw-medium p-t mb-l">
          Tiny padding + Large margin bottom
        </div>
        <div className="content-neutral-primary bg-neutral-tertiary  fw-medium p-l ml-b">
          Large padding + Base margin left
        </div>
      </div>
    );
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { tokens } from ":/cunningham-tokens";

const meta: Meta = {
  title: "Misc/Colors",
};

export default meta;
type Story = StoryObj<{}>;

const colors = [
  "brand",
  "gray",
  "success",
  "info",
  "warning",
  "error",
  "red",
  "orange",
  "brown",
  "yellow",
  "green",
  "blue-1",
  "blue-2",
  "purple",
  "pink",
];
const tints = [
  950,
  900,
  850,
  800,
  750,
  700,
  650,
  600,
  550,
  500,
  450,
  400,
  350,
  300,
  250,
  200,
  150,
  100,
  "050",
];

export const BackgroundColors: Story = {
  render: () => {
    return (
      <div>
        <div>{}</div>
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
                <pre className="clr-gray-800 fs-s mt-st">
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

export const ContextualBackgrounds: Story = {
  render: () => {
    const { background } = tokens.themes.default.contextuals;

    // Extract all background values from the contextuals
    const backgroundEntries = Object.entries(background).flatMap(
      ([category, values]) => {
        if (typeof values === "object" && values !== null) {
          return Object.entries(values).map(([key, value]) => ({
            category,
            key,
            value,
            fullKey: `${category}-${key}`,
          }));
        }
        return [];
      }
    );

    // Group by category
    const groupedBackgrounds = backgroundEntries.reduce(
      (acc, entry) => {
        if (!acc[entry.category]) {
          acc[entry.category] = [];
        }
        acc[entry.category].push(entry);
        return acc;
      },
      {} as Record<string, typeof backgroundEntries>
    );

    return (
      <div>
        {Object.entries(groupedBackgrounds).map(([category, entries]) => (
          <section key={category} style={{ marginBottom: "3rem" }}>
            <h2
              style={{
                color: "#626B77",
                marginBottom: "1rem",
                textTransform: "capitalize",
                fontSize: "1.5rem",

                paddingBottom: "0.5rem",
              }}
            >
              {category}
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                maxWidth: "100%",
                gap: "1rem",
              }}
            >
              {entries.map(({ key, value, fullKey }) => (
                <div
                  key={fullKey}
                  style={{
                    padding: "1rem",
                    borderRadius: "8px",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #E1E2E4",
                    gridColumn: "span 1",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "80px",
                      backgroundColor: value,
                      borderRadius: "4px",
                      marginBottom: "0.5rem",
                      border: "1px solid #E1E2E4",
                    }}
                  />
                  <strong style={{ textTransform: "capitalize" }}>{key}</strong>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "#707882",
                      marginTop: "0.25rem",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "#A7ABB1",
                      marginTop: "0.25rem",
                    }}
                  >
                    .bg-{fullKey}
                  </div>
                </div>
              ))}
            </div>
          </section>
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
        <div className="bg-brand-tertiary content-brand-primary fw-medium p-t">
          I am a text on top of a primary-500 background 👋
        </div>
        <div className="content-neutral-primary bg-neutral-tertiary fw-medium p-t">
          I am a text on top of a secondary-500 background 👋
        </div>
        <div className="bg-error-tertiary content-error-primary fw-medium p-t">
          I am a text on top of a danger-500 background 👋
        </div>
      </>
    );
  },
};

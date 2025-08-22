import React from "react";
import { Meta } from "@storybook/react";
import { Tooltip } from ":/components/Tooltip";
import { Button } from ":/components/Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: "8rem", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "4rem" }}>
            <Story />
            <div>⬅️ Hover it</div>
          </div>
        </div>
      );
    },
  ],
} as Meta<typeof Tooltip>;

export const Default = {
  args: {
    children: (
      <Button
        size="small"
        icon={<span className="material-icons">info</span>}
        color="tertiary"
        variant="neutral"
      />
    ),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

export const Placements = {
  render: () => {
    return (
      <div>
        <Tooltip placement="left" content="Hi there">
          <Button size="nano" color="tertiary" variant="neutral">
            ⬅️
          </Button>
        </Tooltip>
        <Tooltip placement="bottom" content="Hi there">
          <Button size="nano" color="tertiary" variant="neutral">
            ⬇️
          </Button>
        </Tooltip>
        <Tooltip placement="top" content="Hi there">
          <Button size="nano" color="tertiary" variant="neutral">
            ⬆️
          </Button>
        </Tooltip>
        <Tooltip placement="right" content="Hi there">
          <Button size="nano" color="tertiary" variant="neutral">
            ➡️
          </Button>
        </Tooltip>
      </div>
    );
  },
};

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet quam sed nunc commodo consequat. Vestibulum cursus venenatis massa et tempor.";
export const OverflowingText = {
  args: {
    children: (
      <p
        style={{
          width: "100px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {lorem}
      </p>
    ),
    content: lorem,
  },
};

export const WithElements = {
  args: {
    content: lorem,
    placement: "bottom",
    children: (
      <div
        style={{
          display: "inline-flex",
        }}
      >
        <div
          style={{
            borderRadius: "8px",
            backgroundColor: "var(--c--theme--colors--greyscale-300)",
            padding: "1rem",
            display: "flex",
            gap: "1rem",
          }}
        >
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "100%",
              backgroundColor: "var(--c--theme--colors--greyscale-600)",
            }}
          />
          <div
            style={{
              width: "150px",
              height: "32px",
              borderRadius: "4px",
              backgroundColor: "var(--c--theme--colors--greyscale-400)",
            }}
          />
        </div>
      </div>
    ),
  },
};

export const WithHtml = {
  args: {
    children: (
      <Button
        size="small"
        icon={<span className="material-icons">info</span>}
        color="tertiary"
        variant="neutral"
      />
    ),
    placement: "right",
    content: (
      <div>
        <h3>Heading</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    ),
  },
};

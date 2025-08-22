import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "background-color": defaults.contextuals.background.surface.primary,
    "backdrop-color": "#0C1A2B99",
    "border-radius": "4px",
    "border-color": defaults.contextuals.border.neutral.tertiary,
    "box-shadow": "0px 1px 2px 0px #0C1A2B4D",
    color: defaults.contextuals.content.neutral.primary,
    // "backdrop-color": "#0C1A2B99", // Does not work yet due to backdrop CSS var support.
    "title-font-weight": defaults.globals.font.weights.bold,
    "content-font-size": defaults.globals.font.sizes.sm,
    "content-font-weight": defaults.globals.font.weights.regular,
    "content-color": defaults.contextuals.content.neutral.primary,
    "width-small": "300px",
    "width-medium": "600px",
    "width-large": "800px",
    "width-extra-large": "75%",
  };
};

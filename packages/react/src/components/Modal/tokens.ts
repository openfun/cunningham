import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "background-color": defaults.theme.colors["greyscale-000"],
    "backdrop-color": "#0C1A2B99",
    "border-radius": "4px",
    "border-color": defaults.theme.colors["greyscale-300"],
    "box-shadow": "0px 1px 2px 0px #0C1A2B4D",
    color: defaults.theme.colors["greyscale-900"],
    // "backdrop-color": "#0C1A2B99", // Does not work yet due to backdrop CSS var support.
    "title-font-weight": defaults.theme.font.weights.bold,
    "content-font-size": defaults.theme.font.sizes.m,
    "content-font-weight": defaults.theme.font.weights.regular,
    "content-color": defaults.theme.colors["greyscale-800"],
    "width-small": "300px",
    "width-medium": "600px",
    "width-large": "800px",
    "width-extra-large": "75%",
  };
};

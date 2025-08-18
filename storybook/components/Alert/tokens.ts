import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "background-color": defaults.theme.colors["greyscale-100"],
    "border-radius": "4px",
    "font-weight": defaults.theme.font.weights.medium,
    color: defaults.theme.colors["greyscale-900"],
    "icon-size": "19px",
    "additional-font-weight": defaults.theme.font.weights.regular,
    "additional-color": defaults.theme.colors["greyscale-700"],
  };
};

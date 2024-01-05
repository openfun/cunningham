import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "slide-in-duration": "1000ms",
    "slide-out-duration": "300ms",
    "background-color": defaults.theme.colors["greyscale-100"],
    color: defaults.theme.colors["greyscale-900"],
    "font-weight": defaults.theme.font.weights.regular,
    "icon-size": defaults.theme.font.sizes.l,
    "progress-bar-height": "3px",
  };
};

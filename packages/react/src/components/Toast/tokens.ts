import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "slide-in-duration": "1000ms",
    "slide-out-duration": "300ms",
    "background-color": defaults.contextuals.background.neutral.tertiary,
    color: defaults.contextuals.content.neutral.primary,
    "font-weight": defaults.globals.font.weights.regular,
    "icon-size": "19px",
    "progress-bar-height": "3px",
  };
};

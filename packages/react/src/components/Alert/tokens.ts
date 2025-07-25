import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "background-color": defaults.contextuals.background.neutral.tertiary,
    "border-radius": "4px",
    "border-color": defaults.contextuals.border.neutral.primary,
    "border-left-color": defaults.contextuals.border.neutral.primary,
    "font-weight": defaults.globals.font.weights.medium,
    color: defaults.contextuals.content.neutral.primary,
    "icon-size": "19px",
    "additional-font-weight": defaults.globals.font.weights.regular,
    "additional-color": defaults.contextuals.content.neutral.primary,
  };
};

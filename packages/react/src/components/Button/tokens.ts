import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "8px",
    "border-radius--active": "2px",
    "border-radius--focus": "8px",
    "medium-text-height": "36px",
    "medium-height": "48px",
    "small-height": "32px",
    "nano-height": "24px",
    "medium-font-size": defaults.globals.font.sizes.md,
    "medium-icon-font-size": "1.5rem",
    "small-font-size": defaults.globals.font.sizes.sm,
    "small-icon-font-size": defaults.globals.font.sizes.md,
    "nano-font-size": defaults.globals.font.sizes.sm,
    "nano-icon-font-size": defaults.globals.font.sizes.md,
    "font-weight": defaults.globals.font.weights.regular,
    "font-family": defaults.globals.font.families.base,
    "text-font-weight": defaults.globals.font.weights.medium,
  };
};

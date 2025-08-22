import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "font-weight": defaults.globals.font.weights.regular,
  "font-size": defaults.globals.font.sizes.md,
  "border-radius": "8px",
  "border-radius--hover": "4px",
  "border-radius--focus": "4px",
  "border-width": "1px",
  "border-width--hover": "1px",
  "border-width--focus": "1px",
  "border-color": defaults.contextuals.border.neutral.tertiary,
  "border-color--hover": defaults.contextuals.border.neutral.tertiary,
  "border-color--focus": defaults.contextuals.border.brand.primary,
  "border-style": "solid",
  "label-color--focus": defaults.contextuals.border.brand.primary,
  "background-color": defaults.contextuals.background.surface.primary,
  "value-color": defaults.contextuals.content.neutral.primary,
  "value-color--disabled": defaults.contextuals.content.neutral.tertiary,
});

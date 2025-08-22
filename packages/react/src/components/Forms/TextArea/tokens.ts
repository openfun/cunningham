import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "font-weight": defaults.globals.font.weights.regular,
  "font-size": defaults.globals.font.sizes.md,
  "border-radius": "8px",
  "border-radius--hover": "2px",
  "border-radius--focus": "2px",
  "border-width": "1px",
  "border-color": defaults.contextuals.border.neutral.tertiary,
  "border-color--hover": defaults.contextuals.border.neutral.secondary,
  "border-color--focus": defaults.contextuals.border.brand.primary,
  "border-color--disabled": defaults.contextuals.border.disabled.primary,
  "border-style": "solid",
  "label-color--focus": defaults.contextuals.border.brand.primary,
  "background-color": defaults.contextuals.background.surface.primary,
  "value-color": defaults.contextuals.content.neutral.primary,
  "value-color--disabled": defaults.contextuals.content.neutral.secondary,
});

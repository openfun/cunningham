import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "border-color": defaults.contextuals.border.neutral.secondary,
  "accent-color": defaults.contextuals.content.brand.tertiary,
  "background-color": defaults.contextuals.background.surface.primary,
});

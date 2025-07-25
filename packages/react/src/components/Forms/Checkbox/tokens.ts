import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "background-color--hover":
    defaults.contextuals.background.neutral["tertiary-hover"],
  "background-color": defaults.contextuals.background.surface.primary,
  "font-size": defaults.globals.font.sizes.s,
  "font-weight": defaults.globals.font.weights.medium,
  color: defaults.contextuals.content.neutral.primary,
  "border-color": defaults.contextuals.border.neutral.secondary,
  "border-radius": "2px",
  "accent-color": defaults.contextuals.background.surface.primary,
  size: "1.5rem",
  "background-color--checked": defaults.contextuals.content.brand.tertiary,
  "background-color--indeterminate":
    defaults.contextuals.content.brand.tertiary,
  "background-color--disabled": defaults.contextuals.content.disabled.primary,
  "border-color--disabled": defaults.contextuals.content.disabled.primary,
});

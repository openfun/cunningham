import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "border-color": defaults.contextuals.border.neutral.tertiary,
  "border-color--focus": defaults.contextuals.border.brand.primary,
  "border-color--hover": defaults.contextuals.border.neutral.secondary,
  "border-radius": "8px",
  "border-radius--focus": "2px",
  "border-radius--hover": "2px",
  "border-style": "solid",
  "border-width": "1px",
  "value-color": defaults.contextuals.content.neutral.primary,
  "value-color--disabled": defaults.contextuals.content.disabled.primary,
  "font-size": defaults.globals.font.sizes.md,
  height: "3.5rem",
  "item-background-color--hover":
    defaults.contextuals.background.neutral["tertiary-hover"],
  "item-background-color--selected":
    defaults.contextuals.background.brand.secondary,
  "item-color": defaults.contextuals.content.neutral.primary,
  "item-color--disabled": defaults.contextuals.content.disabled.secondary,
  "item-font-size": defaults.globals.font.sizes.md,
  "background-color": defaults.contextuals.background.surface.primary,
  "menu-background-color": defaults.contextuals.background.surface.primary,
  "label-color--focus": defaults.contextuals.border.brand.primary,
  "multi-pill-background-color":
    defaults.contextuals.background.neutral.tertiary,
  "multi-pill-border-radius": "2px",
  "multi-pill-max-width": "68%",
  "multi-pill-font-size": defaults.globals.font.sizes.md,
});

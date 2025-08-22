import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "border-color": defaults.contextuals.border.neutral.tertiary,
  "border-color--disabled": defaults.contextuals.border.disabled.primary,
  "border-color--focus": defaults.contextuals.border.brand.primary,
  "border-color--hover": defaults.contextuals.border.neutral.secondary,
  "border-radius": "8px",
  "border-radius--focus": "2px",
  "border-radius--hover": "2px",
  "border-style": "solid",
  "border-width": "1px",
  "value-color": defaults.contextuals.content.neutral.tertiary,
  "value-color--disabled": defaults.contextuals.content.disabled.primary,
  "font-size": defaults.globals.font.sizes.lg,
  height: "3.5rem",
  "item-background-color--hover":
    defaults.contextuals.background.neutral["tertiary-hover"],
  "item-background-color--selected":
    defaults.contextuals.background.brand.tertiary,
  "item-color": defaults.contextuals.content.neutral.primary,
  "item-font-size": defaults.globals.font.sizes.md,
  "background-color": defaults.contextuals.background.surface.primary,
  "menu-background-color": defaults.contextuals.background.surface.primary,
  "range-selection-background-color":
    defaults.contextuals.background.brand.tertiary,
  "range-selection-background-color--disabled":
    defaults.contextuals.background.neutral.tertiary,
  "grid-cell--border-color--today": defaults.contextuals.border.brand.primary,
  "grid-cell--color--today": defaults.contextuals.content.brand.primary,
  "label-color--focus": defaults.contextuals.border.brand.secondary,
});

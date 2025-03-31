import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "border-color": defaults.theme.colors["greyscale-300"],
  "border-color--disabled": defaults.theme.colors["greyscale-200"],
  "border-color--focus": defaults.theme.colors["primary-600"],
  "border-color--hover": defaults.theme.colors["greyscale-500"],
  "border-radius": "8px",
  "border-radius--focus": "2px",
  "border-radius--hover": "2px",
  "border-style": "solid",
  "border-width": "1px",
  "value-color": defaults.theme.colors["greyscale-900"],
  "value-color--disabled": defaults.theme.colors["greyscale-800"],
  "font-size": defaults.theme.font.sizes.l,
  height: "3.5rem",
  "item-background-color--hover": defaults.theme.colors["greyscale-200"],
  "item-background-color--selected": defaults.theme.colors["primary-100"],
  "item-color": defaults.theme.colors["greyscale-800"],
  "item-font-size": defaults.theme.font.sizes.l,
  "background-color": defaults.theme.colors["greyscale-000"],
  "menu-background-color": defaults.theme.colors["greyscale-000"],
  "range-selection-background-color": defaults.theme.colors["primary-100"],
  "range-selection-background-color--disabled":
    defaults.theme.colors["greyscale-100"],
  "grid-cell--border-color--today": defaults.theme.colors["primary-600"],
  "grid-cell--color--today": defaults.theme.colors["primary-600"],
  "label-color--focus": defaults.theme.colors["primary-600"],
});

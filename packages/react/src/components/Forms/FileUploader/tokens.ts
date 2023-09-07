import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "background-color": "white",
  "border-color": defaults.theme.colors["greyscale-300"],
  "border-radius": "0.5rem",
  "border-width": "2px",
  "border-style": "dotted",
  "background-color--active": defaults.theme.colors["primary-100"],
  color: defaults.theme.colors["greyscale-900"],
  padding: "1rem",
  "accent-color": defaults.theme.colors["primary-600"],
  "text-color": defaults.theme.colors["greyscale-600"],
  "text-size": "0.6875rem",
  "file-text-size": "0.8125rem",
  "file-text-color": defaults.theme.colors["greyscale-900"],
  "file-text-weight": defaults.theme.font.weights.light,
  "file-border-color": defaults.theme.colors["greyscale-300"],
  "file-border-width": "1px",
  "file-border-radius": "0.5rem",
  "file-background-color": "white",
  "file-specs-size": "0.6875rem",
  "file-specs-color": defaults.theme.colors["greyscale-600"],
});

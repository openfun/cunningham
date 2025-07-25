import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => ({
  "accent-color": defaults.contextuals.content.brand.tertiary,
  "rail-background-color": defaults.contextuals.content.neutral.tertiary,
  "rail-background-color--disabled":
    defaults.contextuals.content.disabled.primary,
  "rail-border-radius": "50vw",
  "handle-background-color": "white",
  "handle-background-color--disabled":
    defaults.contextuals.content.disabled.secondary,
  "handle-border-radius": "50%",
});

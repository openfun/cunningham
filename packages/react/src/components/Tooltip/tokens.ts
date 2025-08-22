import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "0.5rem",
    "background-color": defaults.contextuals.background.surface.primary,
    color: defaults.contextuals.content.contextual.primary,
    "font-size": defaults.globals.font.sizes.s,
    padding: "1rem",
    "max-width": "150px",
  };
};

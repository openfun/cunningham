import { DefaultTokens } from "@openfun/cunningham-tokens";

export const tokens = (defaults: DefaultTokens) => {
  return {
    "border-radius": "0.5rem",
    "background-color": defaults.theme.colors["greyscale-900"],
    color: defaults.theme.colors["greyscale-000"],
    "font-size": defaults.theme.font.sizes.s,
    padding: "1rem",
    "max-width": "150px",
  };
};

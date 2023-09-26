import { colors as defaultColors } from "./ThemeColors/default";
import { colors as darkColors } from "./ThemeColors/dark";

const colorsSecondary = {
  "secondary-text": "ref(theme.colors.greyscale-700)",
  "secondary-100": "#F2F7FC",
  "secondary-200": "#EBF3FA",
  "secondary-300": "#E2EEF8",
  "secondary-400": "#DDEAF7",
  "secondary-500": "#D4E5F5",
  "secondary-600": "#C1D0DF",
  "secondary-700": "#97A3AE",
  "secondary-800": "#757E87",
  "secondary-900": "#596067",
};

const colorsInfo = {
  "info-text": "ref(theme.colors.greyscale-000)",
  "info-100": "#EBF2FC",
  "info-200": "#8CB5EA",
  "info-300": "#5894E1",
  "info-400": "#377FDB",
  "info-500": "#055FD2",
  "info-600": "#0556BF",
  "info-700": "#044395",
  "info-800": "#033474",
  "info-900": "#022858",
};

const fontSizes = {
  h1: "1.75rem",
  h2: "1.375rem",
  h3: "1.125rem",
  h4: "0.8125rem",
  h5: "0.625rem",
  h6: "0.5rem",
  l: "1rem",
  m: "0.8125rem",
  s: "0.6875rem",
};

const fontLetterSpacings = {
  h1: "normal",
  h2: "normal",
  h3: "normal",
  h4: "normal",
  h5: "1px",
  h6: "normal",
  l: "normal",
  m: "normal",
  s: "normal",
};

const fontWeights = {
  thin: 200,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 600,
  extrabold: 700,
  black: 800,
};

const fontFamilies = {
  base: '"Roboto Flex Variable", sans-serif',
  accent: '"Roboto Flex Variable", sans-serif',
};

const spacings = {
  xl: "4rem",
  l: "3rem",
  b: "1.625rem",
  s: "1rem",
  t: "0.5rem",
  st: "0.25rem",
};

const transitions = {
  "ease-in": "cubic-bezier(0.32, 0, 0.67, 0)", // Ease in cubic
  "ease-out": "cubic-bezier(0.33, 1, 0.68, 1)", // Ease out cubic
  "ease-in-out": "cubic-bezier(0.65, 0, 0.35, 1)", // Ease in out cubic
  duration: "250ms",
};

const defaultTheme = {
  theme: {
    colors: {
      ...colorsSecondary,
      ...colorsInfo,
      ...defaultColors,
      "primary-text": "ref(theme.colors.greyscale-000)",
      "success-text": "ref(theme.colors.greyscale-000)",
      "warning-text": "ref(theme.colors.greyscale-000)",
      "danger-text": "ref(theme.colors.greyscale-000)",
    },
    font: {
      sizes: fontSizes,
      weights: fontWeights,
      families: fontFamilies,
      letterSpacings: fontLetterSpacings,
    },
    spacings,
    transitions,
  },
};

export default {
  themes: {
    default: defaultTheme,
    dark: {
      theme: {
        colors: darkColors,
      },
    },
  },
};

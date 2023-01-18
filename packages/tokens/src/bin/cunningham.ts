const colorsGreyscale = {
  "greyscale-000": "#FFFFFF",
  "greyscale-100": "#FAFAFB",
  "greyscale-200": "#F3F4F4",
  "greyscale-300": "#E7E8EA",
  "greyscale-400": "#C2C6CA",
  "greyscale-500": "#9EA3AA",
  "greyscale-600": "#79818A",
  "greyscale-700": "#555F6B",
  "greyscale-800": "#303C4B",
  "greyscale-900": "#0C1A2B",
};

const colorsPrimary = {
  "primary-text": colorsGreyscale["greyscale-000"],
  "primary-100": "#EBF2FC",
  "primary-200": "#8CB5EA",
  "primary-300": "#5894E1",
  "primary-400": "#377FDB",
  "primary-500": "#055FD2",
  "primary-600": "#0556BF",
  "primary-700": "#044395",
  "primary-800": "#033474",
  "primary-900": "#022858",
};

const colorsSecondary = {
  "secondary-text": colorsGreyscale["greyscale-700"],
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

const colorsSuccess = {
  "success-text": colorsGreyscale["greyscale-000"],
  "success-100": "#EFFCD3",
  "success-200": "#DBFAA9",
  "success-300": "#BEF27C",
  "success-400": "#A0E659",
  "success-500": "#76D628",
  "success-600": "#5AB81D",
  "success-700": "#419A14",
  "success-800": "#2C7C0C",
  "success-900": "#1D6607",
};

const colorsInfo = {
  "info-text": colorsGreyscale["greyscale-000"],
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

const colorsWarning = {
  "warning-text": colorsGreyscale["greyscale-000"],
  "warning-100": "#FFF8CD",
  "warning-200": "#FFEF9B",
  "warning-300": "#FFE469",
  "warning-400": "#FFDA43",
  "warning-500": "#FFC805",
  "warning-600": "#DBA603",
  "warning-700": "#B78702",
  "warning-800": "#936901",
  "warning-900": "#7A5400",
};

const colorsDanger = {
  "danger-text": colorsGreyscale["greyscale-000"],
  "danger-100": "#F4B0B0",
  "danger-200": "#EE8A8A",
  "danger-300": "#E65454",
  "danger-400": "#E13333",
  "danger-500": "#DA0000",
  "danger-600": "#C60000",
  "danger-700": "#9B0000",
  "danger-800": "#780000",
  "danger-900": "#5C0000",
};

const typoSizes = {
  h1: "1.75rem",
  h2: "1.375rem",
  h3: "1.125rem;",
  h4: "0.8125rem",
  h5: "0.625rem",
  h6: "0.5rem",
  l: "1rem",
  m: "0.8125rem",
  s: "0.6875rem",
};

const typoWeights = {
  thin: 100,
  regular: 300,
  medium: 400,
  bold: 500,
  extrabold: 700,
  black: 900,
};

const typeFamilies = {
  base: "Roboto",
  accent: "Roboto",
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
  "ease-in": "cubic-bezier(0.5, 0, 0.75, 0)",
  "ease-out": "cubic-bezier(0.25, 1, 0.5, 1)",
  "ease-in-out": "cubic-bezier(0.76, 0, 0.24, 1)",
  duration: "200ms",
};

export default {
  theme: {
    colors: {
      ...colorsPrimary,
      ...colorsSecondary,
      ...colorsGreyscale,
      ...colorsSuccess,
      ...colorsInfo,
      ...colorsWarning,
      ...colorsDanger,
    },
    typo: {
      sizes: typoSizes,
      weights: typoWeights,
      families: typeFamilies,
    },
    spacings,
    transitions,
  },
};

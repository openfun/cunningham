module.exports = {
  themes: {
    default: {
      globals: {
        colors: {
          primary: "#055FD2",
          secondary: "#DA0000",
          "ternary-900": "#022858",
          "ogre-odor-is-orange-indeed": "#FD5240",
        },
        font: {
          sizes: {
            m: "1rem",
          },
          weights: {
            medium: 400,
          },
          families: {
            base: "Roboto",
          },
        },
        spacings: {
          s: "1rem",
        },
        transitions: {
          ease: "linear",
        },
        input: {
          "border-color": "ref(theme.colors.ternary-900)",
        },
      },
      contextuals: {
        background: {
          primary: "#055FD2",
        },
        content: {
          primary: "#055FD2",
        },
        border: {
          primary: "#055FD2",
        },
      },
      theme: {
        colors: {
          primary: "#055FD2",
          secondary: "#DA0000",
          "ternary-900": "#022858",
          "ogre-odor-is-orange-indeed": "#FD5240",
        },
        font: {
          sizes: {
            m: "1rem",
          },
          weights: {
            medium: 400,
          },
          families: {
            base: "Roboto",
          },
        },
        spacings: {
          s: "1rem",
        },
        transitions: {
          ease: "linear",
        },
        input: {
          "border-color": "ref(theme.colors.ternary-900)",
        },
      },
      components: {
        button: {
          "font-family": "Times New Roman,Helvetica Neue,Segoe UI",
        },
      },
    },
    dark: {
      theme: {
        colors: {
          primary: "black",
        },
      },
    },
    custom: {
      theme: {
        colors: {
          primary: "green",
        },
      },
    },
  },
};

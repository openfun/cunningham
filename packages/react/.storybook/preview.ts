import "../src/icons.scss";
import "../src/index.scss";
import "../src/fonts.scss";
import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: (a, b) => {
        const roots = ["Getting Started", "Components"];
        const gettingStartedOrder = [
          "Installation",
          "Customization",
          "Colors",
          "Spacings",
          "Typography",
        ];

        const aParts = a.title.split("/");
        const bParts = b.title.split("/");
        if (aParts[0] !== bParts[0]) {
          return roots.indexOf(aParts[0]) - roots.indexOf(bParts[0]);
        }
        if (aParts[1] !== bParts[1]) {
          if (aParts[0] === "Getting Started") {
            return (
              gettingStartedOrder.indexOf(aParts[1]) -
              gettingStartedOrder.indexOf(bParts[1])
            );
          }
          return aParts[1].localeCompare(bParts[1]);
        }
        return 0;
      },
    },
  },
};

export default preview;

import { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from "remark-gfm";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/preset-scss",
    {
      name: "@storybook/addon-docs",
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  staticDirs: ["../src", "../public"],
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, options) {
    // We don't want the Storybook build to generate type definitions.
    const newConfig = {
      ...config,
      plugins: config.plugins.filter((plugin) => {
        if (typeof plugin === "object") {
          return (plugin as any).name !== "vite:dts";
        }
        return true;
      }),
    };
    return newConfig;
  },
};

export default config;

import { dirname, join } from "path";
import { StorybookConfig } from "@storybook/react-vite";
import remarkGfm from 'remark-gfm';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/preset-scss"),
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
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  staticDirs: ["../src", "../public"],

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
  docs: {
    autodocs: false
  }
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

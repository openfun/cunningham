const viteTsconfig = require('vite-tsconfig-paths');
const tsconfigPaths = viteTsconfig.default;
const { mergeConfig } = require('vite');

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  'framework': '@storybook/react',
  'core': {
    'builder': '@storybook/builder-vite',
  },
  staticDirs: [
    '../src',
  ],
  'features': {
    'storyStoreV7': true,
  },
  async viteFinal(config) {
    const finalConfig = mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
    finalConfig.base = 'https://openfun.github.io/cunningham';
    return finalConfig;
  },
};
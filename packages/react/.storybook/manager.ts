import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';
import { defaultTokens } from '@openfun/cunningham-tokens';

const COLORS = defaultTokens.theme.colors;

const theme = create({
  base: 'light',
  brandUrl: 'https://github.com/openfun/cunningham',
  brandImage: '/logo-cunningham.svg',
  brandTitle: 'Cunningham',
  brandTarget: '_self',


  //
  colorPrimary: COLORS["primary-400"],
  colorSecondary: COLORS["primary-400"],

  // UI
  appBg: COLORS["greyscale-100"],
  appContentBg: COLORS["greyscale-000"],
  appBorderColor: COLORS["greyscale-300"],
  appBorderRadius: 4,

  // Text colors
  textColor: COLORS["greyscale-900"],
  textInverseColor: COLORS["greyscale-000"],

  // Toolbar default and active colors
  barTextColor: COLORS["greyscale-500"],
  barSelectedColor: COLORS["greyscale-900"],
  barBg: COLORS["greyscale-000"],

  // Form colors
  inputBg: COLORS["greyscale-000"],
  inputBorder: COLORS["greyscale-300"],
  inputTextColor: COLORS["greyscale-800"],
  inputBorderRadius: 2,
});

addons.setConfig({ theme });

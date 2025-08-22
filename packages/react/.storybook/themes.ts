import { create } from '@storybook/theming';
import { tokens } from '../src/cunningham-tokens';

const buildTheme = (colors: typeof tokens.themes.default.globals.colors & any) => {
    return {
        brandUrl: 'https://github.com/openfun/cunningham',
        brandImage: 'logo-cunningham.svg',
        brandTitle: 'Cunningham',
        brandTarget: '_self',

        //
        colorPrimary: colors['brand-500'],
        colorSecondary: colors['brand-500'],

        // UI
        // appBg: colors['gray-050'],
        appContentBg: colors['gray-000'],
        appBorderColor: colors['gray-050'],
        appBorderRadius: 4,

        // Text colors
        textColor: colors['gray-900'],
        textInverseColor: colors['gray-000'],

        // Toolbar default and active colors
        barTextColor: colors['gray-500'],
        barSelectedColor: colors['gray-900'],
        barBg: colors['gray-000'],

        // Form colors
        inputBg: colors['gray-000'],
        inputBorder: colors['gray-300'],
        inputTextColor: colors['gray-800'],
        inputBorderRadius: 2,
    };
};

export const themes = {
    default: create({
        base: 'light',
        ...buildTheme(tokens.themes.default.globals.colors),
    }),
    dark: create({
        base: 'dark',
        ...buildTheme(tokens.themes.dark.globals.colors),
    }),
};

export enum Themes {
    dark = 'dark',
    default = 'default'
}

export const BACKGROUND_COLOR_TO_THEME = {
    '#0C1A2B': Themes.dark,
};

export const getThemeFromGlobals = (globals: any): string => {
    const color = BACKGROUND_COLOR_TO_THEME[globals.backgrounds?.value];
    return color ?? Themes.default;
};

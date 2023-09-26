import { create } from '@storybook/theming';
import { tokens } from '../src/cunningham-tokens';

const buildTheme = (colors: typeof tokens.themes.default.theme.colors & any) => {
    return {
        brandUrl: 'https://github.com/openfun/cunningham',
        brandImage: 'logo-cunningham.svg',
        brandTitle: 'Cunningham',
        brandTarget: '_self',

        //
        colorPrimary: colors['primary-400'],
        colorSecondary: colors['primary-400'],

        // UI
        appBg: colors['greyscale-100'],
        appContentBg: colors['greyscale-000'],
        appBorderColor: colors['greyscale-300'],
        appBorderRadius: 4,

        // Text colors
        textColor: colors['greyscale-900'],
        textInverseColor: colors['greyscale-000'],

        // Toolbar default and active colors
        barTextColor: colors['greyscale-500'],
        barSelectedColor: colors['greyscale-900'],
        barBg: colors['greyscale-000'],

        // Form colors
        inputBg: colors['greyscale-000'],
        inputBorder: colors['greyscale-300'],
        inputTextColor: colors['greyscale-800'],
        inputBorderRadius: 2,
    };
};

export const themes = {
    default: create({
        base: 'light',
        ...buildTheme(tokens.themes.default.theme.colors),
    }),
    dark: create({
        base: 'dark',
        ...buildTheme(tokens.themes.dark.theme.colors),
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

import '../src/icons.scss';
import '../src/index.scss';
import '../src/fonts.scss';
import { Preview } from '@storybook/react';
import { DocsContainer } from '@storybook/blocks';

import { CunninghamProvider } from ':/components/Provider';
import { BACKGROUND_COLOR_TO_THEME, getThemeFromGlobals, themes } from './themes';

export const DocsWithTheme = (props, context) => {
    const theme = getThemeFromGlobals(props.context.store.globals.globals);
    return <CunninghamProvider theme={theme}>
        <DocsContainer {...props} theme={themes[theme]} />
    </CunninghamProvider>;
};

const preview: Preview = {
    decorators: [
        (Story, context) => (
          <CunninghamProvider theme={getThemeFromGlobals(context.globals)}>
              <Story />
          </CunninghamProvider>
        ),
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        backgrounds: {
            default: null,
            values: Object.entries(BACKGROUND_COLOR_TO_THEME).map(value => ({
                name: value[1],
                value: value[0],
            })),
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            container: DocsWithTheme,
        },
        options: {
            storySort: (a, b) => {
                const roots = ['Getting Started', 'Components', 'Migrating', 'Misc'];
                const gettingStartedOrder = [
                    'Installation',
                    'First steps',
                    'Customization',
                    'Theming',
                    'Colors',
                    'Spacings',
                    'Typography',
                ];

                const aParts = a.title.split('/');
                const bParts = b.title.split('/');
                if (aParts[0] !== bParts[0]) {
                    return roots.indexOf(aParts[0]) - roots.indexOf(bParts[0]);
                }
                if (aParts[1] !== bParts[1]) {
                    if (aParts[0] === 'Getting Started') {
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

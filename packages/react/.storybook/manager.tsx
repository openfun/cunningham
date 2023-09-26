import { addons, types, useStorybookApi } from '@storybook/manager-api';
import { getThemeFromGlobals, themes } from './themes';
import React, { useEffect } from 'react';
import { useGlobals } from '@storybook/api';

addons.setConfig({ theme: themes.default });

/**
 * This add-on is just here to apply the theme to the Storybook manager ( the top-most frame
 * containing sidebar, toolbar, etc ) when the theme is switched.
 *
 * The reason why we needed to add this add-on is that add-ons are the only place from where you can
 * dynamically change the current theme of the manager.
 */
addons.register('theme-synchronizer', () => {
    addons.add('theme-synchronizer/main', {
        title: 'Theme synchronizer',
        //👇 Sets the type of UI element in Storybook
        type: types.TOOL,
        //👇 Shows the Toolbar UI element if either the Canvas or Docs tab is active
        match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
        render: ({ active }) => {
            const api = useStorybookApi();
            const [globals, updateGlobals] = useGlobals();
            const theme = getThemeFromGlobals(globals);
            useEffect(() => {
                api.setOptions({
                    theme: themes[theme]
                })
            }, [theme]);
            return null;
        },
    });
});

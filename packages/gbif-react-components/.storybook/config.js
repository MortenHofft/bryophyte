import React from 'react'
import {ThemeProvider} from 'emotion-theming'
import { configure, addParameters, addDecorator } from '@storybook/react';
// Storybook Addon Dependencies
import { withKnobs, select } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import gbifTheme from './theme';

import darkTheme from '../src/styles/themes/dark'
import lightTheme from '../src/styles/themes/light'
import a11yTheme from '../src/styles/themes/a11y'
import themeBuilder from '../src/themeBuilder/index';
const dark = themeBuilder(darkTheme);
const light = themeBuilder(lightTheme);
const a11y = themeBuilder(a11yTheme);

// Setup Addons
//custom for changing emotion theme
addDecorator(story => {
  const themeObjects = {
    dark: dark,
    light: light,
    a11y: a11y,
  }

  const chooseTheme = choice => {
    const _theme = themeObjects[choice.toLowerCase()]
    if (_theme) {
      return _theme
    }
    return _theme
  }

  return (
    <div>
      <ThemeProvider
        theme={chooseTheme(
          select(
            'Choose Theme',
            ['Dark', 'Light', 'A11y'],
            'Light',
          ),
        )}
      >
        {story()}
      </ThemeProvider>
    </div>
  )
})

addDecorator(withKnobs);
addDecorator(withA11y);

// // Setup Storybook options
addParameters({ options: { theme: gbifTheme } });
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

configure([
  require.context('../src/stories', true, /\.stories\.js$/),
  require.context('../src/components', true, /\.stories\.js$/),
], module);

import { configure, addParameters, addDecorator } from '@storybook/react';
// Storybook Addon Dependencies
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import gbifTheme from './theme';

// Setup Addons
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
  require.context('../stories', true, /\.stories\.js$/),
  require.context('../src/components', true, /\.stories\.js$/),
], module);

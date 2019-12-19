import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import Example from './Button';
import notes from './README.md';

export default {
  title: 'Components|Button',
  component: Example,
  parameters: {
    notes: notes
  }
};

export const emoji = () => (
  <div onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯 {text('Text', 'Click here')}
    </span>
  </div>
);

export const Example2 = () => <Example>{text('Text', 'Click here')}</Example>;

Example2.story = {
  name: 'Example',
};

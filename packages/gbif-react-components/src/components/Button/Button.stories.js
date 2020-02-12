import { text, boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const options = {
  primary: 'primary',
  primaryOutline: 'primaryOutline',
  outline: 'outline',
  danger: 'danger',
};

export const Example = () => <Button
  loading={boolean("loading", false)}
  block={boolean("block", false)}
  type={select('Type', options, options.primary)}
>
  {text('Text', 'Button text')}
</Button>;

Example.story = {
  name: 'Button',
};

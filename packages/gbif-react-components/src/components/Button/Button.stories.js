import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

export const Example = () => <Button 
  isLoading={boolean("isLoading", false)}
  isSuccess={boolean("isSuccess", true)}>
  {text('Text', 'Button text')}
  </Button>;

Example.story = {
  name: 'Button',
};

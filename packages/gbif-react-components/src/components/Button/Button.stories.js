import { text, boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import Button from './Button';
import { Button as ButtonA11y } from "reakit/Button";


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

export const example2 = () => <ButtonA11y>ButtonA11y</ButtonA11y>

Example.story = {
  name: 'Button',
};
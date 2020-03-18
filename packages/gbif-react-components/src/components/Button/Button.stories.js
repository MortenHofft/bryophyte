import { text, boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Button, ButtonGroup } from './index';
import { MdClose } from 'react-icons/md';

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
  appearance={select('Appearance', options, options.primary)}
>
  {text('Text', 'Button text')}
</Button>;

export const ButtonGroupExample = () => <ButtonGroup>
  <Button appearance="primary">First option</Button>
  <Button appearance="primary">
    <MdClose />
  </Button>
</ButtonGroup>;

Example.story = {
  name: 'Button',
};

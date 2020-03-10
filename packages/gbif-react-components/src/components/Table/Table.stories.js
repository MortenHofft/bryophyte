import React from 'react';
// import { text, boolean, select } from '@storybook/addon-knobs';
import { Table } from './Table';
import { Example } from './Table1';
import readme from './README.md';
import { StyledProse } from '../../typography/StyledProse';

export default {
  title: 'Components/Table',
  component: Table,
};

export const Demo = () => <>
  <Example />
  {/* <StyledProse source={readme}></StyledProse> */}
</>;

Demo.story = {
  name: 'Table',
};


// // OPTIONS
// const options = {
//   primary: 'primary',
//   primaryOutline: 'primaryOutline',
//   outline: 'outline',
//   danger: 'danger',
// };
// type={select('Type', options, options.primary)}

// // BOOLEAN
// boolean("loading", false)

// // TEXT
// {text('Text', 'Table text')}
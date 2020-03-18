import React from 'react';
// import { text, boolean, select } from '@storybook/addon-knobs';
import { Accordion } from './Accordion';
import readme from './README.md';
import { StyledProse } from '../../typography/StyledProse';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

export const Example = () => <>
  <Accordion>
    Accordion
  </Accordion>
  {/* <StyledProse source={readme}></StyledProse> */}
</>;

Example.story = {
  name: 'Accordion',
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
// {text('Text', 'Accordion text')}
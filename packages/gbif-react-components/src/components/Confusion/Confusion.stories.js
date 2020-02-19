import React from 'react';
import Confusion from './Confusion';
import Confusion2 from './Confusion2';
import Confusion4 from './Confusion4';


export default {
  title: 'Components/Confusion',
  component: Confusion,
};

export const Example = () => <Confusion />
export const ReakitVariant = () => <Confusion2 />
export const ReakitVariant2 = () => <Confusion4 />

Example.story = {
  name: 'Confusion',
};

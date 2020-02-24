import React from 'react';
import { Example as GlobalNav } from './GlobalNav';
import { StyledProse } from '../../../typography/StyledProse';
import readme from './README.md';

export default {
  title: 'Components/GlobalNav',
  component: GlobalNav,
};

export const Example = () => <div style={{ height: '200vh' }}>
  <GlobalNav />
  <StyledProse source={readme}></StyledProse>
</div>

Example.story = {
  name: 'GlobalNav',
};

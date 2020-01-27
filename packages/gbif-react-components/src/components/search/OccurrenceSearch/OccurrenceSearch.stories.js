import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import OccurrenceSearch from './OccurrenceSearch';

export default {
  title: 'Search/OccurrenceSearch',
  component: OccurrenceSearch,
};

export const Example = () => <OccurrenceSearch style={{height: 'calc(100vh - 20px)'}}></OccurrenceSearch>;

Example.story = {
  name: 'OccurrenceSearch',
};

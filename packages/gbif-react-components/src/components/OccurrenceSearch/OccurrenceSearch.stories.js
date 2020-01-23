import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import OccurrenceSearch from './OccurrenceSearch';

export default {
  title: 'Search/OccurrenceSearch',
  component: OccurrenceSearch,
};

export const Example = () => <OccurrenceSearch></OccurrenceSearch>;

Example.story = {
  name: 'OccurrenceSearch',
};

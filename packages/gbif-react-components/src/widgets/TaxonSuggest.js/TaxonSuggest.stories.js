import React from 'react';
import TaxonSuggest from './TaxonSuggest';


export default {
  title: 'Widgets/TaxonSuggest',
  component: TaxonSuggest,
};

export const Example = () => <TaxonSuggest />

Example.story = {
  name: 'Taxon suggest',
};

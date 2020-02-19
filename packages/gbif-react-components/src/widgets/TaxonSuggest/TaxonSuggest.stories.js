import React from 'react';
import TaxonSuggest from './TaxonSuggest';
import TaxonSuggest2 from './TaxonSuggest2';


export default {
  title: 'Widgets/TaxonSuggest',
  component: TaxonSuggest,
};

export const Example = () => <TaxonSuggest />
export const Example2 = () => <TaxonSuggest2 />

Example.story = {
  name: 'Taxon suggest',
};

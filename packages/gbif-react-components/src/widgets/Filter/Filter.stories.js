import React from 'react';
import { Filter, Option } from './index';

export default {
  title: 'Widgets/Filter',
  component: Filter,
};

export const Example = () => {
  const filterName = 'BasisOfRecord';
  
  return <Filter
    onApply={filter => console.log(filter)}
    onCancel={() => console.log('cancel')}
    title="Basis of record"
    aboutText="som elonger piece of text "
    hasHelpTexts={true}
    filterName={filterName}
    onAboutChange={e => console.log(e)}
    onHelpChange={e => console.log(e)}
    onFilterChange={e => console.log(e)}
  >
    {({ helpVisible, toggle, checkedMap }) => <div>
      <div>
      {['HumanObservation', 'MachineObservation', 'LivingSpecimen'].map(e => {
        return <Option 
          key={e} 
          helpVisible={helpVisible} 
          helpText="some help text" 
          label={e} 
          checked={checkedMap.has(e)} onChange={() => toggle(filterName, e)}
          />})
      }
      </div>
    </div>}
  </Filter>;
}

Example.story = {
  name: 'Filter',
};

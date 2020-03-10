import { text, boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from '/components/Button';
import Popover from './Popover';

export default {
  title: 'Components/Popover',
  component: Popover,
};

const TaxonFilter = ({innerRef, popover, ...props}) => <div>
  <h1>Taxon filter</h1>
  <Button onClick={() => popover.hide()}>Close</Button>
  <Button ref={innerRef}>init focus</Button>
  <Button>test 3</Button>
  <Button>test 4</Button>
</div>

export const Example = () => <div style={{ position: 'relative', padding: 50, height: 1000 }}>
  <Popover
    aria-label="Location filter"
    onClickOutside={popover => popover.hide()}
    trigger={<Button>{text('Text', 'Choose a location')}</Button>}
  >
    {({popover, focusRef}) =>
      <TaxonFilter innerRef={focusRef} popover={popover} />
    }
  </Popover>
</div>;

Example.story = {
  name: 'Popover',
};

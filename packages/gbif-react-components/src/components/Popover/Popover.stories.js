import { text, boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from '/components/Button';
import Popover from './Popover';


export default {
  title: 'Components/Popover',
  component: Popover,
};

// placement options - but for some reason the do not update dynamically. the reakit lib only takes it into consideration upon mount
// const options = {
//   default: '',
//   right: 'right',
//   rightStart: 'right-start',
//   rightEnd: 'right-end',
//   top: 'top',
//   topStart: 'top-start',
//   topEnd: 'top-end',
//   bottom: 'bottom',
//   bottomStart: 'bottom-start',
//   bottomEnd: 'bottom-end',
//   left: 'left',
//   leftStart: 'left-start',
//   leftEnd: 'left-end',
// };

const popupContent = props => <div>
  The button should recieve focus <Button onClick={props.hide}>Close</Button>
</div>

export const Example = () => <div style={{position: 'relative', padding: 50, height: 1000}}>
  <Popover
    aria-label="Location filter"
    modal={popupContent}
    trigger={<Button>{text('Text', 'Choose a location')}</Button>}
  />
</div>;


Example.story = {
  name: 'Popover',
};

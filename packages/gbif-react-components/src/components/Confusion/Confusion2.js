/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  usePopoverState,
  Popover as BasePopover,
  PopoverDisclosure,
  PopoverArrow
} from "reakit/Popover";

function Popover2({ trigger, content, onClose, ...props }) {
  const popover = usePopoverState();

  React.useEffect(() => {
    console.log('useEffect called');
    if (!popover.visible) {
      onClose();
    }
  }, [popover.visible, onClose]);

  return (
    <>
      <PopoverDisclosure {...popover} {...trigger.props}>
        {disclosureProps => React.cloneElement(trigger, disclosureProps)}
      </PopoverDisclosure>
      <BasePopover {...popover} {...props}>
        <PopoverArrow {...popover} />
        {React.cloneElement(content, { popover })}
      </BasePopover>
    </>
  );
}

const Parent = () => {
  const [count, setCount] = useState(0);
  const [tmpCount, setTmpCount] = useState(count);
  console.log('Render parent');
  return <div>
    <h2>Parent state: {JSON.stringify(count)}</h2>
    <Popover2
      onClose={() => setCount(tmpCount)}
      trigger={<button>Toggle pink popup</button>}
      content={<Content count={tmpCount} setCount={setTmpCount} apply={() => setCount(tmpCount)} onCancel={() => setTmpCount(count)}/>}
    />
  </div>
}

function Content({apply, popover, count, setCount, onCancel }) {
  console.log('Render content');
  if (!popover.visible) return <div></div>
  return <div style={{ border: '3px solid pink', padding: 20, margin: 20 }}>
    <button onClick={() => setCount(count + 1)}>Add 1 to count</button> Count is: {count}
    <button onClick={() => {apply(count); popover.hide()}}>Apply (close and update parent)</button>
    <button onClick={() => {popover.hide(); onCancel();}}>Cancel (close and do not update parent)</button>
  </div>
}

export default Parent;
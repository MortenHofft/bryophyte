/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";

const Popup = ({ trigger, content, onClose }) => {
  const [showPopup, setVisible] = useState(true);

  const toggle = () => setVisible(!showPopup);

  return <div style={{ border: '3px solid deepskyblue', padding: 20 }}>
    {trigger(toggle)}
    {showPopup && React.cloneElement(content, { showPopup, setVisible })}
    {showPopup && <button onClick={() => {onClose(); setVisible(false)}}>Backdrop - apply changes and close popup (but how to do this?)</button>}
  </div>
}

const Parent = () => {
  const [count, setCount] = useState(0);
  console.log('Render parent');
  return <div>
    <h2>Parent state: {JSON.stringify(count)}</h2>
    <Popup
      onClose={() => console.log('close')}
      trigger={toggle => <button onClick={() => toggle()}>Toggle pink popup</button>}
      content={<Content count={count} apply={data => setCount(data)} />}
    />
  </div>
}

function Content({ count:initalCount, apply, showPopup, setVisible }) {
  console.log(initalCount);
  const [count, setCount] = useState(initalCount);

  useEffect(() => {
    console.log('useEffect called');
    if (!showPopup) {
      console.log(count);
    }
  }, [showPopup, count]);

  return <div style={{ border: '3px solid pink', padding: 20, margin: 20 }}>
    <button onClick={() => setCount(count + 1)}>Add 1 to count</button> Count is: {count}
    <button onClick={() => {apply(count); setVisible(false)}}>Apply (close and update parent)</button>
    <button onClick={() => setVisible(false)}>Cancel (close and do not update parent)</button>
  </div>
}

export default Parent;
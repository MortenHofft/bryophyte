import React, { useState, useEffect, useCallback } from "react";

function Child({ onClose }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {
      console.log('will unmount ', count);
      onClose(count);
    }
  }, []);

  console.log('Render child');
  return <div style={{border: '3px solid pink', padding: 20, margin: 20}}>
    <button onClick={() => setCount(count + 1)}>Add 1 to count</button> Count is: {count}
    <button onClick={() => onClose(count)}>Apply (Call parent function)</button>
  </div>
}

const Parent = () => {
  const [showPopup, setVisible] = useState(true);

  // const onClose = useCallback(
  //   () => console.log('The value of count is ' + count),
  //   [count]
  // );

  console.log('Render parent');
  return <div style={{border: '3px solid deepskyblue', padding: 20}}>
    {showPopup && <Child 
      onClose={data => console.log('The value of count is ' + data)} 
      // onClose={onClose}
      />}
    <button onClick={() => setVisible(!showPopup)}>Hide pink child component (should trigger same function as Apply</button>
  </div>
}

export default Parent;
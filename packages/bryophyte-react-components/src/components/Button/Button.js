import React, { useState } from 'react';
import { css } from '@emotion/core'

function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <section css={css`
      padding: 4em;
      background: papayawhip;
    `}>
      <h1 className="gb-header"
        css={css`
          font-size: 1.5em;
          text-align: center;
          color: #d64876;
        `}
      >You clicked {count} times. Great!</h1>
      <span onClick={() => setCount(count + 1)}>
        {props.children}
      </span>
    </section>
  );
}

export default Example;
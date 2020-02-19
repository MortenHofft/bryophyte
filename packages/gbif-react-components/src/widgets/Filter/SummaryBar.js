import React from "react";
import { css, cx } from 'emotion';
import Level from '../../layout/Level';
import { Button } from '../../components/Button';

const SummaryBar = ({ count, onClear, ...props }) => {
  return <Level as="div" className={summary}>
    <Level.Left>
      <Level.Item>
        {count} selected
  </Level.Item>
    </Level.Left>
    {count > 0 &&
      <Level.Right>
        <Level.Item>
          <Button appearance="text" onClick={onClear}>Clear</Button>
        </Level.Item>
      </Level.Right>
    }
  </Level>
}

const summary = css`
  font-size: .85em;
  color: #999;
  padding: .5em 1.5em;
  font-weight: 200;
`;

export default SummaryBar;
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import Level from '../../layout/Level';
import { Button } from '../../components/Button';

const SummaryBar = ({ count, onClear, ...props }) => {
  const theme = useContext(ThemeContext);
  return <Level as="div" {...props} css={summary(theme)}>
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

const summary = theme => css`
  font-size: .85em;
  color: #999;
  padding: .5em 1.5em;
  font-weight: 200;
`;

export default SummaryBar;
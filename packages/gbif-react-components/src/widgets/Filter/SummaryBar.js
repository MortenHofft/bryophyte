/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import { Row, Col } from '../../layout/Row';
import { Button } from '../../components/Button';

const SummaryBar = ({ count, onClear, ...props }) => {
  const theme = useContext(ThemeContext);
  return <div style={{margin: '.5em 1.5em'}} {...props}>
    <Row as="div" css={summary(theme)} >
      <Col>
          {count} selected
      </Col>
      {count > 0 &&
        <Col grow={false}>
          <Button appearance="text" onClick={onClear}>Clear</Button>
        </Col>
      }
    </Row>
  </div>
}

const summary = theme => css`
  font-size: .85em;
  color: #999;
  font-weight: 200;
`;

export default SummaryBar;
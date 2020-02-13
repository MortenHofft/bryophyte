/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../style/themes/ThemeContext';
import React, { useContext } from 'react';
import Box from '../components/Box/Box';

export const Prose = React.forwardRef(({
  as: Div = 'div',
  ...props
}, ref) => {
  return <Box as={Div} {...props} css={prose}>
  </Box>
});

const prose = css`
  color: #4a4a4a;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
`;


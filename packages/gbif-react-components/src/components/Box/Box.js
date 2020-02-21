/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
// import PropTypes from 'prop-types';

const Box = React.forwardRef(({
  as: Bx,
  ...props
}, ref) => {
  const theme = useContext(ThemeContext);
  return <Bx ref={ref} css={box(theme)} {...props}>
  </Bx>
});

Box.displayName = 'Box'

Box.defaultProps = {
  as: 'div'
}

const box = theme => css`
  /* box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-family: ${theme.fontFamily}; */
  
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-family: ${theme.fontFamily};
  color: ${theme.color || '#4a4a4a'};
  font-size: ${theme.fontSize || '1em'};
  font-weight: 400;
  box-sizing: border-box;
  *, *::before, *::after, strong {
    box-sizing: inherit;
  }
`;

export default Box;
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '../../components/Box/Box';
import { row, col } from './Row.styles';

const GetComponent = rowComponentStyle => React.forwardRef(({
  as: As = 'div',
  className = '',
  style = {},
  wrap,
  direction,
  alignItems,
  justifyContent,
  halfGutter,
  gridGutter,
  shrink,
  grow,
  basis,
  xs,
  sm,
  md,
  lg,
  xl,
  ...props
}, ref) => {
  const theme = useContext(ThemeContext);
  return <Box as={As} ref={ref} style={style} className={className} {...props} css={rowComponentStyle({
    theme,
    wrap,
    direction,
    alignItems,
    justifyContent,
    halfGutter,
    gridGutter,
    shrink,
    grow,
    basis,
    xs,
    sm,
    md,
    lg,
    xl
  })} />
});


export const Row = GetComponent(row);
export const Col = GetComponent(col);
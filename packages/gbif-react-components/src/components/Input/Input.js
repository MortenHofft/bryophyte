/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import styles from './Input.styles';

const Input = React.forwardRef(({
  ...props
}, ref) => {
  const theme = useContext(ThemeContext);
  return <Box as="input" ref={ref} {...props} css={styles.input({theme})} />
});

Input.displayName = 'Input'

export default Input;
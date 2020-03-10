/** @jsx jsx */
import { jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { oneOfMany } from '../../utils/util';
import Box from '../Box/Box';
import styles from './styles';

export const Table = ({
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return <Box css={styles.table({theme})} {...props} />
};

Table.displayName = 'Table';

// Table.propTypes = {
  
// };

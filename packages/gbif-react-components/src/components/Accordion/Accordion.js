/** @jsx jsx */
import { jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import { oneOfMany } from '../../utils/util';
import styles from './styles';

export const Accordion = ({
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return <div css={styles.accordion({theme})} {...props} />
};

Accordion.displayName = 'Accordion';

// Accordion.propTypes = {
  
// };

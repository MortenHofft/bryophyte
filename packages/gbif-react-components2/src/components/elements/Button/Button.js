/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.styles';
import { getClasses } from '../../../styles/util';

const Button = ({
  as: Btn,
  className = '',
  loading = false,
  block = false,
  type = 'primary',
  ...props
}) => {
  const classes = {type, loading, block};
  const theme = useTheme();
  const { classesToApply, humanClasses } = getClasses(theme, 'button', classes);
  return <Btn className={`${humanClasses} ${className}`} css={css`
        ${styles.button(theme)}
        ${classesToApply.map(x => styles[x](theme))};
      `} {...props} />
}

Button.displayName = 'Button'

Button.defaultProps = {
  as: 'button'
}

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a', 'input']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'primaryOutline', 'outline', 'ghost', 'danger', 'link']),
  loading: PropTypes.bool,
  block: PropTypes.bool,
}

export default Button;
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.styles';
import { getClasses, isEmpty } from '../../utils/util';

const Button = ({
  as: Btn,
  className = '',
  loading = false,
  block = false,
  type = 'primary',
  ...props
}) => {
  const classes = {type, loading, block};
  const theme = useContext(ThemeContext);
  const appliedTheme = isEmpty(theme) ? standardTheme : theme;
  const { classesToApply, humanClasses } = getClasses(appliedTheme, 'button', classes);
  return <Btn className={`${humanClasses} ${className}`} css={css`
        ${styles.button(appliedTheme)}
        ${classesToApply.map(x => styles[x](appliedTheme))};
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
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button as ButtonA11y } from "reakit/Button";
import styles from './Button.styles';
import { getClasses, isEmpty } from '../../utils/util';

const Button = React.forwardRef(({
  className = '',
  loading = false,
  block = false,
  appearance = 'primary',
  ...props
}, ref) => {
  const classes = {appearance, loading, block};
  const theme = useContext(ThemeContext);
  const appliedTheme = isEmpty(theme) ? standardTheme : theme;
  const { classesToApply, humanClasses } = getClasses(appliedTheme, 'button', classes);
  return <ButtonA11y ref={ref} className={`${humanClasses} ${className}`} css={css`
        ${styles.button(appliedTheme)}
        ${classesToApply.map(x => styles[x](appliedTheme))};
      `} {...props} />
});

Button.displayName = 'Button'

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a', 'input']),
  className: PropTypes.string,
  appearance: PropTypes.oneOf(['primary', 'primaryOutline', 'outline', 'ghost', 'danger', 'link']),
  loading: PropTypes.bool,
  block: PropTypes.bool,
}

export default Button;
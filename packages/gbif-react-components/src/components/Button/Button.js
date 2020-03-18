/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box';
import { Button as ButtonA11y } from "reakit/Button";
import styles from './Button.styles';
import { getClasses } from '../../utils/util';
import { MdClose } from 'react-icons/md';

export const Button = React.forwardRef(({
  className = '',
  loading = false,
  block = false,
  appearance = 'primary',
  ...props
}, ref) => {
  const classes = {appearance, loading, block};
  const theme = useContext(ThemeContext);
  // const appliedTheme = isEmpty(theme) ? standardTheme : theme;
  const appliedTheme = theme;
  const { classesToApply, humanClasses } = getClasses(appliedTheme, 'button', classes);
  return <Box as={ButtonA11y} ref={ref} className={`${humanClasses} ${className}`} css={css`
        ${styles.button(appliedTheme)}
        ${classesToApply.map(x => styles[x](appliedTheme))};
      `} {...props} />
});

Button.displayName = 'Button'

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a', 'input']),
  className: PropTypes.string,
  appearance: PropTypes.oneOf(['primary', 'primaryOutline', 'outline', 'ghost', 'danger', 'link', 'text']),
  loading: PropTypes.bool,
  block: PropTypes.bool,
}

export const ButtonGroup = ({
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return <Box css={styles.group({theme})} {...props} />
};

ButtonGroup.displayName = 'ButtonGroup'

export const FilterButton = React.forwardRef(({
  isActive,
  onClearRequest=()=>{},
  onClick,
  children,
  ...props
}, ref) => {
  if (!isActive) {
    return <ButtonGroup {...props}>
      <Button ref={ref} appearance="primaryOutline" onClick={onClick}>{children}</Button>
    </ButtonGroup>
  }
  return <ButtonGroup {...props}>
    <Button appearance="primary" ref={ref} onClick={onClick}>{children}</Button>
    <Button appearance="primary" onClick={onClearRequest}>
      <MdClose />
    </Button>
  </ButtonGroup>
});

FilterButton.propTypes = {
  isActive: PropTypes.bool,
  onClearRequest: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.any,
}
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.styles.js';

const getClasses = classes => {
  const a = [];
  Object.keys(classes).forEach(key => {
    const val = classes[key];
    if (val === true) {
      a.push(key);
    } else if(typeof val === 'string') {
      a.push(val);
    }
  });
  return a;
}

const getClassNames = (prefix, elementName, classes) => {
  const root = `${prefix}-${elementName}`;
  return classes.reduce((a, c) => `${a} ${root}-${c}`, `${root}`);
}

/*
The classic button, in different colors, sizes, and states

Variations added as needed.
Start with primary and red, outline option. icon option.
 */
const Button = ({
  as: Btn,
  className = '',
  loading = false,
  block = false,
  type = 'primary',
  ...props
}) => {
  const theme = useTheme();
  const classes = getClasses({type, loading, block});
  console.log(classes);
  const prefix = theme.prefix || 'gbif';
  const classNames = getClassNames(prefix, 'button', classes);
  
  return <Btn className={`${classNames} ${className}`} css={css`
        ${styles.button(theme)}
        ${classes.map(x => styles[x](theme))};
      `} {...props} />
}

Button.displayName = 'Button'

Button.defaultProps = {
  as: 'button'
}

Button.propTypes = {
  as: PropTypes.oneOf(['button', 'a', 'input']),
  className: PropTypes.string,
  type: PropTypes.oneOf(['primary', 'primaryOutline', 'outline', 'danger', 'link']),
  loading: PropTypes.bool,
  block: PropTypes.bool,
}

export default Button;
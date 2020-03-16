/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Box from '../Box/Box';

const Switch = React.forwardRef(({
  as: Span = 'span',
  className = '',
  style = {},
  ...props
}, ref) => {
  const theme = useContext(ThemeContext);
  return <Box as={Span} style={style} className={className} css={switchClass(theme)}>
    <input type="checkbox" ref={ref} {...props} ></input>
    <span></span>
  </Box>
});

Switch.displayName = 'Switch';

Switch.propTypes = {
  as: PropTypes.oneOf(['span', 'div'])
}

export default Switch;

const switchClass = theme => css`
  position: relative;
  top: -0.09em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  & input {
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  & input + span {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 2em;
    height: 1em;
    background-color: #d4d5e3;
    transition: .1s;
    border-radius: 34px;
    &:before {
      position: absolute;
      content: "";
      height: calc(1em - 4px);
      width: calc(1em - 4px);
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: .1s;
      border-radius: 50%;
    }
  }
  & input:checked + span {
    background-color: #2196F3;
  }
  & input:focus + span {
    outline: none;
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }
  & input:checked + span:before {
    transform: translateX(1em);
  }
`;
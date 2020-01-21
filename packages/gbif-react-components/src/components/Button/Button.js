/** @jsx jsx */
import { css, keyframes, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Button.styles.js';

const spinAround = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

const isLoadingStyle = css`
  &:after {
    animation: ${spinAround} 500ms infinite linear;
    border: 2px solid #dbdbdb;
    border-radius: 290486px;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1em;
    position: relative;
    width: 1em;

    position: absolute;
    left: calc(50% - (1em / 2));
    top: calc(50% - (1em / 2));
    position: absolute !important;
  }
  color: transparent !important;
  pointer-events: none;
`;

const isSuccessStyle = css`
  background-color: #48c774;
  border-color: transparent;
  color: #fff;
`;

/*
The classic button, in different colors, sizes, and states

Variations added as needed.
Start with primary and red, outline option. icon option.
 */
const Button = ({
  as: Btn,
  className,
  isLoading = false,
  isSuccess = false,
  ...props
}) => {
  const theme = useTheme();
  return <Btn css={css`
        -webkit-touch-callout: none;
        user-select: none;
        appearance: none;
        align-items: center;
        border: 1px solid transparent;
        border-radius: 4px;
        box-shadow: none;
        display: inline-flex;
        font-size: 1rem;
        height: 2.5em;
        justify-content: flex-start;
        line-height: 1.5;
        padding-bottom: calc(0.5em - 1px);
        padding-left: calc(0.75em - 1px);
        padding-right: calc(0.75em - 1px);
        padding-top: calc(0.5em - 1px);
        position: relative;
        vertical-align: top;
        margin: 0;
        background-color: white;
        border-color: #dbdbdb;
        border-width: 1px;
        color: #363636;
        cursor: pointer;
        justify-content: center;
        padding-bottom: calc(0.5em - 1px);
        padding-left: 1em;
        padding-right: 1em;
        padding-top: calc(0.5em - 1px);
        text-align: center;
        white-space: nowrap;
        &:focus {
          outline: none;
          box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
        }
        ${isSuccess ? isSuccessStyle : ''}
        ${isLoading ? isLoadingStyle : ''}
      `} {...props} />
}

Button.displayName = 'Button'

Button.defaultProps = {
  as: 'button'
}

Button.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  danger: PropTypes.bool,
  outlined: PropTypes.bool,
  primary: PropTypes.bool,
  loading: PropTypes.bool,
  // fullwidth: PropTypes.bool,
  // large: PropTypes.bool,
  // link: PropTypes.bool,
  // success: PropTypes.bool,
  // text: PropTypes.bool,
  // warning: PropTypes.bool,
  // white: PropTypes.bool,
  // inverted: PropTypes.bool,
  // hovered: PropTypes.bool,
  // focused: PropTypes.bool,
  // active: PropTypes.bool,
}

export default Button

// function Button(props) {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   return (
//     <button css={css`
//       padding: 4em;
//       background: papayawhip;
//     `}>
//       {props.children}
//     </button>
//   );
// }

// Button.propTypes = {
//   status: PropTypes.oneOf(['positive', 'negative', 'neutral', 'error', 'warning']),
// };
// Button.defaultProps = {
//   as: 'button'
// }

// export default Button;
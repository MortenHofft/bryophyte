import { css } from '@emotion/core';

export const focusStyle = theme => css`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }
  ::-moz-focus-inner {
    border-style: none;
  }
`;
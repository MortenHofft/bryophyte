import { css, keyframes } from '@emotion/core';
// import { focusStyle } from '../../style/shared';

export const skeleton = ({width}) => css`
  width: ${width};
  display: inline-block;
  height: 1em;
  animation: ${loading} 3s linear infinite;
`;

export const loading = keyframes`
  from {
    background-color: #eee;
  }
  50% {
    background-color: #eee;
  }
  75% {
    background-color: #dfdfdf;
  }
  to {
    background-color: #eee;
  }
`;

export default {
  skeleton
}
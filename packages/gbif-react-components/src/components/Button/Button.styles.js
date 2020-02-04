import { css, keyframes } from '@emotion/core';
import { helper } from '../../utils/helper';

export const button = theme => css`
  ${helper.noUserSelect}
  appearance: none;

  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  
  text-align: center;
  white-space: nowrap;

  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;

  font-size: 1em;
  height: ${theme.dense ? 1.5 : 2.5}em;
  line-height: calc(1.5em - 6px);
  position: relative;
  margin: 0;
  background-color: white;
  color: ${theme.color};
  cursor: pointer;
  justify-content: center;
  padding-left: ${theme.dense ? 0.5 : 1}em;
  padding-right: ${theme.dense ? 0.5 : 1}em;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }
`;

export const primary = theme => css`
  background-color: ${theme.colors.primary500};
  color: white;
  &:hover {
    background-color: ${theme.colors.primary600};
  }
`;

export const primaryOutline = (theme) => css`
  border-color: ${theme.colors.primary500};
  background: none;
  color: ${theme.colors.primary700};
`;

export const outline = (theme) => css`
  border-color: ${theme.transparentInk40};
  background: none;
`;

export const ghost = (theme) => css`
  border-color: #808080;
  color: #808080;
  background: none;
`;

export const danger = (theme) => css`
  background: tomato;
  color: white;
`;

export const link = (theme) => css`
  border-color: transparent;
  background: none;
`;

export const block = (theme) => css`
  display: flex; 
  width: 100%;
`;

export const spinAround = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const loading = (theme) => css`
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

export default {
  button,
  primary,
  primaryOutline,
  outline,
  ghost,
  danger,
  link,
  loading,
  block
};
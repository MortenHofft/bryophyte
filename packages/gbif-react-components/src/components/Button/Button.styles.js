import { css } from '@emotion/core';

export const primary = theme => css`
  background-color: ${theme.colors.primary500};
  font-size: 16px;
  color: white;
  &:hover {
    background-color: ${theme.colors.primary700};
  }
`;

export const outline = (theme) => css`
  border: 2px solid ${theme.colors.primary};
  background: none;
`;

export default {
  primary,
  outline
}
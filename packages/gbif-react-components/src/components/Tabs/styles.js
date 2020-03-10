import { css } from '@emotion/core';
// import { focusStyle } from '../../style/shared';

export const tab = ({theme, isActive}) => css`
  border-bottom: 3px solid ${isActive ? theme.colors.primary500 : 'transparent'};
  border-width: 3px 0;
  border-top-color: transparent;
  display: inline-block;
  padding: 10px 10px;
`;

export const tabList = ({theme}) => css`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export default {
  tab,
  tabList
}
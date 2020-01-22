/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const shared = css`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
`;

export const LevelLeft = styled.div`
  ${shared}
  justify-content: flex-start;
`;

export const LevelRight = styled.div`
  ${shared}
  justify-content: flex-end;
`;

export const LevelItem = styled.div`
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  flex-grow: 1;
`;

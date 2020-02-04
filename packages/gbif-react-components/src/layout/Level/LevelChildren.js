import { css } from '@emotion/core';
import styled from '@emotion/styled'

const shared = css`
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  @media screen and (min-width: 769px), print {
    display: flex;
    margin: 0 -0.35em;
  }
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
  margin: 0 0.35em;
`;

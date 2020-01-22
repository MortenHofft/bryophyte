/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled'
import { LevelItem, LevelLeft, LevelRight } from './LevelChildren';

const Level = ({
  as: Lvl,
  ...props
}) => {
  const theme = useTheme();
  return <Lvl css={css`
        align-items: center;
        justify-content: space-between;
        img {
          display: inline-block;
          vertical-align: top;
        }
        @media screen and (min-width: 769px), print {
          display: flex;
          ${LevelLeft}, ${LevelRight} {
            display: flex;
            margin: 0 -0.35em;
          }
        }
        ${LevelItem} {
          margin: 0 0.35em;
        }
      `} {...props}>
      </Lvl>
}

Level.displayName = 'Level'

Level.defaultProps = {
  as: 'nav'
}

Level.propTypes = {
  as: PropTypes.node,
  className: PropTypes.string,
  // danger: PropTypes.bool,
  // outlined: PropTypes.bool,
  // primary: PropTypes.bool,
  // loading: PropTypes.bool,
}

Level.Item = LevelItem;
Level.Left = LevelLeft;
Level.Right = LevelRight;

export default Level
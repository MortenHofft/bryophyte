/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React from 'react';
import PropTypes from 'prop-types';

const Root = ({
  as: Rt,
  ...props
}) => {
  const theme = useTheme();
  return <Rt css={css`
          font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
          color: ${theme.color || '#4a4a4a'};
          font-size: ${theme.fontSize || '1em'};
          font-weight: 400;
          line-height: 1.5;
          box-sizing: border-box;
          background: ${theme.background || 'white'};
          *, *::before, *::after, strong {
            box-sizing: inherit;
          }
      `} {...props}>
  </Rt>
}

Root.displayName = 'Root'

Root.defaultProps = {
  as: 'div'
}

Root.propTypes = {
  as: PropTypes.node
}

export default Root;
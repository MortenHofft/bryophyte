// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming'

function OccurrenceSearch(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const theme = useTheme()


  return (
    <div css={css`
      padding: 4em;
      background: ${theme.colors.primary}
    `}>
      New component ready for development
    </div>
  );
}

OccurrenceSearch.propTypes = {
  theme: PropTypes.object,
  settings: PropTypes.object,
  locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  messages: PropTypes.object
};

export default OccurrenceSearch;
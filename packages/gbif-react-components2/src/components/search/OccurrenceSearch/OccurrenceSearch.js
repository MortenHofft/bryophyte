// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import StateProvider from "./state/StateProvider";
// import history from './history';
// import qs from 'querystringify';

function OccurrenceSearch(props) {
  return (
    <StateProvider>
      <Layout {...props}></Layout>
    </StateProvider>
  );
}

// OccurrenceSearch.propTypes = {
//   theme: PropTypes.object,
//   settings: PropTypes.object,
//   locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   messages: PropTypes.object
// };

export default OccurrenceSearch;
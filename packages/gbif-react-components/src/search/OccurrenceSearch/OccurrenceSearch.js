// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';
import FilterState from "./filters/state/FilterState";
// import history from './history';
// import qs from 'querystringify';
import { compose } from './api/queryAdapter';

function OccurrenceSearch(props) {
  const [filter, setFilter] = useState({ must: { TaxonKey: [1, 2, 3] } });
  // const esQuery = compose(filter).build();
  return (
    <FilterState filter={filter} onChange={setFilter}>
      <pre>{JSON.stringify(filter, null, 2)}</pre>
      {/* <pre>{JSON.stringify(esQuery, null, 2)}</pre> */}
      <Layout {...props}></Layout>
    </FilterState>
  );
}

// OccurrenceSearch.propTypes = {
//   theme: PropTypes.object,
//   settings: PropTypes.object,
//   locale: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   messages: PropTypes.object
// };

export default OccurrenceSearch;
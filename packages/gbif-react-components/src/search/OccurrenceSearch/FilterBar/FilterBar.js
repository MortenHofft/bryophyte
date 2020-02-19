/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import withContext from '../state/withContext';
import React, { useContext } from 'react';
import ThemeContext from 'style/themes/ThemeContext';
import VocabularyFilter from '../filters/VocabularyFilter';
import TaxonFilter from '../filters/TaxonFilter';

const FilterBar = ({
  className = '',
  stateApi,
  filter,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const prefix = theme.prefix || 'gbif';
  const elementName = 'filterBar';
  return <div className={`${className} ${prefix}-${elementName}`}
    css={css`${style(theme)}`} {...props}>
    <div><TaxonFilter css={css`margin-right: 4px;`} /></div>
    <div><VocabularyFilter css={css`margin-right: 4px;`} /></div>
  </div>
}

FilterBar.propTypes = {
}

export const style = (theme) => css`
  display: flex;
  flex-direction: row;
`;

const mapContextToProps = ({ filter, stateApi }) => ({ filter, stateApi });
export default withContext(mapContextToProps)(FilterBar);
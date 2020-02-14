/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import withContext from '../state/withContext';
import React, { useContext } from 'react';
import ThemeContext from 'style/themes/ThemeContext';
import VocabularyFilter from '../filters/VocabularyFilter';
import TaxonFilter from '../filters/TaxonFilter';
import TestFilter from '../filters/Filter';

const FilterBar = ({
  className = '',
  stateApi,
  filter,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const prefix = theme.prefix || 'gbif';
  const elementName = 'filterBar';
  // const filterProps = { filter, stateApi };
  return <div className={`${className} ${prefix}-${elementName}`}
    css={css`${style(theme)}`} {...props}>
    {/* <Button css={css`margin-right: 4px;`}>Species or group</Button>
    <Button type="outline" css={css`margin-right: 4px;`} onClick={e => stateApi.setFilter({ update: 'fromFilter' })}>Button</Button> */}
    <div><VocabularyFilter vocabularyName="BasisOfRecord" css={css`margin-right: 4px;`} /></div>
    <div><VocabularyFilter vocabularyName="Rank" css={css`margin-right: 4px;`} /></div>
    <div><VocabularyFilter vocabularyName="MediaType" css={css`margin-right: 4px;`} /></div>
    <div><TaxonFilter css={css`margin-right: 4px;`} /></div>
    {/* <div><TestFilter css={css`margin-right: 4px;`} /></div> */}
    {JSON.stringify(filter, null, 2)}
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
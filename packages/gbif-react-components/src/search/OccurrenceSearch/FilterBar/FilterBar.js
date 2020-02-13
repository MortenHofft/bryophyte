/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import withContext from '../state/withContext';
import React, { useContext } from 'react';
import ThemeContext from 'style/themes/ThemeContext';
import VocabularyFilter from '../filters/VocabularyFilter';

// import PropTypes from 'prop-types';

import { Button } from '../../../components/Button';
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
    <VocabularyFilter vocabularyName="BasisOfRecord" css={css`margin-right: 4px;`}/>
    <VocabularyFilter vocabularyName="Rank" css={css`margin-right: 4px;`}/>
    <VocabularyFilter vocabularyName="MediaType" css={css`margin-right: 4px;`}/>
    {JSON.stringify(filter, null, 2)}
  </div>
}

FilterBar.propTypes = {
}

export const style = (theme) => css`
  
`;

const mapContextToProps = ({ filter, stateApi }) => ({ filter, stateApi });
export default withContext(mapContextToProps)(FilterBar);
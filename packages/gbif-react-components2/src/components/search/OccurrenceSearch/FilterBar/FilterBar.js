/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import withContext from '../state/withContext';
import React from 'react';
// import PropTypes from 'prop-types';

import { Button } from '../../../elements/Button';
const FilterBar = ({
  className = '',
  stateApi,
  ...props
}) => {
  const theme = useTheme();
  const prefix = theme.prefix || 'gbif';
  const elementName = 'filterBar';
  return <div className={`${className} ${prefix}-${elementName}`}
  css={css`${style(theme)}`} {...props}>
    <Button css={css`margin-right: 4px;`}>Species or group</Button>
    <Button type="outline" css={css`margin-right: 4px;`} onClick={e => stateApi.updateFilter({update: 'fromFilter'})}>Button</Button>
    {JSON.stringify(props.filter, null, 2)}
  </div>
}

FilterBar.propTypes = {
}

export const style = (theme) => css`
  
`;

const mapContextToProps = ({ filter, stateApi }) => ({ filter, stateApi });
export default withContext(mapContextToProps)(FilterBar);
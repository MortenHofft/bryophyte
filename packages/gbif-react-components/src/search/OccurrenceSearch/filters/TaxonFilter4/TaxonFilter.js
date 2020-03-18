/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import Popover from '../../../../components/Popover/Popover';
import { Button, FilterButton } from '../../../../components';
import nanoid from 'nanoid';
import FilterContext from '../state/FilterContext';
import get from 'lodash/get';
import union from 'lodash/union';
import formatters from '../../displayNames/formatters';

import { Option, Filter, SummaryBar, FilterBody, Footer } from '../../../../widgets/Filter';
import Suggest from './Suggest';
import axios from '../../../../search/OccurrenceSearch/api/axios';
import ThemeContext from '../../../../style/themes/ThemeContext';

const ScientificName = formatters('scientificName').component;
const CanonicalName = formatters('canonicalName').component;

function getData(q, options) {
  return axios.get(`//api.gbif.org/v1/species/suggest?datasetKey=d7dddbf4-2cf0-4f39-9b2a-bb099caae36c&limit=10&q=${q}`, options);
}

function PopupContent({ onApply, onCancel, onFilterChange, focusRef, filterName, initFilter }) {
  const [id] = React.useState(nanoid);
  const initialOptions = get(initFilter, `must.${filterName}`, []);
  const [options, setOptions] = useState(initialOptions);
  const theme = useContext(ThemeContext);

  return <Filter
    onApply={onApply}
    onCancel={onCancel}
    title="Scientific name"
    aboutText="some help text"
    onFilterChange={onFilterChange}
    filterName={filterName}
    formId={id}
    defaultFilter={initFilter}
  >
    {({ filter, toggle, checkedMap, selectedItems, formId, summaryProps, footerProps }) => {
      return <>
        <Suggest focusRef={focusRef} onSuggestionSelected={({ item }) => {
          const allOptions = union(options, [item.key]);
          setOptions(allOptions);
          toggle(filterName, item.key);
        }} />
        {options.length > 0 && <>
          <SummaryBar {...summaryProps} style={{ marginTop: 0 }} />
          <FilterBody>
            <form id={formId} onSubmit={e => e.preventDefault()} >
              {options.map((taxonKey) => {
                return <Option
                  key={taxonKey}
                  helpVisible={true}
                  label={<ScientificName id={taxonKey} />}
                  checked={checkedMap.has(taxonKey)}
                  onChange={() => toggle(filterName, taxonKey)}
                />
              })}
            </form>
          </FilterBody>
          <Footer {...footerProps}
            onApply={() => onApply(filter)}
            onCancel={() => onCancel(filter)}
          />
        </>}
      </>
    }
    }
  </Filter>
}

PopupContent.propTypes = {
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  onFilterChange: PropTypes.func,
  focusRef: PropTypes.any,
  vocabulary: PropTypes.object,
  initFilter: PropTypes.object,
  filterName: PropTypes.string
};

export const TaxonomySearchBar = ({ checkedMap, filterName, toggle, ...props }) => {
  const theme = useContext(ThemeContext);
  return <FilterSuggest
    {...props}
    suggest={getData}
    keyBy="key"
    itemToString={item => item.scientificName}
    selectedSet={checkedMap}
    itemRenderer={({ item, isHighlighted, selected }) => <div css={filterSuggestOption(theme, { isHighlighted, selected })}>
      <div>
        {item.scientificName}
      </div>
      <div className="gbif-help-text">
        <Classification taxon={item} />
      </div>
    </div>
    }
    onSelect={item => toggle(filterName, item.key)}
  />
}

export const TaxonFilterPopover = ({ placement, modal, children, ...props }) => {
  const currentFilterContext = useContext(FilterContext);
  const [tmpFilter, setFilter] = useState(currentFilterContext.filter);

  return (
    <Popover
      onClickOutside={popover => { currentFilterContext.setFilter(tmpFilter); popover.hide() }}
      style={{ width: '22em', maxWidth: '100%' }}
      aria-label={`Filter on scientific name`}
      placement={placement}
      trigger={children}
      modal={modal}
    >
      {({ popover, focusRef }) => {
        return <PopupContent
          filterName="taxonKey"
          onApply={filter => { currentFilterContext.setFilter(filter); popover.hide() }}
          onCancel={() => { popover.hide(); }}
          focusRef={focusRef}
          onFilterChange={filter => setFilter(filter)}
          initFilter={currentFilterContext.filter}
        />
      }}
    </Popover>
  );
}

export const TaxonFilter = ({ placement, ...props }) => {
  const currentFilterContext = useContext(FilterContext);
  const [tmpFilter, setFilter] = useState(currentFilterContext.filter);
  const filterName = 'taxonKey';

  return (
    <Popover
      onClickOutside={popover => { currentFilterContext.setFilter(tmpFilter); popover.hide() }}
      style={{ width: '22em', maxWidth: '100%' }}
      aria-label={`Filter on scientific name`}
      placement={placement}
      trigger={<Trigger {...props} filterName={filterName} onClear={()=>currentFilterContext.setField(filterName, [])} filter={currentFilterContext.filter}></Trigger>}
    >
      {({ popover, focusRef }) => {
        return <PopupContent
          filterName={filterName}
          onApply={filter => { currentFilterContext.setFilter(filter); popover.hide() }}
          onCancel={() => { popover.hide(); }}
          focusRef={focusRef}
          onFilterChange={filter => setFilter(filter)}
          initFilter={currentFilterContext.filter}
        />
      }}
    </Popover>
  );
}

TaxonFilter.propTypes = {
  placement: PropTypes.string
};

const Trigger = React.forwardRef(({ filter, onClear, filterName, ...props }, ref) => {
  const appliedFilters = get(filter, `must.${filterName}`, []);
  if (appliedFilters.length === 1) {
    const selected = filter.must[filterName][0];
    return <FilterButton {...props} ref={ref} isActive onClearRequest={onClear}>
      <CanonicalName id={selected} />
    </FilterButton>
  }
  if (appliedFilters.length > 1) {
    return <FilterButton isActive {...props} ref={ref} onClearRequest={onClear}>
      {appliedFilters.length} scientific names
    </FilterButton>
  }
  return <FilterButton {...props} ref={ref}>Scientific name</FilterButton>
});

FilterButton.displayName = 'FilterButton';
FilterButton.propTypes = {
  filter: PropTypes.object,
  filterName: PropTypes.string
};
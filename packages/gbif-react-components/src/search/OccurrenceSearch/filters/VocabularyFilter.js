import React, { useState, useContext } from "react";
import PropTypes from 'prop-types';
import Popover from '../../../components/Popover/Popover';
import { Button } from '../../../components/Button';
import nanoid from 'nanoid';
import FilterContext from './state/FilterContext';
import keyBy from 'lodash/keyBy';
import get from 'lodash/get';
// import formatters from '../displayNames/formatters';
import { getVocabulary } from './getVocabulary';
import { Option, Filter } from '../../../widgets/Filter';

function PopupContent({ onApply, onCancel, onFilterChange, focusRef, vocabulary, filterName, initFilter }) {
  const [id] = React.useState(nanoid);

  return <Filter
    onApply={onApply}
    onCancel={onCancel}
    title={vocabulary.label}
    aboutText={vocabulary.definition}
    hasHelpTexts={vocabulary.hasConceptDefinitions}
    onFilterChange={onFilterChange}
    filterName={filterName}
    formId={id}
    defaultFilter={initFilter}
  >
    {({ helpVisible, toggle, checkedMap, formId }) => <div>
      <form id={formId} onSubmit={e => e.preventDefault()} >
        {vocabulary && vocabulary.concepts.map((concept, index) => {
          return <Option
            ref={index === 0 ? focusRef : null}
            key={concept.name}
            helpVisible={helpVisible}
            helpText={concept.definition}
            label={concept.label}
            checked={checkedMap.has(concept.name)}
            onChange={() => toggle(vocabulary.name, concept.name)}
          />
        })}
      </form>
    </div>}
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

export const VocabularyFilter = ({ vocabularyName = 'BasisOfRecord', placement, ...props }) => {
  const currentFilterContext = useContext(FilterContext);
  const [vocabulary, setVocabulary] = useState();
  const [tmpFilter, setFilter] = useState(currentFilterContext.filter);

  getVocabulary(vocabularyName, 'eng').then(v => setVocabulary(v)).catch(err => console.error(err));

  return (
    <Popover
      onClickOutside={popover => { currentFilterContext.setFilter(tmpFilter); popover.hide() }}
      style={{ width: '22em', maxWidth: '100%' }}
      aria-label={`Filter on ${vocabularyName}`}
      placement={placement}
      trigger={<FilterButton {...props} vocabulary={vocabulary} filter={currentFilterContext.filter}></FilterButton>}
    >
      {({ popover, focusRef }) => {
        return (vocabulary && <PopupContent
          filterName={vocabularyName}
          vocabulary={vocabulary}
          onApply={filter => { currentFilterContext.setFilter(filter); popover.hide() }}
          onCancel={() => { popover.hide(); }}
          focusRef={focusRef}
          onFilterChange={filter => setFilter(filter)}
          initFilter={currentFilterContext.filter}
        />)
      }}
    </Popover>
  );
}
VocabularyFilter.propTypes = {
  vocabularyName: PropTypes.string,
  placement: PropTypes.string
};

const FilterButton = React.forwardRef(({ filter, vocabulary, ...props }, ref) => {
  if (!vocabulary) return <Button appearance="primaryOutline" ref={ref} loading={true}>Loading</Button>

  const appliedFiltersSet = new Set(get(filter, `must.${vocabulary.name}`, []));
  if (appliedFiltersSet.size === 1) {
    const selected = keyBy(vocabulary.concepts, 'name')[filter.must[vocabulary.name][0]].label;
    return <Button {...props} ref={ref}>{selected}</Button>
  }
  if (appliedFiltersSet.size > 1) {
    return <Button {...props} ref={ref} loading={!vocabulary}>{appliedFiltersSet.size} {vocabulary.label}s</Button>
  }
  return <Button appearance="primaryOutline" {...props} ref={ref} loading={!vocabulary}>{vocabulary.label}</Button>
});

FilterButton.displayName = 'FilterButton';
FilterButton.propTypes = {
  filter: PropTypes.object,
  vocabulary: PropTypes.object
};
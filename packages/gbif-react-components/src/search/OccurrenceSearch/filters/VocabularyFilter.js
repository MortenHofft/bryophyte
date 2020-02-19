import React, { useState, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import Popover from '../../../components/Popover/Popover';
import { Button } from '../../../components/Button';
import { Prose } from '../../../typography/Prose';
import nanoid from 'nanoid';
import FilterState from './state/FilterState';
import FilterContext from './state/FilterContext';
import { get, keyBy } from 'lodash';
import { MenuAction, MenuToggle } from '../../../components/Menu';
// import formatters from '../displayNames/formatters';
import { getVocabulary } from './getVocabulary';
import { Header, Footer, Option, SummaryBar, FilterBody, FilterBodyDescription, FilterBox } from '../../../widgets/Filter';

const PopupContent = ({ vocabulary, filterName, tmpFilter, setFilter, onCancel, onApply, focusRef }) => {
  const [id] = React.useState(nanoid);
  const [isAboutVisible, showAbout] = useState(false);
  const [help, showHelp] = useState(false);
  // const [vocabulary, setVocabulary] = useState(false);

  // getVocabulary(vocabularyName, 'eng').then(v => setVocabulary(v)).catch(err => console.error(err));

  return <FilterState filter={tmpFilter} onChange={updatedFilter => setFilter(updatedFilter)}>
    <FilterContext.Consumer>
      {({ setField, toggle, filter }) => {
        const checkedMap = new Set(get(filter, `must.${filterName}`, []));
        return <FilterBox>
          <Header menuItems={(vocabulary.definition || vocabulary.hasConceptDefinitions) ? menuState => [
            ...vocabulary.definition ? [<MenuAction key="about" onClick={() => { showAbout(true); menuState.hide() }}>About this filter</MenuAction>] : [],
            ...vocabulary.hasConceptDefinitions ? [<MenuToggle key="help" disabled={isAboutVisible} style={{ opacity: isAboutVisible ? .5 : 1 }} checked={help} onChange={() => showHelp(!help)}>Show help texts</MenuToggle>] : []
          ] : null}>
            {vocabulary && vocabulary.label}
          </Header>
          {!isAboutVisible && vocabulary &&
            <>
              <SummaryBar count={checkedMap.size} onClear={() => setField(vocabulary.name, [])} />
              <FilterBody>
                <form id={id} onSubmit={e => e.preventDefault()} >
                  {vocabulary && vocabulary.concepts.map((concept, index) => {
                    return <Option
                      key={concept.name}
                      helpVisible={help}
                      ref={index === 0 ? focusRef : null}
                      helpText={concept.definition}
                      label={concept.label}
                      checked={checkedMap.has(concept.name)}
                      onChange={() => toggle(vocabulary.name, concept.name)}
                    />
                  })}
                </form>
              </FilterBody>
            </>
          }
          {isAboutVisible &&
            <Prose as={FilterBodyDescription}>
              {vocabulary.definition}
            </Prose>
          }
          <Footer
            formId={id}
            onApply={() => onApply(filter)}
            onCancel={onCancel}
            onBack={() => showAbout(false)}
            showBack={isAboutVisible}
          />
        </FilterBox>
      }}
    </FilterContext.Consumer>
  </FilterState>
}

PopupContent.propTypes = {
  vocabularyName: PropTypes.string,
  filterName: PropTypes.string,
  tmpFilter: PropTypes.object,
  vocabulary: PropTypes.object,
  setFilter: PropTypes.func,
  onCancel: PropTypes.func,
  onApply: PropTypes.func,
  focusRef: PropTypes.any
};

{/* <Button popup={<BasisOfRecordFilter />}>Human observation</Button> */}

// const FilterButton2 = React.forwardRef(({name, ...props}, ref) => {
//   const vocabularyName = 'BasisOfRecord';
//   const currentFilterContext = useContext(FilterContext);
//   const [tmpFilter, setFilter] = useState(currentFilterContext.filter);
//   const [vocabulary, setVocabulary] = useState(false);
//   getVocabulary(vocabularyName, 'eng').then(v => setVocabulary(v)).catch(err => console.error(err));

//   useEffect(() => {
//     setFilter(currentFilterContext.filter);
//   }, [currentFilterContext.filter]);

//   return (<Popover
//     style={{ width: '22em', maxWidth: '100%' }}
//     onClose={() => currentFilterContext.setFilter(tmpFilter)}
//     aria-label={`Filter on ${vocabularyName}`}
//     trigger={name ? <Button {...props} ref={ref}>{name}</Button> : <Button appearance="primaryOutline" {...props} ref={ref}>{vocabulary.label}</Button>}
//   >
//     {({ popover, focusRef }) => {
//       return (vocabulary && <PopupContent
//         filterName={vocabularyName}
//         vocabularyName={vocabularyName}
//         vocabulary={vocabulary}
//         tmpFilter={tmpFilter}
//         setFilter={setFilter}
//         onApply={() => { currentFilterContext.setFilter(tmpFilter); popover.hide() }}
//         onCancel={() => { setFilter(currentFilterContext.filter); popover.hide(); }}
//         focusRef={focusRef}
//       />)
//     }}
//   </Popover>)
// });
// FilterButton2.displayName = 'FilterButton2';

function VocabularyFilter({ vocabularyName = 'BasisOfRecord', placement, ...props }) {
  // return (
  //   <>
  //   <FilterButton2 name="Observation"/>
  //   <FilterButton2 name="Machine observation"/>
  //   </>
  // )
  const currentFilterContext = useContext(FilterContext);
  const [tmpFilter, setFilter] = useState(currentFilterContext.filter);
  const [vocabulary, setVocabulary] = useState(false);

  getVocabulary(vocabularyName, 'eng').then(v => setVocabulary(v)).catch(err => console.error(err));

  useEffect(() => {
    setFilter(currentFilterContext.filter);
  }, [currentFilterContext.filter]);

  return (
    <Popover
      style={{ width: '22em', maxWidth: '100%' }}
      onClickOutside={popover => {currentFilterContext.setFilter(tmpFilter); popover.hide()}}
      aria-label={`Filter on ${vocabularyName}`}
      placement={placement}
      trigger={<FilterButton {...props} vocabulary={vocabulary} filter={currentFilterContext.filter}></FilterButton>}
    >
      {({ popover, focusRef }) => {
        return (vocabulary && <PopupContent
          filterName={vocabularyName}
          vocabularyName={vocabularyName}
          vocabulary={vocabulary}
          tmpFilter={tmpFilter}
          setFilter={setFilter}
          onApply={() => { currentFilterContext.setFilter(tmpFilter); popover.hide() }}
          onCancel={() => { setFilter(currentFilterContext.filter); popover.hide(); }}
          focusRef={focusRef}
        />)
      }}
    </Popover>
  );
}

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

export default VocabularyFilter;
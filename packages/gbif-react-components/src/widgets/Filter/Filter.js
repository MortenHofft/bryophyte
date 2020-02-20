import React from "react";
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import SummaryBar from './SummaryBar';
import { Prose } from '../../typography/Prose';
import { FilterBody, FilterBodyDescription, FilterBox } from './misc';
import { MenuAction, MenuToggle } from '../../components/Menu';
import { uncontrollable } from 'uncontrollable';
import { get } from 'lodash';

import FilterState from '../../search/OccurrenceSearch/filters/state/FilterState';
import FilterContext from '../../search/OccurrenceSearch/filters/state/FilterContext';

function Filter({ children, onApply, onCancel, title, aboutText, hasHelpTexts, filterName, formId, filter: tmpFilter, onFilterChange, aboutVisible, onAboutChange, helpVisible, onHelpChange }) {
  return <FilterState filter={tmpFilter} onChange={updatedFilter => onFilterChange(updatedFilter)}>
    <FilterContext.Consumer>
      {({ setField, toggle, filter }) => {
        const checkedMap = new Set(get(filter, `must.${filterName}`, []));
        return <FilterBox>
          <Header menuItems={menuState => [
            ...aboutText ? [<MenuAction key="About" onClick={() => { onAboutChange(true); menuState.hide() }}>About this filter</MenuAction>] : [],
            ...hasHelpTexts ? [<MenuToggle key="Help" disabled={aboutVisible} style={{ opacity: aboutVisible ? .5 : 1 }} checked={!!helpVisible} onChange={() => onHelpChange(!helpVisible)}>Show help texts</MenuToggle>] : []
          ]}>
            {title}
          </Header>
          {!aboutVisible &&
            <>
              <SummaryBar count={checkedMap.size} onClear={() => setField(filterName, [])} />
              <FilterBody>
                {children({ helpVisible, setField, toggle, filter, checkedMap })}
              </FilterBody>
            </>}
          {aboutVisible && <Prose as={FilterBodyDescription}>
            {aboutText}
          </Prose>}
          <Footer
            formId={formId}
            showBack={aboutVisible}
            onApply={() => onApply(filter)}
            onCancel={() => onCancel(filter)}
            onBack={() => onAboutChange(false)}
          />
        </FilterBox>
      }}
    </FilterContext.Consumer>
  </FilterState>
}

Filter.propTypes = {
  children: PropTypes.func,
  onApply: PropTypes.func,
  onCancel: PropTypes.func,
  onFilterChange: PropTypes.func,
  onAboutChange: PropTypes.func,
  onHelpChange: PropTypes.func,
  title: PropTypes.node,
  aboutText: PropTypes.node,
  hasHelpTexts: PropTypes.bool,
  aboutVisible: PropTypes.bool,
  helpVisible: PropTypes.bool,
  filterName: PropTypes.string,
  filter: PropTypes.object,
  formId: PropTypes.string,
}

export const UncontrollableFilter = uncontrollable(Filter, {
  aboutVisible: 'onAboutChange',
  helpVisible: 'onHelpChange',
  filter: 'onFilterChange'
});

export default UncontrollableFilter;
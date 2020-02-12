// This file holds the majority of the app state: current filters, current view, update function etc.
import React from 'react';
import PropTypes from 'prop-types';
import Context from './FilterContext';
import { uncontrollable } from 'uncontrollable';
import { get, uniqWith, cloneDeep } from 'lodash';
import isEqual from 'react-fast-compare';
import hash from 'object-hash';

class FilterState extends React.Component {
  static propTypes = {
    filter: PropTypes.object,
    onChange: PropTypes.func
  }

  setFilter = async filter => {
    if (typeof filter === 'object') {
      filter = cloneDeep(filter);
      Object.keys(filter).forEach(key => {
        if (typeof filter[key] === 'undefined') delete filter[key];
      })
      if (Object.keys(filter).length === 0) filter = undefined;
    }
    this.props.onChange(filter);
  }

  setField = async (field, value, should = true) => {
    const filter = this.props.filter ? cloneDeep(this.props.filter) : {};
    const type = should ? 'should' : 'should_not';
    this.setFilter({
      ...filter,
      [type]: {
        ...filter[type],
        [field]: value
      }
    });
  }

  add = async (field, value, should = true) => {
    const type = should ? 'should' : 'should_not';
    let values = get(this.props.filter, `${type}.${field}`, []);
    values = values.concat(value);
    values = uniqWith(values, isEqual);
    this.setField(field, values, should);
  };

  remove = async (field, value, should = true) => {
    const type = should ? 'should' : 'should_not';
    let values = get(this.props.filter, `${type}.${field}`, []);
    values = values.filter(e => !isEqual(e, value));
    this.setField(field, values, should);
  };

  toggle = async (field, value, should = true) => {
    const type = should ? 'should' : 'should_not';
    let values = get(this.props.filter, `${type}.${field}`, []);
    if (values.some(e => isEqual(e, value))) {
      this.remove(field, value, should);
    } else {
      this.add(field, value, should);
    }
  };

  render() {
    const contextValue = {
      setField: this.setField, // updates a single field
      setFilter: this.setFilter, // updates the filter as a whole
      add: this.add,
      remove: this.remove,
      toggle: this.toggle,
      filter: this.props.filter,
      // filterHash: hash(this.props.filter)
    };
    return (
      <Context.Provider value={contextValue}>
        {/* <pre>{JSON.stringify(this.props.filter, null, 2)}</pre> */}
        {this.props.children}
      </Context.Provider>
    );
  }
}

// export default FilterState;

const UncontrollableFilterState = uncontrollable(FilterState, {
  filter: 'onChange'
});

export default UncontrollableFilterState;
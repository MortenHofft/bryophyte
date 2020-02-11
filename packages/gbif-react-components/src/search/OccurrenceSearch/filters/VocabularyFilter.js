import React, { useState, useContext, useEffect } from "react";
import { css, cx } from 'emotion';
import styled from '@emotion/styled'
import Popover from '/components/Popover/Popover';
import { Button, TextButton } from 'components/Button';
import Level from 'layout/Level';
import { MdMoreVert } from "react-icons/md";
import nanoid from 'nanoid';
import FilterState from './state/FilterState';
import FilterContext from './state/FilterContext';
import { get, keyBy, cloneDeep } from 'lodash';
// import update from 'immutability-helper';
import formatters from '../displayNames/formatters';

import { getVocabulary } from './getVocabulary';

function VocabularyFilter({ vocabularyName, ...props }) {
  const [id] = React.useState(nanoid);
  const currentFilterContext = useContext(FilterContext);
  const [filter, setFilter] = useState(cloneDeep(currentFilterContext.filter));
  const [vocabulary, setVocabulary] = useState(false);
  
  useEffect(() => {
    setFilter(cloneDeep(currentFilterContext.filter));
  }, [currentFilterContext]);

  const Title = formatters(vocabularyName).component;
  getVocabulary(vocabularyName, 'eng').then(v => setVocabulary(v)).catch(err => console.error(err));

  const popupContent = (popover, ref) => <FilterState filter={filter} onChange={updatedFilter => setFilter(updatedFilter)}>
    <FilterContext.Consumer>
      {({ setField, toggle, filter }) => {
        const checkedMap = new Set(get(filter, `should.${vocabularyName}`, []));
        return <div className={filterClass}>
          <Level as="section" className={header}>
            <Level.Left>
              <Level.Item>
                {vocabulary && vocabulary.label}
              </Level.Item>
            </Level.Left>
            <Level.Right>
              <Level.Item>
                <MdMoreVert style={{ fontSize: 24 }} />
              </Level.Item>
            </Level.Right>
          </Level>
          <Level as="div" className={infoHeader}>
            <Level.Left>
              <Level.Item>
                {checkedMap.size} selected
              </Level.Item>
            </Level.Left>
            {checkedMap.size > 0 &&
            <Level.Right>
              <Level.Item onClick={e => setField(vocabulary.name, [])}>
                <TextButton>Clear</TextButton>
              </Level.Item>
            </Level.Right>
            }
          </Level>
          <form className={cx(body, scrollBox)} id={id} onSubmit={e => e.preventDefault()}>
            {vocabulary && vocabulary.concepts.map((concept, index) => {
              return <Level key={concept.name} as="div" className={optionClass}>
                <Level.Left style={{ alignItems: 'flex-start' }}>
                  <Level.Item>
                    <div>
                      <span className={checkbox}>
                        <input type="checkbox" ref={index === 0 ? ref : null} id={`${id}_${concept.name}`} checked={checkedMap.has(concept.name)} onChange={e => toggle(vocabulary.name, concept.name)}></input>
                        <span></span>
                      </span>
                    </div>
                  </Level.Item>
                  <Level.Item>
                    <div>
                      <label htmlFor={`${id}_${concept.name}`}>{concept.label}</label>
                      { concept.definition && <div onClick={e => toggle(vocabulary.name, concept.name)} style={{ marginTop: 4, fontSize: '0.85em', color: '#aaa' }}>
                        {concept.definition }
                      </div>}
                    </div>
                  </Level.Item>
                </Level.Left>
              </Level>
            })}

          </form>
          <Level className={footer}>
            <Level.Left>
              <Level.Item>
                <Button appearance="ghost" onClick={e => { setFilter(currentFilterContext.filter); popover.hide(); }}>Cancel</Button>
              </Level.Item>
            </Level.Left>
            <Level.Right>
              <Level.Item>
                <Button type="submit" form={id} onClick={e => { currentFilterContext.setFilter(filter); popover.hide(); }}>Apply</Button>
              </Level.Item>
            </Level.Right>
          </Level>
        </div>
      }}
    </FilterContext.Consumer>
  </FilterState>

  return (
    <Popover
      style={{ width: 400, maxWidth: '100%' }}
      onClose={e => currentFilterContext.setFilter(filter)}
      aria-label={`Filter on ${vocabularyName}`}
      modal={popupContent}
      trigger={<FilterButton {...props} vocabulary={vocabulary} filter={currentFilterContext.filter}></FilterButton>}
    />
  );
}

const FilterButton = React.forwardRef(({ filter, vocabulary, ...props }, ref) => {
  const appliedFiltersSet = new Set(get(filter, `should.${vocabulary.name}`, []));
  if (appliedFiltersSet.size === 1) {
    const selected = keyBy(vocabulary.concepts, 'name')[filter.should[vocabulary.name][0]].label;
    return <Button {...props} ref={ref}>{ selected }</Button>
  }
  if (appliedFiltersSet.size > 1) {
    return <Button {...props} ref={ref}>{appliedFiltersSet.size} { vocabulary.label }s</Button>
  }
  return <Button appearance="primaryOutline" {...props} ref={ref}>{vocabulary.label}</Button>
});

const optionClass = css`
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const checkbox = css`
  position: relative;
  top: -0.09em;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  vertical-align: middle;
  outline: none;
  cursor: pointer;
  input {
    margin: 0;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
  }
  & input + span {
    position: relative;
    top: 0;
    left: 0;
    display: block;
    width: 1em;
    height: 1em;
    background-color: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    border-collapse: separate;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    &:after {
      position: absolute;
      top: 50%;
      left: 22%;
      display: table;
      width: 5.71428571px;
      height: 9.14285714px;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      -webkit-transform: rotate(45deg) scale(0) translate(-50%, -50%);
      -ms-transform: rotate(45deg) scale(0) translate(-50%, -50%);
      transform: rotate(45deg) scale(0) translate(-50%, -50%);
      opacity: 0;
      -webkit-transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
      transition: all 0.1s cubic-bezier(0.71, -0.46, 0.88, 0.6), opacity 0.1s;
      content: ' ';
    }
  }
  & input:checked + span {
    background-color: #1890ff;
    border-color: #1890ff;
    &:after {
      position: absolute;
      display: table;
      border: 2px solid #fff;
      border-top: 0;
      border-left: 0;
      -webkit-transform: rotate(45deg) scale(1) translate(-50%, -50%);
      -ms-transform: rotate(45deg) scale(1) translate(-50%, -50%);
      transform: rotate(45deg) scale(1) translate(-50%, -50%);
      opacity: 1;
      -webkit-transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
      transition: all 0.2s cubic-bezier(0.12, 0.4, 0.29, 1.46) 0.1s;
      content: ' ';
    }
  }
  & input:focus + span {
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }
`;

const infoHeader = css`
  font-size: .85em;
  color: #999;
  padding: .5em 1.5em;
  font-weight: 200;
`;

const filterClass = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: inherit;
`;

const header = css`
  border-bottom: 1px solid #eee;
  padding: 1.2em 1.5em;
  flex: 0 0 auto;
`;

const body = css`
  /* border-bottom: 1px solid #eee; */
  padding: .5em 1.5em;
  flex: 1 1 auto;
  overflow: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
      width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #686868;
  }
`;

const footer = css`
  padding: .8em 1em;
  flex: 0 0 auto;
`;

// https://stackoverflow.com/questions/9333379/check-if-an-elements-content-is-overflowing
// I would never have thought of this myself.
const scrollBox = css`
  /* background: */
    /* Shadow covers */
    /* linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%, */
    
    /* Shadows */
    /* radial-gradient(50% 0, farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(50% 100%,farthest-side, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%; */
  background:
    /* Shadow covers */
    linear-gradient(white 30%, rgba(255,255,255,0)),
    linear-gradient(rgba(255,255,255,0), white 70%) 0 100%,
    
    /* Shadows */
    linear-gradient(to bottom, #eee 1px, transparent 1px 100%),
    /* linear-gradient(to bottom, #eee 1px, transparent 6px 100%), */
    linear-gradient(to bottom, transparent calc(100% - 1px), #eee calc(100% - 1px) 100%);
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 10px, 100% 10px, 100% 20px, 100% calc(100% - 1px);
  
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`;

export default VocabularyFilter;
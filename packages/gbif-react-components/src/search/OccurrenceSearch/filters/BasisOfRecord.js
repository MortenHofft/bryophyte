import React, { useState, useContext } from "react";
import { css, cx } from 'emotion';
import styled from '@emotion/styled'
import Popover from '/components/Popover/Popover';
import { Button } from 'components/Button';
import Level from 'layout/Level';
import { MdMoreVert } from "react-icons/md";
import nanoid from 'nanoid';
import FilterState from './state/FilterState';
import FilterContext from './state/FilterContext';
import _ from 'lodash';

const options = ['HumanObservation', 'MachineObservation', 'LivingSpecimen', 'FossilSpecimen', 'PreservedSpecimen'];

function BasisOfRecord({ stateApi, ...props }) {
  const [id] = React.useState(nanoid);
  const currentFilterContext = useContext(FilterContext);
  const [filter, setFilter] = useState(currentFilterContext.filter);

  const popupContent = props => <FilterState filter={filter} onChange={updatedFilter => setFilter(updatedFilter)}>
    <FilterContext.Consumer>
      {({ toggle, filter }) => {
        const checkedMap = new Set(_.get(filter, 'should.BasisOfRecord', []));
        return <div className={filter}>
          <Level as="section" className={header}>
            <Level.Left>
              <Level.Item style={{ fontSize: 18, color: '#555' }}>
                Basis of record
            </Level.Item>
            </Level.Left>
            <Level.Right>
              <Level.Item>
                <MdMoreVert style={{ fontSize: 24 }} />
              </Level.Item>
            </Level.Right>
          </Level>
          <form className={cx(body, scrollBox)} id={id} onSubmit={e => e.preventDefault()}>

            <Level as="div" className={infoHeader}>
              <Level.Left>
                <Level.Item>
                  2 selected
                </Level.Item>
              </Level.Left>
              <Level.Right>
                <Level.Item>
                  Clear
                </Level.Item>
              </Level.Right>
            </Level>

            {options.map(option => {
              return <Level key={option} as="div" style={{ marginBottom: 12 }}>
                <Level.Left style={{ alignItems: 'flex-start' }}>
                  <Level.Item>
                    <div>
                      <span className={checkbox}>
                        <input type="checkbox" id={`${id}_${option}`} checked={checkedMap.has(option)} onChange={e => toggle('BasisOfRecord', option)}></input>
                        <span></span>
                      </span>
                    </div>
                  </Level.Item>
                  <Level.Item>
                    <div>
                      <label htmlFor={`${id}_${option}`}>{option}</label>
                      <div style={{ fontSize: '0.85em', color: '#aaa' }}>
                        Some description of the enumeration value in case
                    </div>
                    </div>
                  </Level.Item>
                </Level.Left>
              </Level>
            })}

          </form>
          <Level className={footer}>
            <Level.Left>
              <Level.Item>
                <Button appearance="ghost" onClick={e => { props.hide(); setFilter(currentFilterContext.filter) }}>Cancel</Button>
              </Level.Item>
            </Level.Left>
            <Level.Right>
              <Level.Item>
                <Button type="submit" form={id} onClick={e => { currentFilterContext.setFilter(filter); props.hide(); }}>Apply</Button>
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
      visible
      aria-label="Filter on basis of record"
      modal={popupContent}
      trigger={<Button>Basis of record</Button>}
    />
  );
}

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
  color: #aaa;
  margin-bottom: 10px;
`;

const filter = css`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: inherit;
`;

const header = css`
  border-bottom: 1px solid #eee;
  padding: 1.5em 1em;
  flex: 0 0 auto;
`;

const body = css`
  /* border-bottom: 1px solid #eee; */
  padding: 1em;
  flex: 1 1 auto;
  overflow: auto;
  scrollbar-width: thin;
  &::-webkit-scrollbar {
      width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #686868;
  }
`;

const footer = css`
  padding: 1em;
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
    /* radial-gradient(farthest-side at 50% 0, rgba(0,0,0,.2), rgba(0,0,0,0)),
    radial-gradient(farthest-side at 50% 100%, rgba(0,0,0,.2), rgba(0,0,0,0)) 0 100%; */
    linear-gradient(to bottom, #eee 1px, transparent 1px 100%),
    linear-gradient(to bottom, transparent calc(100% - 1px), #eee calc(100% - 1px) 100%);
    /* linear-gradient(180deg, 
        rgba(0,0,0,0) calc(100% - 2px), 
        rgba(192,192,192,1) calc(100%), 
        rgba(0,0,0,0) calc(100% + 10px)
    ); */
  background-repeat: no-repeat;
  background-color: white;
  background-size: 100% 10px, 100% 10px, 100% 20px, 100% 100%;
  
  /* Opera doesn't support this in the shorthand */
  background-attachment: local, local, scroll, scroll;
`;

export default BasisOfRecord;
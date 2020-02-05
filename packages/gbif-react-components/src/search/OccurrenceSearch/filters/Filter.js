import React from "react";
import { css, cx } from 'emotion';
import Popover from '/components/Popover/Popover';
import { Button } from 'components/Button';

import Downshift from 'downshift';
const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
]

function Filter({ stateApi, ...props }) {

  const popupContent = props => <div>
    <Downshift
      onChange={selection =>
        alert(selection ? `You selected ${selection.value}` : 'Selection Cleared')
      }
      itemToString={item => (item ? item.value : '')}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
        getRootProps,
      }) => (
          <div>
            {/* <label {...getLabelProps()}>Enter a fruit</label> */}
            <div {...getRootProps({}, { suppressRefError: true })}>
              <input className={input} placeholder="Search for species" aria-label="Search for species" aria-placeholder="Puma concolor" {...getInputProps()} />
            </div>
            <ul {...getMenuProps()}>
              {isOpen
                ? items
                  .filter(item => !inputValue || item.value.includes(inputValue))
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item.value,
                        index,
                        item,
                        style: {
                          backgroundColor:
                            highlightedIndex === index ? 'lightgray' : 'white',
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                        },
                      })}
                    >
                      {item.value}
                    </li>
                  ))
                : null}
            </ul>
          </div>
        )}
    </Downshift>
    <div className={helpText}>
      Please enter a scienitific name. Only latin names are applicable. Searching for higher groups will return all species and sub-groups.
    </div>
    <Button onClick={e => {stateApi.setField('update', 'fromFilter', false); props.hide()}}>Apply</Button>
  </div>

  return (
    <Popover
      style={{maxWidth: 400}}
      visible
      aria-label="Location filter"
      modal={popupContent}
      trigger={<Button>Species or group</Button>}
    />
  );
}

const helpText = css`
  color: #697b8c;
  margin: 1em 0;
  font-size: 80%;
  border-left: 4px solid #ebedf0;
  padding-left: .8em;
`;
const input = css`
  display: block;
  width: 100%;
  border-radius: 0.2rem;
  padding: 0.5em 0.75em;
  font-size: 100%;
  border: 1px solid rgba(0,0,0,0.25);
  color: #4D4D4D;
  margin: 0 !important;
  :not([type="checkbox"]):not([type="radio"]) {
    transition: box-shadow 0.15s ease-in-out;
    outline: 0;
    &:focus {
      box-shadow: 0 0 0 0.2em rgba(0,109,255,0.4);
      position: relative;
      z-index: 2;
    }
  }
`;

export default Filter;
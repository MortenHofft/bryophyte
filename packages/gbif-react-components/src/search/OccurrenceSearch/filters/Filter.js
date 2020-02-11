import React from "react";
import { css, cx } from 'emotion';
import styled from '@emotion/styled';
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
          <div style={{position: 'relative'}}>
            {/* <label {...getLabelProps()}>Enter a fruit</label> */}
            <div {...getRootProps({}, { suppressRefError: true })}>
              <input className={input} placeholder="Search for species" aria-label="Search for species" aria-placeholder="Puma concolor" {...getInputProps()} />
            </div>
            <Menu {...getMenuProps({ isOpen })}>
              {isOpen || true
                ? items
                  .filter(item => !inputValue || item.value.includes(inputValue))
                  .map((item, index) => (
                    <Item
                      key={item.id}
                      {...getItemProps({
                        item,
                        index,
                        isActive: highlightedIndex === index,
                        isSelected: selectedItem === item,
                      })}
                    >
                      {itemToString(item)}
                    </Item>
                  ))
                : null}
            </Menu>
          </div>
        )}
    </Downshift>
    <div className={helpText}>
      Please enter a scienitific name. Only latin names are applicable. Searching for higher groups will return all species and sub-groups.
    </div>
    <Button onClick={e => { stateApi.setField('update', 'fromFilter', false); props.hide() }}>Apply</Button>
  </div>

  return (
    <Popover
      style={{ maxWidth: 400 }}
      visible
      aria-label="Location filter"
      modal={popupContent}
      trigger={<Button>Species or group</Button>}
    />
  );
}

const itemToString = i => (i ? i.value : '')

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

const BaseMenu = styled('ul')(
  {
    padding: 0,
    marginTop: 0,
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
    maxHeight: '20rem',
    overflowY: 'auto',
    overflowX: 'hidden',
    outline: '0',
    zIndex: 1000,
    transition: 'opacity .1s ease',
    borderRadius: '0 0 .28571429rem .28571429rem',
    boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
    borderColor: '#96c8da',
    borderTopWidth: '0',
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderStyle: 'solid',
  },
  ({ isOpen }) => ({
    border: isOpen ? null : 'none',
  }),
)

const Menu = React.forwardRef((props, ref) => (
  <BaseMenu innerRef={ref} {...props} />
))

const Item = styled('li')(
  {
    position: 'relative',
    cursor: 'pointer',
    display: 'block',
    border: 'none',
    height: 'auto',
    textAlign: 'left',
    borderTop: 'none',
    lineHeight: '1em',
    color: 'rgba(0,0,0,.87)',
    fontSize: '1rem',
    textTransform: 'none',
    fontWeight: '400',
    boxShadow: 'none',
    padding: '.8rem 1.1rem',
    whiteSpace: 'normal',
    wordWrap: 'normal',
  },
  ({ isActive, isSelected }) => {
    const styles = []
    if (isActive) {
      styles.push({
        color: 'rgba(0,0,0,.95)',
        background: 'rgba(0,0,0,.03)',
      })
    }
    if (isSelected) {
      styles.push({
        color: 'rgba(0,0,0,.95)',
        fontWeight: '700',
      })
    }
    return styles
  },
)

export default Filter;
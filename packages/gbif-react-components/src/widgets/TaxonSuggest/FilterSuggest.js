/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState, useEffect, useContext } from "react";
import ThemeContext from '../../style/themes/ThemeContext';
import { useCombobox } from "downshift"; // example usage here https://codesandbox.io/s/usecombobox-usage-evufg
import { useDebounce } from "use-debounce"; // example here https://codesandbox.io/s/rr40wnropq
import axios from '../../search/OccurrenceSearch/api/axios';

function FilterSuggest({ suggest, keyBy, itemToString, itemRenderer, selectedSet, onSelect }) {
  const [inputItems, setInputItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const theme = useContext(ThemeContext);

  const {
    isOpen,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectedItem,
    setInputValue,
    inputValue
  } = useCombobox({
    items: inputItems,
    // onInputValueChange: ({inputValue, selectedItem}) => {
    //   if (inputValue === '' || (selectedItem && inputValue === itemToString(selectedItem))) return;
    //   setLoading(true);
    // },
    onSelectedItemChange: ({selectedItem}) => {
      setInputValue('');
      setLoading(false);
      if (typeof onSelect === 'function') onSelect(selectedItem);
    },
    itemToString
  });

  const [debouncedText] = useDebounce(inputValue, 200);
  useEffect(
    () => {
      let request;
      if (debouncedText) {
        setLoading(true);
        request = suggest(debouncedText);
        request.then(response => { setInputItems(response.data); })
          .catch(e => {
            if (axios.isCancel(e)) {
              return;
            }
            setInputItems([]);
          })
          .finally(() => setLoading(false));
      }
      return () => {
        if (request) {
          request.cancel(
            "Canceled because of component unmounted or debounce Text changed"
          );
        }
        setLoading(false);
      };
    },
    [debouncedText, suggest]
  );

  return (
    <>
      {/* <label {...getLabelProps()}>Choose an element:</label> */}
      <div css={filterSuggestInput(theme)} className="gbif-input gbif-filter-input" {...getComboboxProps()}>
        <input {...getInputProps()} />
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              key={item[keyBy]}
              {...getItemProps({ item, index })}
            >
              {itemRenderer({
                item, 
                isHighlighted: highlightedIndex === index, 
                selected: selectedSet && selectedSet.has(item[keyBy])
                })}
            </li>
          ))}
      </ul>
      {loading && <h1>Loading</h1>}
    </>
  );
}



export const filterSuggestInput = theme => css`
  background: block;
  background: pink;
`;

function getData(q, options) {
  return axios.get(`//api.gbif.org/v1/species/suggest?q=${q}`, options);
}

const Example = () => {
  const selectedSet = new Set([1,2,3,4,5])
  return <FilterSuggest 
    suggest={getData} 
    keyBy="key" 
    itemToString={item => item.scientificName}
    selectedSet={selectedSet}
    itemRenderer={({item, isHighlighted, selected}) => <div style={{background: isHighlighted ? 'pink' : ''}}>
      {item.scientificName}
      {selected && <span>ALREADY SELECTED</span>}
      </div>}
    onSelect={item => console.log(item)}
    />
}


export default Example;
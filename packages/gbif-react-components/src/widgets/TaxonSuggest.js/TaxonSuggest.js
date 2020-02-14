import React, { useState, useEffect } from "react";
import { css, cx } from 'emotion';
import formatters from '../../search/OccurrenceSearch/displayNames/formatters';
import { useCombobox } from "downshift"; // example usage here https://codesandbox.io/s/usecombobox-usage-evufg
import { useDebounce } from "use-debounce"; // example here https://codesandbox.io/s/rr40wnropq

const items = ['apple', 'pear', 'banana'];

async function getData(value) {
  if (value === '') return [];
  const result = items.filter(item =>
    item.toLowerCase().startsWith(value.toLowerCase())
  );

  return new Promise((resolve, reject) => {
    setTimeout( function() {
      resolve(result);
    }, 250);
  }) 
}
function TaxonSuggest() {
  const [inputItems, setInputItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onInputValueChange: async ({ inputValue }) => {
      setLoading(true);
      const results = await getData(inputValue);
      setInputItems(results);
      setLoading(false);
    }
  });

  return (
    <>
      <label {...getLabelProps()}>Choose an element:</label>
      <div style={{ display: "inline-block" }} {...getComboboxProps()}>
        <input {...getInputProps()} />
        <button {...getToggleButtonProps()} aria-label="toggle menu">
          &#8595;
        </button>
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item}
            </li>
          ))}
      </ul>
      {loading && <h1>Loading</h1>}
    </>
  );
}

const Example = props => {
  return <TaxonSuggest />
}


export default Example;
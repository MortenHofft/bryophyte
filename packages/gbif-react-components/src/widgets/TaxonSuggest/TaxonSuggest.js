import React, { useState, useEffect } from "react";
import { css, cx } from 'emotion';
import formatters from '../../search/OccurrenceSearch/displayNames/formatters';
import { useCombobox } from "downshift"; // example usage here https://codesandbox.io/s/usecombobox-usage-evufg
import { useDebounce } from "use-debounce"; // example here https://codesandbox.io/s/rr40wnropq
import axios from '../../search/OccurrenceSearch/api/axios';
// import axios from 'axios';

// async function getData(q, token) {
//   return axios.get(`http://api.gbif.org/v1/species/suggest?q=${q}`, {
//     cancelToken: token
//   });
// }

function getData(q) {
  return axios.get(`http://api.gbif.org/v1/species/suggest?q=${q}`);
}

function TaxonSuggest() {
  const [inputItems, setInputItems] = useState([]);
  const [loading, setLoading] = useState(false);

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
    onInputValueChange: async ({inputValue, selectedItem}) => {
      // if (inputValue === '' || (selectedItem && inputValue === selectedItem.scientificName)) return;
      // setLoading(true);
      // const results = await getData(inputValue);
      // setInputItems(results);
      // setLoading(false);
      if (debouncedText) {
        console.log('inside debounce ', debouncedText);
      }
    },
    onSelectedItemChange: () => {
      setInputValue('');
    },
    itemToString: item => item.scientificName
  });

  const [debouncedText] = useDebounce(inputValue, 500);
  useEffect(
    // () => {
    //   const source = axios.CancelToken.source();
    //   if (debouncedText) {
    //     getData(debouncedText, source.token)
    //       .then(response => setInputItems(response.data))
    //       .catch(() => {
    //         if (axios.isCancel(source)) {
    //           return;
    //         }
    //         setInputItems([]);
    //       });
    //   }
    //   return () => {
    //     console.log('cancel on change and unmount');
    //     source.cancel(
    //       "Canceled because of component unmounted or debounce Text changed"
    //     );
    //   };
    // },
    () => {
      let request;
      if (debouncedText) {
        request = getData(debouncedText);
        request.then(response => setInputItems(response.data))
          .catch(e => {
            if (e.__CANCEL__) return;
            setInputItems([]);
          });
      }
      return () => {
        console.log('cancel on change and unmount');
        if (request && request.cancel) {
          request.cancel(
            "Canceled because of component unmounted or debounce Text changed"
          );
        }
      };
    },
    [debouncedText]
  );

  return (
    <>
      <label {...getLabelProps()}>Choose an element:</label>
      <div style={{ display: "inline-block" }} {...getComboboxProps()}>
        <input {...getInputProps()} />
      </div>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={item.key}
              {...getItemProps({ item, index })}
            >
              {item.scientificName}
              <div>{item.canonicalName}</div>
            </li>
          ))}
      </ul>
      {loading && <h1>Loading</h1>}
      <h1>{selectedItem && selectedItem.scientificName}</h1>
    </>
  );
}

const Example = props => {
  return <TaxonSuggest />
}


export default Example;
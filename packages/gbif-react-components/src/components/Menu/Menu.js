import React from "react";
import {
  useMenuState,
  Menu as BaseMenu,
  MenuItem,
  MenuDisclosure
} from "reakit/Menu";

import Button from '../Button/Button';

function Menu({ disclosure, items, ...props }) {
  const menu = useMenuState();
  return (
    <>
      <MenuDisclosure {...menu} {...disclosure.props}>
        {disclosureProps => React.cloneElement(disclosure, disclosureProps)}
      </MenuDisclosure>
      <BaseMenu {...menu} {...props}>
        {items.map((item, i) => (
          <MenuItem {...menu} {...item.props} key={i}>
            {itemProps => React.cloneElement(item, itemProps)}
          </MenuItem>
        ))}
      </BaseMenu>
    </>
  );
}

function Example() {
  return (
    <Menu
      aria-label="Custom menu"
      disclosure={<Button>Custom menu</Button>}
      items={[
        <button>Custom item 1</button>,
        <button>Custom item 2</button>,
        <button>Custom item 3</button>
      ]}
    />
  );
}

const a = x => {
  const t = {
    ArrowRight: options.orientation !== "vertical" && (e => {
      getComputedStyle(e.target).direction === 'rtl' ? options.previous() : options.next()
    })
  }
}

export default Example;
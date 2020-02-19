import { css, cx } from 'emotion';
import React from "react";
import {
  useMenuState,
  Menu as BaseMenu,
  MenuItem,
  MenuButton
} from "reakit/Menu";

import Switch from '../Switch/Switch';
import Box from '../Box/Box';

export const Menu = ({ trigger, placement, items, ...props }) => {
  const menu = useMenuState({ placement: placement || 'bottom-end' });
  return (
    <>
      <MenuButton {...menu} {...trigger.props}>
        {disclosureProps => React.cloneElement(trigger, disclosureProps)}
      </MenuButton>
      <BaseMenu {...menu} {...props} className={focus} style={{zIndex: 999}}>
        <div className={menuContainer}>
          {(typeof items === 'function' ? items(menu) : items).map((item, i) => (
            <MenuItem {...menu} {...item.props} key={i}>
              {itemProps => React.cloneElement(item, itemProps)}
            </MenuItem>
          ))}
        </div>
      </BaseMenu>
    </>
  );
}

export const MenuToggle = React.forwardRef(({
  children,
  onChange,
  className,
  style, 
  ...props
}, ref) => {
  return (
    <label className={cx(menuOption, className)} ref={ref} style={style}>
      <div>{children}</div>
      <div><Switch className="gb-menuOption-inner-switch" onChange={onChange ? onChange : null} {...props} /></div>
    </label>
  )
});

export const MenuAction = React.forwardRef(({
  children,
  ...props
}, ref) => {
  return (
    <Box as="button" ref={ref} className={menuAction} {...props}>
      <span>{children}</span>
    </Box>
  )
});

const focus = css`
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
  }
`;

const menuOption = css`
  padding: 8px 8px;
  display: block;
  display: flex;
  width: 100%;
  justify-content: space-between;
  overflow: hidden;
  font-size: 13px;
  &>* {
    margin: 0 8px;
  }
  &:focus, :focus-within {
    outline: none;
    background: #f5f5f5;
  }
`;

const menuAction = css`
  ${menuOption};
  background: none;
  border: none;
  background: none;
  outline: none;
`;

const menuContainer = css`
  min-width: 180px;
  max-width: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 999;
  outline: 0px;
  border: 1px solid rgba(33, 33, 33, 0.15);
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.05);
`;
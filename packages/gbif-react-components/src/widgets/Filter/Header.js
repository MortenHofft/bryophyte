/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React from "react";

import { Menu } from '../../components/Menu';
import Level from '../../layout/Level';
import { MdMoreVert } from "react-icons/md";
import { Button } from '../../components/Button';

const Header = ({ children, menuItems, ...props }) => {
  return <Level as="section" {...props} css={header}>
    <Level.Left>
      <Level.Item>
        {children}
      </Level.Item>
    </Level.Left>
    {menuItems && <Level.Right>
      <Level.Item>
        <Menu
          aria-label="Custom menu"
          trigger={<Button appearance="text"><MdMoreVert style={{ fontSize: 24 }} /></Button>}
          items={menuItems}
        />
      </Level.Item>
    </Level.Right>}
  </Level>
}

const header = css`
  border-bottom: 1px solid #eee;
  padding: 1.2em 1.5em;
  flex: 0 0 auto;
`;

export default Header;
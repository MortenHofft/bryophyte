/** @jsx jsx */
import { jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { oneOfMany } from '../../utils/util';
import { Box } from '../index';
import styles from './styles';
import { uncontrollable } from 'uncontrollable';

export const TabsContext = React.createContext({});

const ControlledTabs = ({
  activeId,
  onChange,
  ...props
}) => {
  return (
    <TabsContext.Provider value={{ activeId, onChange }} {...props} />
  );
};
ControlledTabs.propTypes = {
  activeId: PropTypes.string,
  defaultActiveId: PropTypes.string,
  onChange: PropTypes.func,
}

export const Tabs = uncontrollable(ControlledTabs, {
  activeId: 'onChange'
});

export const TabList = ({
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return <Box as="ul"
    css={styles.tabList({ theme })}
    {...props} />
};
TabList.displayName = 'TabList';
TabList.propTypes = {
  ['aria-label']: oneOfMany(['aria-label', 'aria-labelledby'])
};

export const Tab = ({
  tabId,
  direction,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const tabContext = useContext(TabsContext);
  const isActive = tabContext.activeId === tabId;
  const tabProps = {
    'aria-selected': isActive ? true : false,
    'aria-controls': `${tabId}_panel`,
    'role': 'button',
    'id': `${tabId}_tab`,
    'onClick': () => tabContext.onChange(tabId)
  }
  return <Box as={'li'}
    css={styles.tab({ theme, isActive, direction })}
    {...tabProps}
    {...props}
  />
};
Tab.displayName = 'Tab';
Tab.propTypes = {
  as: PropTypes.node,
  tabId: PropTypes.string,
  direction: PropTypes.string,
  children: PropTypes.any,
};

export const TabPanel = ({
  tabId,
  lazy,
  ...props
}) => {
  // const theme = useContext(ThemeContext);
  const tabContext = useContext(TabsContext);
  const isActive = tabContext.activeId === tabId;
  if (lazy && !isActive) return null;
  return <Box
    id={`${tabId}_panel`}
    aria-labelledby={`${tabId}_tab`}
    // css={styles.tabs({theme})}
    hidden={!isActive}
    {...props} />
};
TabPanel.displayName = 'TabPanel';
TabPanel.propTypes = {
  tabId: PropTypes.string,
  lazy: PropTypes.bool,
};

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabPanel = TabPanel;
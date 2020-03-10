/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState, useContext } from 'react';
import ThemeContext from 'style/themes/ThemeContext';
// import PropTypes from 'prop-types';
import withContext from './state/withContext';
// import { FormattedMessage, FormattedNumber } from 'react-intl';
import { cssLayout, cssNavBar, cssViewArea, cssFooter, cssFilter, cssViews } from './Layout.styles';
import { Tabs } from '../../components'
import Map from './views/Map';

import { FilterBar } from './FilterBar';

const { TabList, Tab, TabPanel } = Tabs;

const Layout = ({
  className = '',
  ...props
}) => {
  const [activeView, setActiveView] = useState('table');
  const theme = useContext(ThemeContext);
  const prefix = theme.prefix || 'gbif';
  const elementName = 'occurrenceSearchLayout';
  return <div className={`${className} ${prefix}-${elementName}`}
    css={cssLayout({theme})} {...props}>
    <div css={cssNavBar({theme})}>
      <div css={cssFilter({theme})}>
        <FilterBar></FilterBar>
      </div>
      <div css={cssViews({theme})}>
        <Tabs activeId={activeView} onChange={setActiveView} >
          <TabList aria-labelledby="My tabs">
            <Tab tabId="table">Table</Tab>
            <Tab tabId="map">Map</Tab>
            <Tab tabId="gallery">Gallery</Tab>
          </TabList>
        </Tabs>
      </div>
    </div>
    {activeView === 'map' && <TabPanel tabId="map" className={`${prefix}-${elementName}-views`} css={cssViewArea({theme})}>
      <Map />
    </TabPanel>}
    {activeView === 'table' && <TabPanel tabId="map" className={`${prefix}-${elementName}-views`} css={cssViewArea({theme})}>
      Table
    </TabPanel>}
    {activeView === 'gallery' && <TabPanel tabId="map" className={`${prefix}-${elementName}-views`} css={cssViewArea({theme})}>
      Gallery
    </TabPanel>}
    {/* <div className={`${prefix}-${elementName}-body`}>
      <div className={`${prefix}-${elementName}-main`}>content {props.test}<br />
      <FormattedMessage
                id='pagination.pageXofY'
                defaultMessage={'Loading'}
                values={{ current: <FormattedNumber value={10}/>, total: <FormattedNumber value={20000}/> }}
              />
      </div>
      <aside className={`${prefix}-${elementName}-drawer`}>right drawer</aside>
    </div> */}
    <div className={`${prefix}-${elementName}-footer`} css={cssFooter({theme})}>
      <div>Footer content</div>
    </div>
  </div>
}

Layout.propTypes = {
}

export const layout = (theme, prefix, elementName) => css`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  .${prefix}-${elementName}-navBar {
    flex: 0 0 auto;
    flex-direction: column;
    display: flex;
    flex: 1 1 auto;
  }
  .${prefix}-${elementName}-filters {
    border-bottom: 1px solid #eee;
    padding: 8px;
    flex: 0 0 auto;
  }
  .${prefix}-${elementName}-views {
    flex: 1 1 auto;
  }
  .${prefix}-${elementName}-body {
    flex: 1 1 auto;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
  .${prefix}-${elementName}-main {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin: 10;
  }
  .${prefix}-${elementName}-drawer {
    border-left: 1px solid #2a2a38;
  }
  .${prefix}-${elementName}-footer {
    flex: 0 0 auto;
    &>div {
      border-top: 1px solid #2a2a38;
      padding: 5px 12px;
      color: white;
      font-size: 0.85em;
      font-weight: 700;
    }
  }
`;

const mapContextToProps = ({ test }) => ({ test });
export default withContext(mapContextToProps)(Layout);
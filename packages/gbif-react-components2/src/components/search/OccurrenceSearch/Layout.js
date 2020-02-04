/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useTheme } from 'emotion-theming';
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { MdClose } from "react-icons/md";
import withContext from './state/withContext';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import { Tabs } from "../../layout/Tabs";

import { FilterBar } from './FilterBar';
const Tab = Tabs.Tab;

const Layout = ({
  className = '',
  ...props
}) => {
  const [key, setKey] = useState('home');
  const theme = useTheme();
  const prefix = theme.prefix || 'gbif';
  const elementName = 'occurrenceSearchLayout';
  return <div className={`${className} ${prefix}-${elementName}`}
    css={css`${layout(theme, prefix, elementName)}`} {...props}>
    <div className={`${prefix}-${elementName}-navBar`}>
      <div className={`${prefix}-${elementName}-filters`}>
        <FilterBar></FilterBar>
      </div>
      <div className={`${prefix}-${elementName}-views`}>
      <Tabs activeKey={key} onSelect={k => setKey(k)}>
        <Tab eventKey="home">
          Species or Group
        </Tab>
        <Tab eventKey="profile">
          Second Option<MdClose style={{marginLeft: 8}}/>
        </Tab>
        <Tab eventKey="contact" disabled>
          third
        </Tab>
      </Tabs>
      </div>
    </div>
    <div className={`${prefix}-${elementName}-body`}>
      <div className={`${prefix}-${elementName}-main`}>content {props.test}<br />
      <FormattedMessage
                id='pagination.pageXofY'
                defaultMessage={'Loading'}
                values={{ current: <FormattedNumber value={10}/>, total: <FormattedNumber value={20000}/> }}
              />
      </div>
      {/* <aside className={`${prefix}-${elementName}-drawer`}>right drawer</aside> */}
    </div>
    <div className={`${prefix}-${elementName}-footer`}>
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
  }
  .${prefix}-${elementName}-filters {
    border-bottom: 1px solid #2a2a38;
    padding: 8px;
  }
  .${prefix}-${elementName}-views {
    
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
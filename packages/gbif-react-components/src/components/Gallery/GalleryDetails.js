/** @jsx jsx */
import { jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext, useEffect, useState, useCallback } from 'react';
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";
import { MdInfo, MdClose, MdChevronLeft, MdChevronRight } from 'react-icons/md'
// import PropTypes from 'prop-types';
import { keyCodes } from '../../utils/util';
import { ZoomableImage, Button, Row, Col, Tabs } from '../index';
import { detailPage, detailHeader, detailPrev, detailNext, detailHeaderDescription, detailMainWrapper, detailMain, detailDrawerBar, detailDrawerContent } from './styles';

const { TabList, Tab, TabPanel } = Tabs;

export const GalleryDetails = ({
  closeRequest,
  item,
  title,
  subtitle,
  details,
  previous,
  next,
  imageSrc,
  ...props
}) => {
  const [activeId, setTab] = useState('details');
  const theme = useContext(ThemeContext);

  useEffect(() => {
    function handleKeypress(e) {
      switch (e.which) {
        case keyCodes.LEFT_ARROW: previous(); return;
        case keyCodes.RIGHT_ARROW: next(); return;
        default: return;
      }
    }
    if (document) document.addEventListener("keydown", handleKeypress, false);

    return function cleanup() {
      if (document) document.removeEventListener("keydown", handleKeypress, false);
    }
  }, []);

  return <Tabs activeId={activeId} onChange={id => setTab(id === activeId ? undefined : id)}>
    <Row as="section" direction="column" wrap="nowrap" {...props} css={detailPage({ theme })}>
      <Row css={detailHeader} alignItems="center">
        <Col>
          {item && <h2>{title}</h2>}
          {subtitle && <div css={detailHeaderDescription}>
            {subtitle}
          </div>}
        </Col>
        <Col grow={false}>
          <Button appearance="text" onClick={closeRequest}>
            <MdClose />
          </Button>
        </Col>
      </Row>
      <Row css={detailMainWrapper} wrap="nowrap">
        <Col css={detailMain} shrink={true} basis="100%">
          <div css={detailPrev} onClick={() => previous()}><MdChevronLeft /></div>
          {item && <ZoomableImage src={imageSrc(item)} />}
          <div css={detailNext} onClick={() => next()}><MdChevronRight /></div>
        </Col>
        {details && <>
          <Col shrink={false} grow={false} css={detailDrawerBar}>
            <TabList aria-label="Details">
              <Tab tabId="details" direction="left">
                <MdInfo />
              </Tab>
            </TabList>
          </Col>
          <Col shrink={false} grow={false} css={detailDrawerContent}>
            <TabPanel tabId='details'>
              {details(item)}
            </TabPanel>
          </Col>
        </>}
      </Row>
    </Row>
  </Tabs>
};

GalleryDetails.displayName = 'Gallery';

// Gallery.propTypes = {

// };

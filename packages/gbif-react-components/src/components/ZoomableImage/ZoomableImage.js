/** @jsx jsx */
import { jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext, useRef, useState } from 'react';
import { MdFullscreen, MdFullscreenExit } from 'react-icons/md';
import PropTypes from 'prop-types';
// import { oneOfMany } from '../../utils/util';
import {Box, Button} from '../index';
import styles from './styles';

export const ZoomableImage = React.forwardRef(({
  src,
  ...props
}, ref) => {
  const theme = useContext(ThemeContext);
  const [isFullscreen, setFullscreen] = useState();
  const wrapperRef = useRef(null);

  return <Box ref={wrapperRef} css={styles.zoomableImage({ theme, src })} {...props}>
    <div css={styles.toolBar({ theme, src })}>
      <Button appearance="text" ref={ref} onClick={() => {
        if (isFullscreen) document.exitFullscreen();
        else wrapperRef.current.requestFullscreen();
        setFullscreen(!isFullscreen);
        }}>
        {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
      </Button>
    </div>
  </Box>
});

ZoomableImage.displayName = 'ZoomableImage';

ZoomableImage.propTypes = {
  as: PropTypes.element
};

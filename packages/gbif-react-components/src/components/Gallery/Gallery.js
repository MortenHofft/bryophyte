/** @jsx jsx */
import { jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext, useState, useCallback } from 'react';
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";
// import PropTypes from 'prop-types';
// import { oneOfMany } from '../../utils/util';
import { Box, Button } from '../index';
import styles from './styles';
import { GalleryDetails } from './GalleryDetails';

export const GalleryTile = ({ src, onSelect, height, children, ...props }) => {
  const theme = useContext(ThemeContext);
  const [ratio, setRatio] = useState(1);
  const [isValid, setValid] = useState(false);
  const onLoad = useCallback((event) => {
    setValid(true);
    const ratio = (event.target.naturalWidth) / event.target.naturalHeight;
    setRatio(ratio);
  }, []);

  const backgroundImage = `//api.gbif.org/v1/image/unsafe/x150/${encodeURIComponent(src)}`;
  const style = {
    width: ratio * 150,
    backgroundImage: `url('${backgroundImage}')`
  };
  if (ratio < 0.5 || ratio > 2) {
    style.backgroundSize = 'contain';
    style.width = 150;
    if (ratio > 2) style.width = 250;
  }
  return <Button appearance="text" 
    css={styles.galleryTile({ theme })} 
    style={style} 
    onClick={onSelect} {...props}
    title="View details"
    >
    <img src={backgroundImage}
      css={styles.img({ theme })}
      width="150"
      onLoad={onLoad}
      alt="Occurrence evidence"
    />
    {children}
  </Button>
}

export const GalleryCaption = props => {
  const theme = useContext(ThemeContext);
  return <div css={styles.caption({ theme })} {...props} />
};

export const Gallery = ({
  onSelect,
  caption,
  title,
  subtitle,
  details,
  items=[],
  loading,
  loadMore,
  imageSrc,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const dialog = useDialogState();
  const [activeItem, setActive] = useState();
  if (loading) return <h1>Loading</h1>
  return <>
    {!onSelect && <Dialog {...dialog} tabIndex={0} aria-label="Welcome">
      {activeItem && <GalleryDetails 
        closeRequest={() => dialog.hide()} 
        item={activeItem} 
        title={title ? title(activeItem) : 'Unknown'}
        subtitle={title ? subtitle(activeItem) : null}
        details={details}
        imageSrc={imageSrc}
        previous={() => setActive(items[1])}
        next={() => setActive(items[0])}
        />}
    </Dialog>}
    <Box css={styles.gallery({ theme })} {...props}>
      {items.map((e, i) => {
        return <GalleryTile key={i} 
          src={imageSrc(e)} 
          onSelect={onSelect ? () => onSelect({item: e}) : () => {setActive(e); dialog.show()}}>
          {caption && caption({item: e, index: i})}
        </GalleryTile>
      })}
      <div css={styles.more({ theme })}>
        {loadMore && <Button appearance="outline" onClick={loadMore}>Load more</Button>}
      </div>
    </Box>
  </>
};

Gallery.displayName = 'Gallery';

// Gallery.propTypes = {

// };

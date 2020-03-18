/** @jsx jsx */
import { jsx } from '@emotion/core';
import ThemeContext from '../../style/themes/ThemeContext';
import React, { useContext, useState, useCallback, useEffect } from 'react';
import { useDialogState, Dialog, DialogDisclosure } from "reakit/Dialog";
// import PropTypes from 'prop-types';
// import { oneOfMany } from '../../utils/util';
import { Box, Button } from '../index';
import styles from './styles';
import { GalleryDetails } from './GalleryDetails';

export const getThumbnail = src => `//api.gbif.org/v1/image/unsafe/x150/${encodeURIComponent(src)}`;

export const GalleryTileSkeleton = ({ height=150, ...props }) => {
  return <div css={styles.skeletonTile({height})} {...props}></div>
};

  export const GalleryTile = ({ src, onSelect, height=150, children, ...props }) => {
  const theme = useContext(ThemeContext);
  const [ratio, setRatio] = useState(1);
  const [isValid, setValid] = useState(false);
  const onLoad = useCallback((event) => {
    setValid(true);
    const ratio = (event.target.naturalWidth) / event.target.naturalHeight;
    setRatio(ratio);
  }, []);

  const backgroundImage = getThumbnail(src);
  const style = {
    width: ratio * height,
    backgroundImage: `url('${backgroundImage}')`
  };
  if (ratio < 0.5 || ratio > 2) {
    style.backgroundSize = 'contain';
    style.width = height;
    if (ratio > 2) style.width = height*1.8;
  }
  return <Button appearance="text" 
    css={styles.galleryTile({ theme })} 
    style={style} 
    onClick={onSelect} {...props}
    title="View details"
    >
    <img src={backgroundImage}
      css={styles.img({ theme })}
      width={height}
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
  size = 20,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  const dialog = useDialogState();
  const [activeId, setActive] = useState();
  const [activeItem, setActiveItem] = useState();
  
  useEffect(() => {
    setActiveItem(items[activeId]);
  }, [activeId, items]);

  const next = useCallback(() => {
    setActive(Math.min(items.length - 1, activeId + 1));
  }, [items, activeId]);

  const prev = useCallback(() => {
    setActive(Math.max(0, activeId - 1));
  }, [activeId]);

  return <>
    {!onSelect && <Dialog {...dialog} tabIndex={0} aria-label="Welcome">
      {activeItem && <GalleryDetails 
        closeRequest={() => dialog.hide()} 
        item={activeItem} 
        title={title ? title(activeItem) : 'Unknown'}
        subtitle={title ? subtitle(activeItem) : null}
        details={details}
        imageSrc={imageSrc}
        next={next}
        previous={prev}
        />}
    </Dialog>}
    <Box css={styles.gallery({ theme })} {...props}>
      {items.map((e, i) => {
        return <GalleryTile key={i} 
          src={imageSrc(e)} 
          onSelect={onSelect ? () => onSelect({item: e}) : () => {setActive(i); dialog.show()}}>
          {caption && caption({item: e, index: i})}
        </GalleryTile>
      })}
      {loading ? Array(size).fill().map((e,i) => <GalleryTileSkeleton key={i}/>) : null}
      <div css={styles.more({ theme, height: 150 })}>
        {loadMore && !loading && <Button appearance="outline" onClick={loadMore}>Load more</Button>}
      </div>
    </Box>
  </>
};

Gallery.displayName = 'Gallery';

// Gallery.propTypes = {

// };

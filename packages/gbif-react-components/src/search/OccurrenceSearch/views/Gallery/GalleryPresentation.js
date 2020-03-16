import React, { useState } from 'react';
import { Gallery, GalleryCaption } from '../../../../components';

const mockData = [
  {
    src: `https://via.placeholder.com/${100 + 50 * Math.floor(Math.random() * 10)}x150`,
    scientificName: 'Puma concolor Linneaus',
    description: 'Observed in Denmark 19 Januar 2017'
  },
  {
    src: `https://via.placeholder.com/${100 + 50 * Math.floor(Math.random() * 10)}x150`,
    scientificName: 'Flabellina',
    description: 'Catched in Spain 25 Febrary 2019'
  }
];

export const GalleryPresentation = ({ first, prev, next, size, from, result, loading, error }) => {
  const total = result.hits.total;
  if (!result.hits.hits) return <div>no content</div>
  return <Gallery
    caption={({ item }) => <GalleryCaption>
      {item._source.gbifClassification.usage.name}
    </GalleryCaption>}
    title={item => item._source.gbifClassification.usage.name}
    subtitle={item => item.description}
    details={item => <pre>{JSON.stringify(item, null, 2)}</pre>}
    loading={loading || error}
    items={result.hits.hits}
    // loadMore={() => setItems(items)}
    imageSrc={item => item._source._galleryImages[0].identifier}
  />
}

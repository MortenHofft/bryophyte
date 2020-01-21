import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core'

const loadScript = (source, globalName) => new Promise((resolve, reject) => {
  if (typeof window[globalName] !== 'undefined') return resolve();
  const script = document.createElement('script');
  script.src = source;
  script.type = 'text/javascript';
  script.onload = () => resolve();
  script.onerror = event => reject(`${event.target.src} failed to load. ¯\_(ツ)_/¯`);
  document.body.appendChild(script);
});

function Example(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [mapVisible, setMapVisibility] = useState(false);
  
  function load() {
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/openlayers/4.6.5/ol.js', 'ol')
    .then(data => {
      console.log('loaded');
      setMapVisibility(true);
      var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.41, 8.82]),
          zoom: 4
        })
      });
    })
    .catch(err => console.log(err));
  }

  return (
    <section css={css`
      padding: 4em;
      background: papayawhip;
    `}>
      <h1 className="gb-header"
        css={css`
          font-size: 1.5em;
          text-align: center;
          color: #d64876;
        `}
        onClick={() => load()}
      >You clicked {count} times. Great! {mapVisible ? 'true' : 'false'}</h1>
      <button onClick={() => setCount(count + 1)}>
        {props.children}
      </button>
      <div id="map" style={{height: 400, width: 500}}></div>
    </section>
  );
}

export default Example;
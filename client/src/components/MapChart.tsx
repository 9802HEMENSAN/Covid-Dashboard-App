import React, { useState, useEffect } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { Icon, Style } from 'ol/style';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';

interface CountryData {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  deaths: number;
  recovered: number;
  active: number;
}

const OpenLayersMap: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<Feature | null>(null);
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    const markersSource = new VectorSource();
    const markersLayer = new VectorLayer({
      source: markersSource,
    });

    fetch('https://disease.sh/v3/covid-19/countries')
      .then((response) => response.json())
      .then((data) => {
        setCountriesData(data);
        data.forEach((country: CountryData) => {
          const marker = new Feature({
            geometry: new Point([country.countryInfo.long, country.countryInfo.lat]),
            countryData: country,
          });

          marker.setStyle(
            new Style({
              image: new Icon({
                src: country.countryInfo.flag,
                scale: 0.05,
              }),
            }),
          );

          markersSource.addFeature(marker);
        });
      });

    map.on('click', (event) => {
      map.forEachFeatureAtPixel(event.pixel, (feature : any) => {
        setSelectedMarker(feature);
      });
    });

    map.addLayer(markersLayer);
  }, []);

  const closePopup = () => {
    setSelectedMarker(null);
  };

  return (
    <div style={{ width: '100%', height : '800px', scrollBehavior: "auto" }} >
      <div id="map" style={{ width: '100%', height : '800px' }} />
      {selectedMarker && (
        <div className="popup">
          <button className="close-btn" onClick={closePopup}>
            X
          </button>
          <h3>{selectedMarker.get('countryData').country}</h3>
          <p>Cases: {selectedMarker.get('countryData').cases}</p>
          <p>Deaths: {selectedMarker.get('countryData').deaths}</p>
          <p>Recovered: {selectedMarker.get('countryData').recovered}</p>
          <p>Active: {selectedMarker.get('countryData').active}</p>
        </div>
      )}
    </div>
  );
};

export default OpenLayersMap;

import React from "react";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Marker, Popup } from "react-leaflet";

const MapChart = () => {
    const mapStyle = {
        width: "100%", // Adjust width as needed
        height: "100vh", // Adjust height as needed
      };

  return (
    <MapContainer center={[51.505, -0.09]} zoom={1} scrollWheelZoom={false} style={mapStyle} >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
};

export default MapChart;

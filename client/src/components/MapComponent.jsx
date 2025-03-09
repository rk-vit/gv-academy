import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../styles/MapComponent.css"
import { useEffect } from "react";

// Fix marker icons (important!)
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  const position = [12.9716, 77.5946]; // Example: Bangalore coordinates

  return (
    <div style={{ height: "400px", width: "100%", borderRadius: "8px", overflow: "hidden" }}>
      <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Gurukula Viriksham <br /> Knowledge City, 560001.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;

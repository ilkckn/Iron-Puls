import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "./TacticalMap.css";

const nodes = [
  { id: 1, lat: 40.758, lng: -73.9855, label: "NODE 001" },
  { id: 2, lat: 40.6892, lng: -73.9442, label: "NODE 002" },
  { id: 3, lat: 40.7282, lng: -73.7949, label: "NODE 003" },
];

const createPulseIcon = () =>
  L.divIcon({
    className: "",
    html: `
    <div class="pulse-wrapper">
      <div class="pulse-dot"></div>
      <div class="pulse-ring"></div>
      <div class="pulse-ring pulse-ring-2"></div>
    </div>
  `,
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });

const TacticalMap = () => {
  return (
    <div className="tactical-map-wrapper">
      <MapContainer
        center={[40.72, -73.92]}
        zoom={11}
        zoomControl={false}
        attributionControl={false}
        dragging={false}
        scrollWheelZoom={false}
        className="tactical-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="tactical-tiles"
        />
        {nodes.map((node) => (
          <Marker
            key={node.id}
            position={[node.lat, node.lng]}
            icon={createPulseIcon()}
          />
        ))}
      </MapContainer>

      <div className="map-overlay">
        <p>SYSTEM_STATUS: OPERATIONAL</p>
        <p>COORD: 40.7128° N, 74.0060° W</p>
        <p>DATA_STREAM: ACTIVE</p>
      </div>

      <div className="map-badge">
        <span>IRON_PULSE_v.2</span>
      </div>
    </div>
  );
};

export default TacticalMap;

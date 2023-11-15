import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
// import MarkerIcon from "../assets/images/marker-icon.png";
const ICON = icon({
  iconUrl: "/marker-icon.png",
  iconSize: [30, 30],
});
const Map = () => {
  const position = [-6.228113484071862, 106.80703103118532];

  return (
    <MapContainer
      center={position}
      zoom={20}
      style={{ height: "100vh", width: "80%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={ICON}>
        <Popup>
          Office 8 Building, Level 18-A
          <br />
          Jl. Senopati no. 8 SCBD Area
          <br />
          Kel. Senayan, Kebayoran Baru, South Jakarta, 12190
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;

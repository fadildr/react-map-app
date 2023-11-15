import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
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
      <Marker position={position}>
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

import { TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


export interface Location {
    lat: number;
    lng: number;
}

interface LocationMarkerProps {
    onSelect: (location: Location) => void;
}

const LocationMarker:React.FC<LocationMarkerProps> = ({ onSelect }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onSelect({ lat, lng });
    },
  });

  return <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
}


export default LocationMarker

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import 'leaflet/dist/leaflet.css';
import LocationMarker from "./LocationMarkerComponent";
import { Location } from "./LocationMarkerComponent";


interface MapProps{
    position: Location|null,
    setPosition: (position: Location) => void
}

const MapComponent:React.FC<MapProps> = ({position, setPosition}: MapProps) => {


    return (
        <div className="w-[98%] h-[480px]">
            <MapContainer 
                center={[position?.lat, position?.lng]}
                style={{ height: "100%", width: "100%" }}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />     
                <LocationMarker onSelect={setPosition} />
                {position && (
                    <Marker position={[position.lat, position.lng]}>
                        <Popup>
                            Latitude: {position.lat.toFixed(5)} <br />
                            Longitude: {position.lng.toFixed(5)}
                        </Popup>
                    </Marker>
                )}  

            </MapContainer>
        </div>
    )
}


export default MapComponent
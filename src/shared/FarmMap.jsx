import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import styles from './FarmMap.module.css';

function FarmMap({lat,lng,name}){
 const farmPosition = [lat, lng]
 const initialZoom = 13

 return (
    <MapContainer
      center={farmPosition}
      zoom={initialZoom}
      scrollWheelZoom={false}
      className={styles.mapContainer}>
      <TileLayer  
        attribution=''
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={farmPosition}>
         <Popup>
            A pin showing the farm location
         </Popup>
      </Marker>

    </MapContainer>
 )
}

export default FarmMap
import React from "react";
import { Marker } from "react-map-gl";
import pin from "../../../img/pin.png";
import style from "./Pins.module.css";

function Pins({ places, markerClick, setForm }) {
   return (
      <>
         {/* rendering a Marker for each location point */}
         {places.map((place) => {
            return (
               <Marker
                  key={place.id}
                  longitude={place.lng}
                  latitude={place.lat}
                  anchor="bottom-left">
                  <img
                     onClick={() => {
                        markerClick();
                     }}
                     src={pin}
                     alt="pin"
                     className={style.marker}
                  />
               </Marker>
            );
         })}
      </>
   );
}

export default Pins;

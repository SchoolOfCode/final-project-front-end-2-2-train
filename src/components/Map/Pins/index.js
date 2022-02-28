import React from "react";
import { Marker } from "react-map-gl";
import pin from "../../../img/pin.png";
import style from "./Pins.module.css";

function Pins({ locations, markerClick }) {
   return (
      <>
         {/* rendering a Marker for each location point */}
         {locations.map((location) => {
            return (
               <Marker
                  key={location.id}
                  longitude={location.lng}
                  latitude={location.lat}
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

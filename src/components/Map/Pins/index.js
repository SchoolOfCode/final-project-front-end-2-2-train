import React from "react";
import { Marker } from "react-map-gl";
import pin from "../../../img/pin.png";
import style from "./Pins.module.css";

function Pins({ places, markerClick, setForm, locationsData }) {
   return (
      <>
       
         {/* rendering a Marker for each location point */}
         {locationsData.map((location) => {
            return (
               <Marker
                  key={location.loc_id}
                  longitude={location.lng}
                  latitude={location.lat}
                  anchor="bottom-left">
                  <img
                     onClick={() => {
                        markerClick(location.loc_id, location.user_id);
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

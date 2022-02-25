import React from "react";
import Map, { Marker } from "react-map-gl";
import pin from "../pin.png";
import style from "./Pins.module.css";

function Pins({ locations, markerClick }) {
   // set style to adjust marker size
   const mystyle = {
      height: "7vh",
      width: "auto",
   };

   return (
      <>
         {/* rendering a Marker for each location point */}
         {locations.map((location) => {
            return (
               <Marker
                  key={location.id}
                  longitude={location.longitude}
                  latitude={location.latitude}
                  anchor="bottom">
                  <img
                     onClick={() => {
                        markerClick();
                     }}
                     src={pin}
                     alt="pin"
                     style={mystyle}
                     className={style.marker}
                  />
               </Marker>
            );
         })}
      </>
   );
}

export default Pins;

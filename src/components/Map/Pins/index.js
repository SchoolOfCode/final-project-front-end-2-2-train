import React from "react";
import { Marker } from "react-map-gl";
import pin from "../../../img/pin.png";
import style from "./Pins.module.css";

function Pins({ places, markerClick, setForm, data }) {
   return (
      <>
         {/* rendering a Marker for each location point */}
         {data.map((post) => {
            return (
               <Marker
                  key={post.id}
                  longitude={post.lng}
                  latitude={post.lat}
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

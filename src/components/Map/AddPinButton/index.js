import React from "react";
import { Marker } from "react-map-gl";

export default function AddPinButton({ buttonLocation, buttonClick }) {
   return (
      <Marker
         longitude={buttonLocation.longitude}
         latitude={buttonLocation.latitude}
         anchor="bottom">
         <button
            onClick={() => {
               buttonClick();
            }}>
            +
         </button>
      </Marker>
   );
}

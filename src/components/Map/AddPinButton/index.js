import React from "react";
import { Popup } from "react-map-gl";

export default function AddPinButton({
   handleShowPopup,
   addNewPin,
   clickLocation,
}) {
   // return <button style={{ width: "100px", height: "100px" }}>PINIT</button>;

   return (
      <Popup
         longitude={clickLocation.lng}
         latitude={clickLocation.lat}
         anchor="bottom"
         onClose={() => handleShowPopup()}>
         <button onClick={() => addNewPin(clickLocation)}> PINIT </button>
      </Popup>
   );
}

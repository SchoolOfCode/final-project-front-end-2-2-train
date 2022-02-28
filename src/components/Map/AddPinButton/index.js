import React from "react";
import { Popup } from "react-map-gl";

export default function AddPinButton({
   handleShowPopup,
   addNewMarker,
   clickLocation,
}) {
   // return <button style={{ width: "100px", height: "100px" }}>PINIT</button>;

   console.log("this is the location in AddPinButton", clickLocation);

   return (
      <Popup
         longitude={clickLocation.lng}
         latitude={clickLocation.lat}
         anchor="bottom"
         onClose={() => handleShowPopup()}>

         <button onClick={() => addNewMarker(clickLocation)}> PINIT </button>
      </Popup>
   );
}

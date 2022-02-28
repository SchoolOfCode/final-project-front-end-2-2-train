import React from "react";
import { Popup } from "react-map-gl";

export default function AddPinButton({
   handleShowPopup,
   handleAddPin,
   location,
}) {
   // return <button style={{ width: "100px", height: "100px" }}>PINIT</button>;

   return (
      <Popup
         longitude={location.lng}
         latitude={location.lat}
         anchor="bottom"
         onClose={() => handleShowPopup()}>
         <button
            onClick={
               handleAddPin()
            }>
            {" "}
            PINIT{" "}
         </button>
      </Popup>
   );
}

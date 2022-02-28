import React from "react";
import { Popup } from "react-map-gl";

export default function AddPinButton({
   handleShowPopup,
   // addNewMarker,
   currentLocation,
}) {
   // return <button style={{ width: "100px", height: "100px" }}>PINIT</button>;

   console.log("this is the lcoation in AddPinButton", currentLocation);

   return (
      <Popup
         longitude={currentLocation.lng}
         latitude={currentLocation.lat}
         anchor="bottom"
         onClose={() => handleShowPopup()}>

         {/* <button onClick={() => addNewMarker(currentLocation)}> PINIT </button> */}
      </Popup>
   );
}

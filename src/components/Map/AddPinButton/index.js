import React from "react";
import { Popup } from "react-map-gl";

export default function AddPinButton({ handleShowPopup, handleAddPin }) {
   // return <button style={{ width: "100px", height: "100px" }}>PINIT</button>;

   return (
      <Popup
         longitude={-0.1276}
         latitude={51.5072}
         anchor="bottom"
         onClose={() => handleShowPopup()}>
         <button
            onClick={() => {
               handleAddPin();
            }}>
            {" "}
            PINIT{" "}
         </button>
      </Popup>
   );
}

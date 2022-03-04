import React from "react";
import { Popup } from "react-map-gl";
import pinbuttonstyle from "./addpinbutton.module.css";

export default function AddPinButton({
   handleShowPopup,
   addNewPin,
   clickLocation,
   setForm,
   isMapInteractive,
}) {
   // return <button style={{ width: "100px", height: "100px" }}>PINIT</button>;


   return (
      {isMapInteractive && (
         <Popup
         maxWidth="150px"
         className={pinbuttonstyle.container}
         longitude={clickLocation.lng}
         latitude={clickLocation.lat}
         anchor="bottom-left"
         onClose={() => handleShowPopup()}>
         <div className={pinbuttonstyle.popupcontents}>
            <p className={pinbuttonstyle.text}>
               Would you like to add a memory?
            </p>
            <button
               className={pinbuttonstyle.pinbutton}
               onClick={() => {
                  addNewPin(clickLocation, isMapInteractive); // FIXME: we probably don't need this in the function (double-check before removing the code)
                  setForm(true);
               }}>
               {" "}
               PINIT{" "}
            </button>
         </div>
      </Popup>
      )}
      
   );
}

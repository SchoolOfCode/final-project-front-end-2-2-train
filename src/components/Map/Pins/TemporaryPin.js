//Plan for changing color of the pin on Submition of the Form
//1. Clicking on the Map brings up AddPinButton. No pin at this point
//2. Temporary blue pin is added on the Map after the AddPinButton is clicked.
// - a temporary component is created accessing clickLocation state
// - render temporary component conditionally, between AddPinButton click and Submit Button in the Form clicked;
//3. On submitting the data through Form the permanent red pin is added to the Map and into the rendered array.
// - data will be submitted to database, need Fetch to render it in its permanent state.

import React from "react";
import { Marker } from "react-map-gl";
import pin from "../../../img/blue-pin.png";
import style from "./Pins.module.css";

function TemporaryPin({ clickLocation }) {
   return (
      <Marker
         longitude={clickLocation.lng}
         latitude={clickLocation.lat}
         anchor="bottom-left">
         <img
            // onClick={() => {
            //    markerClick();
            // }}
            src={pin}
            alt="pin"
            className={style.marker}
         />
      </Marker>
   );
}

export default TemporaryPin;

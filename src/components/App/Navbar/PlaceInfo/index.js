import React from "react";
import style from "./PlaceInfo.module.css";

function PlaceInfo({ place, setModal, data }) {
   return (
      <div>
         <div className={style.titleContainer}>
            <p className={style.title} onClick={() => setModal(data)}>
               {place}
            </p>
         </div>
      </div>
   );
}

export default PlaceInfo;

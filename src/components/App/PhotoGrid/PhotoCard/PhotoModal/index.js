import React from "react";
import style from "./PhotoModal.module.css";

function PhotoModal({ photo, note }) {
   return (
      <div>
         <div className={style.modal}>
            <img src={photo} alt="Modal Pic" />
            <div className={style.modalContent}>
               <p>{note}</p>
            </div>
         </div>
      </div>
   );
}

export default PhotoModal;

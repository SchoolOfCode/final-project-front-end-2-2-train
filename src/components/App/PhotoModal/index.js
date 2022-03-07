import React from "react";
import style from "./PhotoModal.module.css";

function PhotoModal({ photo, setModal }) {
   return (
      <div>
         <div className={style.modal}>
            <span onClick={() => setModal("")} className={style.close}>
               &times;
            </span>
            <div className={style.modalContent}>
               <img src={photo} alt="Modal Pic" />
            </div>
         </div>
      </div>
   );
}

export default PhotoModal;

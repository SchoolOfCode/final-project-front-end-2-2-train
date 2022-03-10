import React from "react";
import style from "./PhotoModal.module.css";

function PhotoModal({ photo, setModal }) {
   return (
      <div>
         <div className={style.modal}>
            <h2 className={style.close} onClick={()=>setModal(false)}>X</h2>
            <div className={style.modalContent}>
               <img src={photo} alt="Modal Pic" />
            </div>
         </div>
      </div>
   );
}

export default PhotoModal;

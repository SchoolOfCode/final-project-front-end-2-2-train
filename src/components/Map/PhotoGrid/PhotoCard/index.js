import React from "react";
import style from "./photocard.module.css";

function PhotoCard({ id, dataObj, setModal, deleteMedia }) {
   return (
      <div className={style.flipcard}>
         <div className={style.flipcardContainer}>
            <div className={style.flipcardFront}>
               <img
                  className={style.polaroidFrame}
                  src={require("../../../../img/photo-frame.png")}
                  alt="Polaroid Frame"
               />
               <div className={style.photoDiv}>
                  {" "}
                  <img
                     className={style.photo}
                     src={dataObj.img_url}
                     alt={id}
                  />{" "}
               </div>
            </div>
            <div className={style.flipcardBack}>
               <div
                  onClick={() => setModal(dataObj.img_url)}
                  className={style.textHolder}>
                  <h1 className={style.photoTitle}>{dataObj.title},</h1>
                  <h2 className={style.photoTitle}>
                     {dataObj.place} <br />
                  </h2>{" "}
                  <br />
                  <h2 className={style.photoTitle}>{dataObj.notes}</h2>
               </div>

               <div className={style.funcP}>
                  <button>EDIT</button>
                  <button
                     onClick={() => deleteMedia(id)}
                     className={style.deleteBtn}>
                     DELETE
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PhotoCard;

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
            <div
               className={style.flipcardBack}
               onClick={() => setModal(dataObj.img_url)}>
               <div className={style.textHolder}>
                  <h1 className={style.photoTitle}>{dataObj.title},</h1>
                  <h2 className={style.photoTitle}>
                     {dataObj.place} <br />
                  </h2>
               </div>

               <div className={style.funcP}>
                  <p>EDIT</p>
                  <div className={style.vl} />
                  <p
                     onClick={() => {
                        deleteMedia(id);
                        setModal(false);
                     }}
                     className={style.deleteBtn}>
                     DELETE
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PhotoCard;

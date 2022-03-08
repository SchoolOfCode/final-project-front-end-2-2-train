import React from "react";
import style from "./photocard.module.css";

function PhotoCard({ key, dataObj, delFunc, setModal }) {
   // css to allow only a certain amount of char for the notes
   // returning data populated by the DummyData

   return (
      <div className={style.flipcard}>
         <div
            className={style.flipcardContainer}
            onClick={() => setModal(dataObj.img_url)}>
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
                     alt={key}
                  />{" "}
               </div>
            </div>
            <div className={style.flipcardBack}>
               <div className={style.textHolder}>
                  <h1 className={style.photoTitle}>{dataObj.title},</h1>
                  <h2 className={style.photoTitle}>
                     {dataObj.place} <br />
                  </h2>
               </div>
               <div className={style.funcP}>
                  <p>EDIT</p>
                  <p
                     onClick={() => delFunc(dataObj.id)}
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

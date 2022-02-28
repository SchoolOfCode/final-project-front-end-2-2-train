import React from "react";
import style from "./photocard.module.css";

function PhotoCard({ key, dataObj, delFunc }) {
   // css to allow only a certain amount of char for the notes
   // returning data populated by the DummyData
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
                     src={dataObj.aws_key}
                     alt={key}
                  />{" "}
               </div>
            </div>
            <div className={style.flipcardBack}>
            <div className={style.textHolder} >
               <h1 className={style.photoTitle} >{dataObj.media_title}</h1>
               <h2 className={style.photoTitle} >
                  {dataObj.location} <br/> {dataObj.date}
               </h2>
               </div>
               <p onClick={() => delFunc(dataObj.id)} className={style.deleteBtn} >
                  X
               </p>
            </div>
         </div>
      </div>
   );
}

export default PhotoCard;

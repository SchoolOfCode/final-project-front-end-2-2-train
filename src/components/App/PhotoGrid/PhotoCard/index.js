import React, { useState } from "react";
import style from "./photocard.module.css";
import PhotoModal from "./PhotoModal";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function PhotoCard({ key, dataObj, delFunc }) {
   // css to allow only a certain amount of char for the notes
   // returning data populated by the DummyData
   const [modal, setModal] = useState(false);

   console.log(`This is the object KEY:`, key);

   return (
      <div className={style.flipcard}>
         {modal ? (
            <PhotoModal
               setModal={setModal}
               photo={dataObj.aws_key}
               notes={dataObj.note}
            />
         ) : (
            <></>
         )}
         <div
            className={style.flipcardContainer}
            onClick={() => setModal(true)}>
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
               <div className={style.textHolder}>
                  <h1 className={style.photoTitle}>{dataObj.media_title},</h1>
                  <h2 className={style.photoTitle}>
                     {dataObj.location} <br /> {dataObj.date}
                  </h2>
               </div>

               <DeleteForeverIcon
                  onClick={() => delFunc(dataObj.id)}
                  className={style.deleteBtn}
               />
            </div>
         </div>
      </div>
   );
}

export default PhotoCard;

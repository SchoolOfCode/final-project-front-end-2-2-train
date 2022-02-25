import React from "react";
import style from "./photocard.module.css";
import deleteButton from "./DeleteButton/index";

function PhotoCard({ key, dataObj, delFunc }) {
   // css to allow only a certain amount of char for the notes
   // returning data populated by the DummyData
   return (
      <div className={style.container}>
         <div className={style.photoContainer}>
            <img className={style.photoFront} src={dataObj.aws_key} alt={key} />
            <div className={style.photoBack}>
               <button onClick={() => delFunc(dataObj.id)}>
                  Delete photograph #{dataObj.id}
               </button>
               <h1>{dataObj.media_title}</h1>
               <h2>
                  {dataObj.location} - {dataObj.date}
               </h2>
               <h3>{dataObj.media_descr}</h3>
            </div>
         </div>
      </div>
   );
}

export default PhotoCard;

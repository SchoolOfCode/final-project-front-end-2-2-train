import React from "react";
import style from "./photocard.module.css";

function PhotoCard({ key, data }) {
   // css to allow only a certain amount of char for the notes
   // returning data populated by the DummyData

   // console.log("photocard data", data);

   return (
      <div className={style.container}>
         <div className={style.photoContainer}>
            <img className={style.photoFront} src={data.aws_key} alt={key} />
            <div className={style.photoBack}>
               <h1>{data.media_title}</h1>
               <h2>
                  {data.location} - {data.date}
               </h2>
               <h3>{data.media_descr}</h3>
            </div>
         </div>
      </div>
   );
}

export default PhotoCard;

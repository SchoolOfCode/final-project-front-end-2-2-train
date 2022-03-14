import React from "react";
import style from "./PicInfo.module.css";

function PicInfo({ title, setModal, data }) {
   return (
      <div>
         <div className={style.titleContainer}>
            <p className={style.title} onClick={() => setModal(data)}>
               {title}
            </p>
         </div>
      </div>
   );
}

export default PicInfo;

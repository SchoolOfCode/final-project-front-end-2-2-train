import React from "react";
import style from "./Contact.module.css";

function contact() {
   return (
      <div className={style.body}>
         <img
            className={style.pic}
            src={require("../../../img/contact.png")}
            alt=""
         />
      </div>
   );
}

export default contact;

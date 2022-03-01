import React, { useState } from "react";
import style from "./Accordion.module.css";

const Accordion = ({ title, content }) => {
   const [isActive, setIsActive] = useState(false);

   return (
      <div className={style.accordion}>
         <div
            className={style.accordionTitle}
            onClick={() => setIsActive(!isActive)}>
            <div className={style.accordionHFont}>{title}</div>
            <div className={style.accordionHFont}>{isActive ? "-" : "+"}</div>
         </div>
         {isActive && (
            <div
               className={`${style.accordionContent} ${style.accordionPFont}`}>
               {content}
            </div>
         )}
      </div>
   );
};

export default Accordion;

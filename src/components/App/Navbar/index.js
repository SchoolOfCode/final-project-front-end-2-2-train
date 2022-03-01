import React from "react";
import style from "./Navbar.module.css";
import LogoutButton from "./LogoutBtn";
import Accordion from "./Accordion";
import accordionData from "./accordionData.js";

function Navbar({ opened, setOpened, setPhotoGridOpened }) {
   return (
      <>
         <div className={style.navbarContainer}>
            <div className={style.topNavCont}>
               <img
                  className={style.logo}
                  src={require("../../../img/pinit-logo-offwhite.png")}
                  alt=""
               />
               <LogoutButton />
            </div>
            <div className={style.accordion}>
               {accordionData.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
               ))}
            </div>
         </div>
      </>
   );
}

export default Navbar;

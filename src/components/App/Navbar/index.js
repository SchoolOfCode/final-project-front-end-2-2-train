import React from "react";
import style from "./Navbar.module.css";
import LogoutButton from "./LogoutBtn";
import Accordion from "./Accordion";
import accordionData from "./accordionData.js";

function Navbar({ data }) {
   return (
      <>
         <div className={style.navbarContainer}>
            <div className={style.topNavCont}>
               <img
                  className={style.logo}
                  src={require("../../../img/pinit-logo-offwhite.png")}
                  alt=""
               />
            </div>
            <div className={style.accordion}>
               {/* {newAccordionPlaces.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
               ))} */}
               <Accordion
                  title="Titles"
                  content={data.map((item) => {
                     return `${item.title},     `;
                  })}
               />
               <Accordion
                  title="Places"
                  content={data.map((item) => {
                     return `${item.place},     `;
                  })}
               />
            </div>
            <LogoutButton />
         </div>
      </>
   );
}

export default Navbar;

import React from "react";
import style from "./Navbar.module.css";
import Form from "../../Map/Form";
import MenuIcon from "./MenuIcon";
import LogoutButton from "./LogoutBtn";
import Accordion from "./Accordion";
import accordionData from "./accordionData.js";

function Navbar({ opened, setOpened, setPhotoGridOpened }) {
   return (
      <>
         <div className={style.navbarContainer}>
            <img
               className={style.logo}
               src={require("../../../img/pinit-logo-offwhite.png")}
               alt=""
            />
            {opened ? <Form opened={opened} /> : <></>}

            <MenuIcon
               setOpened={setOpened}
               opened={opened}
               setPhotoGridOpened={setPhotoGridOpened}
            />
            <LogoutButton />
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

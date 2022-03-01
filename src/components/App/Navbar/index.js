import React from "react";
import style from "./Navbar.module.css";
import Form from "../../Map/Form";
import MenuIcon from "./MenuIcon";
import LogoutButton from "./LogoutBtn";
import Accordion from "./Accordion";

function Navbar({ opened, setOpened, setPhotoGridOpened }) {
   return (
      <>
         <div className={style.navbarContainer}>
            <img
               className={style.logo}
               src={require("../../../img/pinit-logo-offwhite.png")}
               alt=""
            />

            <MenuIcon
               setOpened={setOpened}
               opened={opened}
               setPhotoGridOpened={setPhotoGridOpened}
            />
            <LogoutButton />
            <Accordion />
         </div>
      </>
   );
}

export default Navbar;

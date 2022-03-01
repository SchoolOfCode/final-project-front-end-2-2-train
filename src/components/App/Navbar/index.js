import React from "react";
import style from "./Navbar.module.css";
import Form from "../Form";
import MenuIcon from "./MenuIcon";
import LogoutButton from "./LogoutBtn";

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
            <MenuIcon setOpened={setOpened} opened={opened} setPhotoGridOpened={setPhotoGridOpened}/>
            <LogoutButton />
         </div>
      </>
   );
}

export default Navbar;

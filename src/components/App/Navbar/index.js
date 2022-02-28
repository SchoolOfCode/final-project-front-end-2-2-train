import React from 'react'
import style from './Navbar.module.css'
import Form from "../Form";
import MenuIcon from "./MenuIcon";
import LogoutButton from "./LogoutBtn";


function Navbar({opened, setOpened}) {
    
  return (
      <>
    <div className={style.navbarContainer} >
      
         {opened ? <Form opened={opened} /> : <></>}
         <MenuIcon setOpened={setOpened} opened={opened} />
         <LogoutButton />
         </div>
        
    </>
  )
}

export default Navbar
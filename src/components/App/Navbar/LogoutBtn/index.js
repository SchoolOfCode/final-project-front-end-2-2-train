import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./LogoutBtn.module.css";

const LogoutButton = () => {
   const { logout } = useAuth0();

   return (
      <button
         className={style.button}
         onClick={() => logout({ returnTo: window.place.origin })}>
         Log Out
      </button>
   );
};

export default LogoutButton;

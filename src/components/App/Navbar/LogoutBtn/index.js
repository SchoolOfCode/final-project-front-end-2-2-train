import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./LogoutBtn.module.css";

const LogoutButton = () => {
   const { logout } = useAuth0();

   return (
      <>
         <div className={style.container}>
            <button
               className={style.button}
               onClick={() =>
                  logout({ returnTo: "https://pinit-pinit.netlify.app/" })
               }>
               Log Out
            </button>
            <img
               className={style.settings}
               src={require("../../../../img/settings.png")}
               alt="Settings icon"
            />
         </div>
      </>
   );
};

export default LogoutButton;

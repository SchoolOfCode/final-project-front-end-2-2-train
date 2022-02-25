import React from "react";
import style from "./Landing.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutBtn from "../LogoutBtn";

function Landing() {
   //! Used in the login and sign up button
   const { loginWithRedirect } = useAuth0();

   return (
      <div>
         <section className={style.whiteSection}>
            <ul className={style.navbar}>
               <li>
                  <img
                     className={style.logo}
                     src={require("../../../img/pinit-logo-offwhite.png")}
                     alt="Pinit! Logo"
                  />
               </li>
               <li className={style.navlinks}>
                  <p className={style.navlink}>about us</p>
                  <p className={style.navlink}>contact</p>
                  <p className={style.navlink}>faqs</p>
               </li>
               <li>
                  <LogoutBtn />
                  <button
                     onClick={() => loginWithRedirect()}
                     className={style.sign}>
                     sign up
                  </button>
                  <button
                     onClick={() => loginWithRedirect()}
                     className={style.login}>
                     login
                  </button>
               </li>
            </ul>
            <div className={style.hero}>
               <div className={style.landingText}>
                  <h1>
                     <span>You</span> make the memory,
                     <br />
                     We'll put a pin in it
                  </h1>
                  <a href="#section2">
                     <button href="#section2" className={style.moreInfo}>
                        find out more
                     </button>
                  </a>
               </div>
               <img
                  className={style.mapPin}
                  src={require("../../../img/mapPin.png")}
                  alt="Map Pin"
               />
            </div>
         </section>
         <section id="section2" className={style.darkSection}>
            <div className={style.card}>
               <img
                  className={style.redIcon}
                  src={require("../../../img/map-book.png")}
                  alt="Mapbook"
               />
               <div className={style.cardText}>
                  <h2>
                     A new way to store and
                     <br />
                     <span>re-live</span> your memories
                  </h2>
                  <p>Your photos are tied to locations and dates</p>
               </div>
            </div>
            <hr className={style.lightLine} />
            <div className={style.card}>
               <div className={style.cardText}>
                  <h2>
                     A <span>private</span>, yet shared
                     <br />
                     experience
                  </h2>
                  <p>
                     Keep albums just for you, or create
                     <br />
                     new ones with friends!
                  </p>
               </div>
               <img
                  className={style.redIcon}
                  src={require("../../../img/shield.png")}
                  alt="Lock"
               />
            </div>
         </section>
         <section>
            <div className={style.card}>
               <img
                  className={style.redIcon}
                  src={require("../../../img/globe.png")}
                  alt="Globe"
               />
               <div className={style.cardText}>
                  <h2>
                     <span>Plan</span> your journeys for
                     <br />
                     work or pleasure
                  </h2>
                  <p className={style.darkP}>
                     Forecast a trip you're looking forward to or
                     <br />
                     help organise a work trip
                  </p>
               </div>
            </div>
            <hr className={style.darkLine} />
            <div className={style.finalContainer}>
               <h1>
                  However you choose to PINIT
                  <br />
                  we're here for you
               </h1>
            </div>
            <ul>
               <li className={style.footerContainer}>
                  <img
                     src={require("../../../img/instagram.png")}
                     alt="Instagram"
                  />
                  <img src={require("../../../img/tiktok.png")} alt="TikTok" />
                  <img
                     src={require("../../../img/twitter.png")}
                     alt="Twitter"
                  />
                  <img src={require("../../../img/github.png")} alt="GitHub" />
                  <img
                     src={require("../../../img/facebook.png")}
                     alt="Facebook"
                  />
               </li>
            </ul>
         </section>
      </div>
   );
}
export default Landing;

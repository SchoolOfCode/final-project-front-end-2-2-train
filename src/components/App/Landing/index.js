import React from "react";
import style from "./Landing.module.css";
function Landing() {
   return (
      <div>
         <section className={style.whiteSection}>
            <ul className={style.navbar}>
               <li>//image</li>
               <li className={style.navlinks}>
                  <p className={style.navlink}>about us</p>
                  <p className={style.navlink}>contact</p>
                  <p className={style.navlink}>faq's</p>
               </li>
               <li>
                  <button className={style.sign}>sign up</button>
                  <button className={style.login}>login</button>
               </li>
            </ul>
            <div className={style.hero}>
               <div className={style.landingtext}>
                  <h1>
                     <span>You</span> make the memory,
                     <br />
                     We'll put a pin in it
                  </h1>
                  <button className={style.moreInfo}>find out more</button>
               </div>
               <img src="" alt="Image of a Map Pin" />
            </div>
         </section>
         <section className={style.darkSection}>
            <div className={style.container}>
               <img src="" alt="Mapbook" />
               <h2>
                  A new way to store and
                  <br />
                  <span>re-live</span> your memories
               </h2>
               <p>Your photos are tied to locations and dates</p>
            </div>
            <div className={style.container}>
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
               <img src="" alt="Lock" />
            </div>
         </section>
         <section>
            <div className={style.container}>
               <img src="" alt="Globe" />
               <h2>
                  <span>Plan</span>your journeys for
                  <br />
                  work or pleasure
               </h2>
               <p>
                  Forecast a trip you're looking forward to or
                  <br />
                  help organise a work trip
               </p>
            </div>
            <div className={style.finalContainer}>
               <h1>
                  However you choose to PINIT
                  <br />
                  we're here for you
               </h1>
            </div>
         </section>
         <ul>
            <li>
               <img src="" alt="Instagram" />
               <img src="" alt="TikTok" />
               <img src="" alt="Twitter" />
               <img src="" alt="GitHub" />
               <img src="" alt="Facebook" />
            </li>
         </ul>
      </div>
   );
}
export default Landing;

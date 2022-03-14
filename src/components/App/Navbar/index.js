import React from "react";
import style from "./Navbar.module.css";
import LogoutButton from "./LogoutBtn";
import Accordion from "./Accordion";
import { guideData } from "./accordionData.js";
import GeoSearch from "../GeoSearch";
import PicInfo from "./PicInfo";
import PlaceInfo from "./PlaceInfo";

function Navbar({ setMapLoc, setModal, data }) {
   console.log(data);
   return (
      <>
         <div className={style.navbarContainer}>
            <div className={style.topNavCont}>
               <img
                  className={style.logo}
                  src={require("../../../img/pinit-logo-offwhite.png")}
                  alt=""
               />
               <img
                  className={style.profile}
                  src={require("../../../img/profile-pic.png")}
                  alt="Users profile"
               />
            </div>

            <div className={style.accordion}>
               {/* {newAccordionPlaces.map(({ title, content }) => (
                  <Accordion title={title} content={content} />
               ))} */}
               <Accordion
                  title="Memories"
                  setModal={setModal}
                  content={data.map((data) => {
                     return (
                        <PicInfo
                           key={data.media_id}
                           setModal={setModal}
                           title={data.title}
                           data={data}
                        />
                     );
                  })}
               />
               <Accordion
                  title="Places"
                  setModal={setModal}
                  content={data.map((data) => {
                     return (
                        <PlaceInfo
                           key={data.media_id}
                           setModal={setModal}
                           place={data.place}
                           data={data}
                        />
                     );
                  })}
               />
               <Accordion
                  title="How To Pinit"
                  content={guideData.map((item) => {
                     return (
                        <ul>
                           <li className={style.li}>{item.tip}</li>
                        </ul>
                     );
                  })}
               />
               <GeoSearch setMapLoc={setMapLoc} />
            </div>

            <LogoutButton />
         </div>
      </>
   );
}

export default Navbar;

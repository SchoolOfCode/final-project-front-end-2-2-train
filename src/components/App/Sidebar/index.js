import React from "react";
import style from "./Sidebar.module.css";
import LocationInput from "./LocationInput";
import ImageUpload from "./ImageUpload";
import DateInfo from "./DateInfo";
import Notes from "./Notes";

function Sidebar({ opened }) {
   const styleAdd = opened
      ? `${style.sidebarContainer}`
      : `${style.sidebarContainer} ${style.sidebarHidden}`;
   return (
      <div className={styleAdd}>
         <LocationInput />
         <DateInfo />
         <Notes />
         <ImageUpload />
         <button>SUBMIT</button>
      </div>
   );
}

export default Sidebar;

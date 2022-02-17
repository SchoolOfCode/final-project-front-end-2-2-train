import React from "react";
import style from "./Sidebar.module.css";
import LocationInput from "./LocationInput";
import ImageUpload from "./ImageUpload";
import DateInfo from "./DateInfo";
import Notes from "./Notes";



function Sidebar() {
   return (
      <div className={style.sidebarContainer}>
         <LocationInput />
         <DateInfo />
         <Notes />
         <ImageUpload />
         <button>SUBMIT</button>
      </div>
   );
}

export default Sidebar;

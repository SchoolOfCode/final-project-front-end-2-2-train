import {React, useState} from "react";
import style from "./Sidebar.module.css";


function Sidebar({ opened, setObj}) {
   const styleAdd = opened
      ? `${style.sidebarContainer}`
      : `${style.sidebarContainer} ${style.sidebarHidden}`;
      const [title, setTitle] = useState("");
      const [location, setLocation] = useState("");
      const [date, setDate] = useState("");
      const [image, setImage] = useState("");
      //Create an onClick function that sets all the states, which will set all the useStates below

  function setStates (event) {
    event.preventDefault()
    setObj({title:title, location:location, date:date, image:image})
  }
   return (
      <div className={styleAdd}>
         <form>
            <input type="text" placeholder="title" onChange={event => setTitle(event.target.value)}/>
            <input type="text" placeholder="location" onChange={event => setLocation(event.target.value)}/>
            <input type="date" onChange={event => setDate(event.target.value)}/>
            <input type="file" onChange={event => setImage(event.target.value)}/>
            <button onClick={setStates}>SUBMIT</button>
         </form>
      </div>
   );
}

export default Sidebar;

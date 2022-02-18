import { React, useState } from "react";
import style from "./Sidebar.module.css";

function Sidebar({ opened, setObj }) {
   // Styling for the menu icon
   const styleAdd = opened
      ? `${style.sidebarContainer}`
      : `${style.sidebarContainer} ${style.sidebarHidden}`;
   // States to grab the input fields
   const [title, setTitle] = useState("");
   const [location, setLocation] = useState("");
   const [date, setDate] = useState("");
   const [image, setImage] = useState("");
   const [note, setNote] = useState("");

   // Function that grabs the input data and sends it to the App component
   function setStates(event) {
      event.preventDefault();
      setObj({
         title: title,
         location: location,
         date: date,
         note: note,
         image: image,
      });
      document.getElementsByClassName(`${style.formContainer}`).value = "";
   }
   return (
      <div className={styleAdd}>
         <form className={style.formContainer}>
            <input
               type="text"
               placeholder="Title"
               onChange={(event) => setTitle(event.target.value)}
            />
            <input
               type="text"
               placeholder="Location"
               onChange={(event) => setLocation(event.target.value)}
            />
            <input
               type="date"
               onChange={(event) => setDate(event.target.value)}
            />
            <textarea
               type="text"
               placeholder="Notes..."
               onChange={(event) => setNote(event.target.value)}
            />
            <input
               type="file"
               onChange={(event) => setImage(event.target.value)}
            />
            <button onClick={setStates}>SUBMIT</button>
         </form>
      </div>
   );
}

export default Sidebar;

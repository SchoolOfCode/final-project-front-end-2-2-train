import { React, useState, useEffect } from "react";
import style from "./Sidebar.module.css";
const API_URL = "https://room-22-train.herokuapp.com";

function Sidebar({ opened }) {
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
   const [obj, setObj] = useState({});
   const [media, setMedia] = useState([]);
   const [error, setError] = useState("");

   // Function that grabs the input data and sends it to the App component
   function setStates(event) {
      event.preventDefault();
      setObj({
         userId: 11,
         aws_key: image,
         media_title: title,
         location: location,
         date: date,
         media_descr: note,
      });
      document.getElementsByClassName(`${style.formContainer}`).value = "";
   }

   //! the POST request
   useEffect(() => {
      if (Object.keys(obj).length === 0) {
         return;
      } else {
         async function getMedia() {
            try {
               const response = await fetch(`${API_URL}/media`, {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(obj),
               });
               const data = await response.json();
               if (data.success === true) {
                  console.log(data);
                  setMedia(data.payload);
                  setError("");
               } else {
                  console.log(response);
                  setError("Fetch didn't work :(");
               }
            } catch (err) {
               console.log(err);
               setError(err.message);
            }
         }
         getMedia();
      }
   }, [obj]);
   // console.log(media, error);
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
            {/* UPLOAD A FILE */}
            {/* <input
               type="file"
               onChange={(event) => setImage(event.target.value)}
            /> */}

            {/* temporary solution to upload images */}
            <input
               type="text"
               onChange={(event) => setImage(event.target.value)}
            />
            <button onClick={setStates}>SUBMIT</button>
         </form>
      </div>
   );
}

export default Sidebar;

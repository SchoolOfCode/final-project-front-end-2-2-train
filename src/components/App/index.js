import style from "./App.module.css";
//import Sidebar from "./Sidebar";
import PhotoGrid from "./PhotoGrid";
import MenuIcon from "./MenuIcon";
import { React, useState, useEffect } from "react";
import Form from "./Form";

//! function to add styling to the sidebar that reveals content
// may have to pass styling down as props?

const API_URL = "https://room-22-train.herokuapp.com";

function App() {
   // Sets the style of the sidebar to show it
   const [opened, setOpened] = useState(false);
   // The object that gets sent to the API using the users data

   const [media, setMedia] = useState([]);
   const [error, setError] = useState("");
   console.log(error);

   // const [data, setData] = useState([]);

   //! the GET request
   useEffect(() => {
      async function getMedia() {
         try {
            const response = await fetch(`${API_URL}/media`);
            const newData = await response.json();
            // setData(newData.payload);
            if (newData.success === true) {
               console.log("Got the data!");
               setMedia(newData.payload);
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
   }, []);

   // const styleAdd = opened //! not used; commented out for netlify
   //    ? `${style.photoGridContainer}`
   //    : `${style.photoGridContainer} ${style.photoGridHidden}`;

   // Over here we are passing down our API fetched data into photogrid component shown by "media={media}"
   return (
      <div className={style.app}>
         <div className={style.mapContainer}>
            {/* <Map className={style.map} /> */}
         </div>
         <ul className={style.navbar}>
            {/* <Sidebar opened={opened} /> */}
            <li className={style.imgContainer}>
               <img
                  src={require("./pinit-logo.png")}
                  className={style.logo}
                  alt="Pinit! Logo"
               />
            </li>
            <Form opened={opened} />
            <li>
               <h1 className={style.title}>PINIT!</h1>
            </li>
            <MenuIcon setOpened={setOpened} opened={opened} />
         </ul>
         {opened === true ? <PhotoGrid media={media} /> : <div />}
         <Form opened={opened} />
         <PhotoGrid media={media} />
      </div>
   );
}

export default App;

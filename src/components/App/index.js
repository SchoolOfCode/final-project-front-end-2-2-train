import style from "./App.module.css";
//import Sidebar from "./Sidebar";
import PhotoGrid from "./PhotoGrid";
import MenuIcon from "./MenuIcon";
import { React, useState, useEffect } from "react";
import Form from "./Form";
import { useAuth0 } from "@auth0/auth0-react";

const API_URL = "https://room-22-train.herokuapp.com";

function App() {
   // gets the user information after authentication
   const { user } = useAuth0();
   // const { name, picture, email } = user;

   // Sets the style of the sidebar to show it
   const [opened, setOpened] = useState(false);

   const [media, setMedia] = useState([]);
   const [error, setError] = useState("");

   //! the GET request
   useEffect(() => {
      async function getMedia() {
         try {
            const response = await fetch(`${API_URL}/media`);
            const newData = await response.json();
            if (newData.success === true) {
               console.log("Got the data!");
               setMedia(newData.payload);
               setError("");
            } else {
               console.log(response, error);

               setError("Fetch didn't work :(");
            }
         } catch (err) {
            console.log(err);
            setError(err.message);
         }
      }
      getMedia();
   }, []);

   // console.log(user ? user.email : user.name);

   return (
      <div className={style.app}>
         {/* <Landing /> */}
         <div className={style.mapContainer}>
            {/* <Map className={style.map} /> */}
         </div>
         <ul className={style.navbar}>
            {/* <Sidebar opened={opened} /> */}
            <li className={style.imgContainer}>
               <img
                  src={require("../../img/pinit-logo-offwhite.png")}
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

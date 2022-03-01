import style from "./App.module.css";
import PhotoGrid from "../Map/PhotoGrid";
import Navbar from "./Navbar";
import { React, useState, useEffect } from "react";

import { useAuth0 } from "@auth0/auth0-react";
import MarkerMap from "../Map";

const API_URL = "https://room-22-train.herokuapp.com";

function App() {
   // gets the user information after authentication
   const { user } = useAuth0();
   console.log(user);
   // const { name, picture, email } = user;

   // Sets the style of the sidebar to show it
   const [opened, setOpened] = useState(false);
   const [photoGridOpened, setPhotoGridOpened] = useState(false);

   const [data, setData] = useState([]);
   const [error, setError] = useState("");
   console.log(error);
   //! the GET request
   useEffect(() => {
      async function getData() {
         try {
            const response = await fetch(`${API_URL}/media`);
            const newData = await response.json();
            if (newData.success === true) {
               console.log("Got the data!");
               setData(newData.payload);
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
      getData();
   }, []);

   // console.log(user ? user.email : user.name);

   return (
      <div className={style.app}>
         <Navbar
            className={style.navbar}
            opened={opened}
            setOpened={setOpened}
            setPhotoGridOpened={setPhotoGridOpened}
         />
         <div className={style.mapContainer}>
            <MarkerMap setOpened={setOpened} setPhotoGridOpened={setPhotoGridOpened} className={style.map} />
         </div>

         {photoGridOpened ? <PhotoGrid setData={setData} data={data} /> : <div />}
      </div>
   );
}

export default App;

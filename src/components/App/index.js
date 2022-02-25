import style from "./App.module.css";
//import Sidebar from "./Sidebar";
import PhotoGrid from "./PhotoGrid";
import MenuIcon from "./MenuIcon";
import { React, useState, useEffect } from "react";
import Form from "./Form";
import { useAuth0 } from "@auth0/auth0-react";
import MarkerMap from "../Map";
import LogoutButton from "./LogoutBtn";

const API_URL = "https://room-22-train.herokuapp.com";

function App() {
   // gets the user information after authentication
   const { user } = useAuth0();
   console.log(user);
   // const { name, picture, email } = user;

   // Sets the style of the sidebar to show it
   const [opened, setOpened] = useState(false);

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
         {opened ? <Form opened={opened} /> : <div />}
         <MenuIcon setOpened={setOpened} opened={opened} />
         <LogoutButton />
         <div className={style.mapContainer}>
            <MarkerMap className={style.map} />
         </div>

         {opened === false ? (
            <PhotoGrid setData={setData} data={data} />
         ) : (
            <div />
         )}
      </div>
   );
}

export default App;

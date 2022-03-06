import style from "./App.module.css";

import Navbar from "./Navbar";
import { React, useState, useEffect } from "react";
import PhotoModal from "./PhotoModal/index";
import Form from "./Form";
import { useAuth0 } from "@auth0/auth0-react";
import MarkerMap from "../Map";

const API_URL = "http://localhost:5500";
// const API_URL = "https://room-22-train.herokuapp.com";

function App() {
   // gets the user information after authentication
   const { user, isLoading } = useAuth0();

   if (isLoading) <p>Loading...</p>;

   // Sets the style of the sidebar to show it
   const [form, setForm] = useState(false);
   const [modal, setModal] = useState("");
   const [data, setData] = useState([]);
   const [error, setError] = useState("");
   const [formLocation, setFormLocation] = useState();

   //! the GET request
   useEffect(() => {
      async function getData() {
         try {
            const response = await fetch(`${API_URL}/users/${user.email}`);
            const newData = await response.json();
            if (newData.success === true) {
               setData(newData.payload);
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
      if (!isLoading) {
         getData();
      }
   }, [user]);

   useEffect(() => {
      console.log(formLocation);
   }, [formLocation]);

   return (
      <div className={style.app}>
         <Navbar className={style.navbar} />
         <div className={style.mapContainer}>
            <MarkerMap
               setData={setData}
               data={data}
               setModal={setModal}
               className={style.map}
               setForm={setForm}
               setFormLocation={setFormLocation}
            />
         </div>
         {modal ? <PhotoModal photo={modal} setModal={setModal} /> : <></>}
         {form ? <Form setForm={setForm} formLocation={formLocation} /> : <></>}
      </div>
   );
}

export default App;

import style from "./App.module.css";

import Navbar from "./Navbar";
import { React, useState, useEffect } from "react";
import PhotoModal from "./PhotoModal/index";
import Form from "./Form";
import { useAuth0 } from "@auth0/auth0-react";
import MarkerMap from "../Map";

const API_URL = "https://room-22-train.herokuapp.com";

function App() {
   // gets the user information after authentication
   const { user } = useAuth0();
   console.log(user);
   // const { name, picture, email } = user;

   // Sets the style of the sidebar to show it
   const [form, setForm] = useState(false);
   const [modal, setModal] = useState("");
   const [data, setData] = useState([]);
   const [error, setError] = useState("");
   const [formLocation, setformLocation] = useState()

   console.log(error);
   //! the GET request
   useEffect(() => {
      async function getData() {
         try {
            const response = await fetch(`${API_URL}/media`);
            const newData = await response.json();
            if (newData.success === true) {
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

   useEffect(() => {
      console.log(formLocation)
   },[formLocation])


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
               setformLocation = {setformLocation}
            />
         </div>
         {modal ? <PhotoModal photo={modal} setModal={setModal} /> : <></>}
         {form ? <Form setForm={setForm} formLocation={formLocation} /> :  <></>}
      </div>
   );
}

export default App;

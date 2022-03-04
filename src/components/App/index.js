import style from "./App.module.css";

import Navbar from "./Navbar";
import { React, useState, useEffect } from "react";
import PhotoModal from "./PhotoModal/index";
import Form from "./Form";
import { useAuth0 } from "@auth0/auth0-react";
import MarkerMap from "../Map";

// const API_URL = "https://room-22-train.herokuapp.com";
const API_URL = "http://localhost:5500";

function App() {
   //! AUTH0 stuff
   const { user } = useAuth0();

   // Sets the style of the sidebar to show it
   const [form, setForm] = useState(false);
   const [modal, setModal] = useState("");
   const [data, setData] = useState([]);
   const [error, setError] = useState("");
   console.log(error);

   //! the GET request
   useEffect(() => {
      async function getData() {
         const email = user.email;
         console.log(email);
         try {
            const response = await fetch(`${API_URL}/users/${email}`);
            const newData = await response.json();
            console.log("THIS IS THE DATA IN THE MOUNTED USEEFFECT", newData);
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
   console.log(data);
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
            />
         </div>
         {modal ? <PhotoModal photo={modal} setModal={setModal} /> : <></>}
         {form ? <Form setForm={setForm} /> : <></>}
      </div>
   );
}

export default App;

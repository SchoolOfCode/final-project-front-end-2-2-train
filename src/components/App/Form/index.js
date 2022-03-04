//import { ColorLensOutlined } from "@mui/icons-material"; //! not used; commented out for netlify
import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.css";
const API_URL = "https://room-22-train.herokuapp.com";

export default function Form({ setForm, formLocation }) {
   const [obj, setObj] = useState({});

   //Using useForm hook to add validation to the form in line with HTML standards.
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      setObj({...data,lat:formLocation.lat,lng:formLocation.lng});
   };
   const [media, setMedia] = useState([]);
   const [error, setError] = useState("");

   console.log(media, error);

   console.log(watch("example")); // watch input value by passing the name of it
   // The POST request.

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
               const result = await response.json();
               if (result.success === true) {
                  console.log(result);
                  setMedia(result.payload);
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

   //The callback function "register" passes the input into the useForm Hook.
   //"Required" adds validation to inputted data.

   return (
      <div className={style.sidebarContainer}>
         <p className={style.close} onClick={() => setForm(false)}>
            X
         </p>
         <form
            className={style.formContainer}
            onSubmit={handleSubmit(onSubmit)}>
            <input
               className={style.fileInput}
               type="file"
               placeholder="Image"
               {...register("aws_key", { required: true })}
            />
            <input
               placeholder="Title"
               {...register("media_title", {
                  required: true,
                  minLength: 1,
                  maxLength: 40,
               })}
            />
            <input
               placeholder="Location"
               {...register("location", {
                  required: true,
                  minLength: 1,
                  maxLength: 40,
               })}
            />
            <input
               placeholder="Date"
               type="date"
               {...register("date", { required: true })}
            />
            <input
               className={style.formContainerTextarea}
               placeholder="Note"
               {...register("media_descr", {
                  required: true,
                  minLength: 1,
                  maxLength: 80,
               })}
            />
            {/* Errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className={style.formContainerButton} type="submit" />
         </form>
      </div>
   );
}

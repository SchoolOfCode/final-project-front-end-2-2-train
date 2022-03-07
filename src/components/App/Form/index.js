//import { ColorLensOutlined } from "@mui/icons-material"; //! not used; commented out for netlify
import Axios from "axios";
import { React, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.css";


const API_URL = "http://localhost:5500";
// const API_URL = "https://gray2-2.herokuapp.com";


export default function Form({
   setForm,
   formLocation,
   setTemporaryPin,
   addNewPin,
   clickLocation,
}) {

   const [obj, setObj] = useState({});
   const [image, setImage] = useState();
   const [imageUrl, setImageUrl] = useState();
   const [data, setData] = useState();

   //Using useForm hook to add validation to the form in line with HTML standards.
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   //Sets Data on submit of the form
   const onSubmit = async (data) => {
      console.log("This is the data", data);
      setData(data);
      uploadImage();
   };

   //Uploads image to Cloudinary and returns a URL
   const uploadImage = () => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "syfwteis");

      Axios.post(
         "https://api.cloudinary.com/v1_1/dansutton/image/upload",
         formData
      ).then((response) => {
         console.log(response.data.url);
         setImageUrl(response.data.url);
         return response.data.url;
      });
   };


   //Using useForm hook to add validation to the form in line with HTML standards.
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();

   const onSubmit = async (data) => {
      console.log("This is the data", data);
      setData(data);
      uploadImage();
      setTemporaryPin(false);
      addNewPin(clickLocation);
   };


   //Once the image has been uploaded to Cloudinary, the data has the Iamge URL and the location data added

   useEffect(() => {
      setObj({
         loc_id: 4,
         img_url: imageUrl,

         ...data,
         // lat: formLocation.lat,
         // lng: formLocation.lng,

      });
   }, [imageUrl]);

   const [media, setMedia] = useState([]);
   const [error, setError] = useState("");

   console.log(media, error);

   console.log(watch("example")); // watch input value by passing the name of it
   // The POST request.

   //When the form Object is updated with Final data, the Object is posted to the database
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

   console.log(obj);
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
               onChange={(e) => {
                  setImage(e.target.files[0]);
               }}
            />
            <input
               placeholder="Title"
               type="text"
               {...register("title", {
                  required: true,
                  minLength: 1,
                  maxLength: 40,
               })}
            />
            <input
               placeholder="Place"
               type="text"
               {...register("place", {
                  required: true,
                  minLength: 1,
                  maxLength: 40,
               })}
            />
            <input
               className={style.formContainerTextarea}
               placeholder="Note"
               type="text"
               {...register("notes", {
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

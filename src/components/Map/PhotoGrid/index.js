import React, { useState, useEffect } from "react";
import style from "./photogrid.module.css";
import PhotoCard from "./PhotoCard";
import { get } from "react-hook-form";

const API_URL = "http://localhost:5500";
// const API_URL = "https://gray2-2.herokuapp.com";

function PhotoGrid({
   setData,
   data,
   setModal,
   setPhotoGridOpened,
   onPhotoGridClose,
   locImages,
}) {
   const [error, setError] = useState("");
   const [deleteItem, setDeleteItem] = useState({});
   const [images, setImages] = useState(false);

   //! DELETE REQUEST
   useEffect(() => {
      async function deleteMedia(deleteItem) {
         console.log(`DEEEELLLEEETE ITEM!`, deleteItem);
         const id = deleteItem;
         console.log(`this ${id} media has been deleted 😅`);
         try {
            const response = await fetch(`${API_URL}/media/${id}`, {
               method: "DELETE",
               headers: { "Content-Type": "application/json" },
               body: JSON.stringify(id),
            });
            const result = await response.json();
            if (result.success === true) {
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
      deleteMedia(deleteItem);
   }, [deleteItem]);

   useEffect(() => {
      async function getImages() {
         const response = await fetch(
            `http://localhost:5500/location/${locImages.user_id}/${locImages.loc_id}`
         );
         const data = await response.json();
         const payload = await data.payload;

         let result = await payload.reduce((unique, o) => {
            if (!unique.some((obj) => obj.media_id === o.media_id)) {
               unique.push(o);
            }
            return unique;
         }, []);

         setImages(result);
      }
      getImages();
   }, [locImages]);

   return (
      <div className={style.photoGridContainer}>
         {images ? (
            images.map((item, index) => {
               return (
                  <PhotoCard
                     key={item.id}
                     dataObj={images[index]}
                     setModal={setModal}
                     setDeleteItem={setDeleteItem}
                  />
               );
            })
         ) : (
            <></>
         )}
      </div>
   );
}

export default PhotoGrid;

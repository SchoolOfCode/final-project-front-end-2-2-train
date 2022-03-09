import React, { useState, useEffect } from "react";
import style from "./photogrid.module.css";
import PhotoCard from "./PhotoCard";

const API_URL = "http://localhost:5500";
// const API_URL = "https://gray2-2.herokuapp.com";

function PhotoGrid({
   setData,
   data,
   setModal,
   setPhotoGridOpened,
   onPhotoGridClose,
}) {
   const [error, setError] = useState("");
   const [deleteItem, setDeleteItem] = useState({});

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

   return (
      <div className={style.photoGridContainer}>
         {data.map((item, index) => (
            <PhotoCard
               key={item.id}
               dataObj={data[index]}
               setModal={setModal}
               setDeleteItem={setDeleteItem}
            />
         ))}
      </div>
   );
}

export default PhotoGrid;

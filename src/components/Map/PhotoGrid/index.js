import React, { useEffect } from "react";
import style from "./photogrid.module.css";
import PhotoCard from "./PhotoCard";
import { get } from "react-hook-form";
//import data from "./data";

function PhotoGrid({
   setData,
   data,
   setModal,
   setPhotoGridOpened,
   onPhotoGridClose,
   locImages,
}) {
   //! DELETE FUNCTION FOR GRID
   function delFunc(id) {
      const objInd = id - 1;
      const newArray = [...data.slice(0, objInd), ...data.slice(objInd + 1)];
      setData(newArray);
   }

   // needs props passed down to map over the data
   //function to pass down to Photocard
   // console.log(data);
   useEffect(() => {
      async function getImages() {
         fetch(`http://localhost:5500/location/${locImages.user_id}/${locImages.loc_id}`)
            .then((response) => response.json())
            .then((data) => console.log("This is our data:", data));
      }
      getImages()
   }, [locImages]);

   return (
      <div className={style.photoGridContainer}>
         {/* <p className={style.close} onClick={() => onPhotoGridClose()}>
            X
         </p> */}
         {data.map((item, index) => (
            <PhotoCard
               key={item.id}
               dataObj={data[index]}
               delFunc={delFunc}
               setModal={setModal}
            />
         ))}
      </div>
   );
}

export default PhotoGrid;

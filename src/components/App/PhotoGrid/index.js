import React from "react";
import style from "./photogrid.module.css";
import PhotoCard from "./PhotoCard";
//import data from "./data";

function PhotoGrid({ data }) {
   // needs props passed down to map over the data
   //function to pass down to Photocard
   console.log(data);
   return (
      <div className={style.photoGridContainer}>
         {data.map((item, index) => (
            <PhotoCard key={item} props={data[index]} />
         ))}
      </div>
   );
}

export default PhotoGrid;

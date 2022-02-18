import React from "react";
import style from "./photogrid.module.css";
import PhotoCard from "./PhotoCard";
import data from "./data";

function PhotoGrid() {  
    return (
    <div className={style.photoGridContainer}>
      {data.map((item, index) => (
        <PhotoCard key={item} props={data[index]} />
      ))}
    </div>
  );
}

export default PhotoGrid;

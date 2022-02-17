import React from "react";
import style from "./photogrid.module.css";
import PhotoCard from "./PhotoCard";
import data from "./data";

function PhotoGrid() {
  return (
    <div>
      <h1>Heres the photo</h1>
      <div className={style.photoGridContainer}>
        {data.map((item, index) => (
          <PhotoCard key={item} props={data[index]} />
        ))}
      </div>
    </div>
  );
}

export default PhotoGrid;

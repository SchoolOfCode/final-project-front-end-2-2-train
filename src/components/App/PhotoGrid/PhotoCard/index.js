import { React, useState } from "react";
import style from "./photocard.module.css";

function PhotoCard({ key, props }) {
  // console.log("reached here!");
  // const [showCard, setShowCard] = useState(false);
  //! PROPS RECEIVED
  // TODO: Change the props and delete components

  return (
    <div className={style.container}>
      <div className={style.photoContainer}>
        <img className={style.photoFront} src={props.image} alt={key} />
        <div className={style.photoBack}>
          <h2>{props.title}</h2>
          <h2>{props.location}</h2>
          <h3>{props.date}</h3>
          <h4>{props.note}</h4>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;

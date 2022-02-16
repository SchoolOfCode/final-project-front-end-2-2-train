import { React, useState } from "react";
import style from "./photocard.module.css";

function PhotoCard() {
  // console.log("reached here!");
  // const [showCard, setShowCard] = useState(false);
  //! PROPS RECEIVED
  // TODO: Change the props and delete components

  return (
    <div className={style.photoContainer}>
        <img className={style.photo}
          src="https://images.unsplash.com/photo-1466837897943-4061ba57b740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
          alt="dudeoncomp"
          // onMouseEnter={() => {
          //   setShowCard(true);
          // }}
          // onMouseLeave={() => {
          //   setShowCard(false);
          // }}
        />
      <div className={style.photoCardDiv}>
        <h2>Room</h2>
        <h3>21/02/22</h3>
        <h4>This is my living room</h4>
      </div>
    </div>
  );
}

export default PhotoCard;

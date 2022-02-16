import { React, useState } from "react";
import style from "./photo.module.css";

function Photo() {
  console.log("reached here!");
  const [showCard, setShowCard] = useState(false);
  //! PROPS RECEIVED
  // TODO: Change the props and delete components

  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1466837897943-4061ba57b740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
        alt="dudeoncomp"
        onMouseEnter={() => {
          setShowCard(true);
        }}
        onMouseLeave={() => {
          setShowCard(false);
        }}
      />
      <div className="photoCardDiv">
        <h2>image.title</h2>
      </div>
    </div>
  );
}

export default Photo;

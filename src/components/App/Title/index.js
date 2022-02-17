import React from "react";
import style from "./Title.module.css";

function Title() {
  return (
    <div>
      <h1 className={style.title}>
        Memo
        <br />
        Map{" "}
      </h1>
      <img src="../../../../public/img/all.svg" alt="" />
    </div>
  );
}

export default Title;

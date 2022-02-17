import React from "react";
import style from "./SidebarBtn.module.css";
import Sidebar from "./Sidebar";

function SidebarBtn() {
  return (
    <div className={style.sideBarDiv}>
      <Sidebar />
    </div>
  );
}

export default SidebarBtn;

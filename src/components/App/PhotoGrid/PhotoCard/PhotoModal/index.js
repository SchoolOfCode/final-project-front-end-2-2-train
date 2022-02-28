import { DataObject } from "@mui/icons-material";
import React from "react";
import style from "./PhotoModal.module.css";

function PhotoModal({ photo, note }) {
   //  // Get the modal
   //  var modal = document.getElementById("myModal");

   //  // Get the <span> element that closes the modal
   //  var span = document.getElementsByClassName("close")[0];

   //  // When the user clicks anywhere outside of the modal, close it
   //  window.onclick = function (event) {
   //     if (event.target == modal) {
   //        modal.style.display = "none";
   //     }
   //  };

   return (
      <div>
         <div className={style.modal}>
            <img src={photo} alt="Modal Pic" />
            <div className={style.modalContent}>
               <p>{note}</p>
            </div>
         </div>
      </div>
   );
}

export default PhotoModal;

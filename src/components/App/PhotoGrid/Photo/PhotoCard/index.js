import React from "react";
import style from "./photocard.module.css";
import TitleDataDisplay from "./TitleDataDisplay";
import LocationDataDisplay from "./LocationDataDisplay";
import NoteDataDisplay from "./NoteDataDisplay";
import DateDisplay from "./DateDisplay";

function PhotoCard() {
  return (
    <div>
      <h1>PhotoCard</h1>
      <TitleDataDisplay />
      <LocationDataDisplay />
      <NoteDataDisplay />
      <DateDisplay />
    </div>
  );
}

export default PhotoCard;

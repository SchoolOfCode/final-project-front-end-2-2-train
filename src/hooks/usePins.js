import { useState } from "react";

export default function usePins(mockData) {
   const [pins, setPins] = useState(mockData);

   function newPlaceId() {
      const id = pins.length + 1;
      return id;
   }

   function addNewPin(placeData) {
      const newPlace = {
         id: newPlaceId(),
         lat: placeData.lat,
         lng: placeData.lng,
      };
      setPins([...pins, newPlace]);
      return newPlace;
   }

   return [pins, addNewPin, newPlaceId];
}

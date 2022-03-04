import { useState } from "react";

export default function usePins(mockData) {
   const [pins, setPins] = useState(mockData);

   function newLocationId() {
      const id = pins.length + 1;
      return id;
   }

   function addNewPin(locationData, isMapInteractive) {
      if (!isMapInteractive) {
         return } else {
      const newLocation = {
         id: newLocationId(),
         lat: locationData.lat,
         lng: locationData.lng,
      }
      setPins([...pins, newLocation]);
      return newLocation
      };

   }

   return [pins, addNewPin, newLocationId];
}

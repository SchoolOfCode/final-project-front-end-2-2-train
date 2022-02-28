import React, { useState } from "react";

export default function usePins(mockData) {
   const [pins, setPins] = useState(mockData);

   function addNewPin(locationData) {
      function newLocationId() {
         const id = pins.length + 1;
         return id;
      }

      const newLocation = {
         id: newLocationId(),
         lat: locationData.lat,
         lng: locationData.lng,
      };

      setPins([...pins, newLocation]);
   }

   return [pins, addNewPin];
}

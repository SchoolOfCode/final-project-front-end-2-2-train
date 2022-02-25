import React, { useRef, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import Pins from "./Pins";

//import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

import "mapbox-gl/dist/mapbox-gl.css";

import mockData from "./mockLocations.json"; // importing mock locations for testing
import { Pin } from "@mui/icons-material";

// FIXME: secure access token
const mapboxAccessToken =
   "pk.eyJ1IjoiZ3JheWNhbm55IiwiYSI6ImNrenZpbGhqcTBpY2wydnJ1ZG44OTUyYjgifQ.LiRNo2hwZaa9c3zAuQimCA";
function MarkerMap() {
   // set style to adjust marker size
   const mystyle = {
      height: "7vh",
      width: "auto",
   };

   //creating state for locations data - currently using mockData
   //TODO: will need to be adjusted to fetch all location data of user (useEffect)
   const [locations, setlocations] = useState(mockData);

   function markerClick() {
      console.log("Marker Clicked"); // use to display pictures
   }

   // displays lat and long values for click event on map
   function onMapClicked(e) {
      console.log("map was clicked here", e.lngLat);
      const locationData = e.lngLat;

      // currently calling the addNewMarker function directly onClick
      // TODO: instead of directly displaying a new Marker, a button an "add new pin" button should pop up, giving the user control over whether they would like to create a new pin
      addNewMarker(locationData);
   }

   // temporary function to create a new id for the location date; can be removed once date is sent to database and id's are generated automatically via PK of database
   function newLocationId() {
      const id = locations.length + 1;
      return id;
   }

   // adds new location value to current useState; will have to be changed to post the information to the database
   function addNewMarker(locationData) {
      const newLocation = {
         id: newLocationId(),
         latitude: locationData.lat,
         longitude: locationData.lng,
      };
      setlocations([...locations, newLocation]);
   }

   return (
      <Map
         mapboxAccessToken={mapboxAccessToken}
         initialViewState={{
            longitude: -0.11,
            latitude: 51.5,
            zoom: 9,
            pitchWithRotate: false,
            dragRotate: false,
         }}
         // style={{ width: 600, height: 400 }} //? Do we want a full size map or resize the map container?
         mapStyle="mapbox://styles/mapbox/streets-v9"
         onClick={(e) => {
            onMapClicked(e);
         }}>
         <Pins locations={locations} onClick={markerClick} />
      </Map>
   );
}

export default MarkerMap;

//TODO: Refactor Code:
// - consider creating a custom Hook to separate the logic
// - remove accessToken from this file
//? - should the map function for multiple markers be in a separate file?

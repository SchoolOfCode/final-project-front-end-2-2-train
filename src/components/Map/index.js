import React, { useState, useEffect } from "react";
import Map from "react-map-gl";
import Pins from "./Pins";
import AddPinButton from "./AddPinButton";
import "mapbox-gl/dist/mapbox-gl.css";
import mockData from "./mockLocations.json"; // importing mock locations for testing


// FIXME: secure access token
const mapboxAccessToken =
   "pk.eyJ1IjoiZ3JheWNhbm55IiwiYSI6ImNrenZpbGhqcTBpY2wydnJ1ZG44OTUyYjgifQ.LiRNo2hwZaa9c3zAuQimCA";
function MarkerMap() {
   //creating state for locations data - currently using mockData
   //TODO: will need to be adjusted to fetch all location data of user (useEffect)
   const [locations, setLocations] = useState(mockData);
   const [showPopup, setShowPopup] = useState(false);
   const [clickLocation, setClickLocation] = useState({
      lat: 51.5072,
      lng: -0.1276,
   });
   // const [buttonLocation, setButtonLocation] = useState({
   //    latitude: 51.5072,
   //    longitude: -0.1276,
   // });

   function markerClick() {
      console.log("Marker Clicked"); // use to display pictures
   }

   // displays lat and long values for click event on map
   function onMapClicked(e) {
      const locationData = e.lngLat;

      const newLocation = {
         id: newLocationId(),
         lat: locationData.lat,
         lng: locationData.lng,
      };

      setClickLocation(newLocation);
      // console.log(locationData);

      // currently calling the addNewMarker function directly onClick
      // TODO: instead of directly displaying a new Marker, a button an "add new pin" button should pop up, giving the user control over whether they would like to create a new pin
      // addNewMarker(locationData);

      //setButtonLocation(e.lngLat);
      // buttonClick(locationData);
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
         lat: locationData.lat,
         lng: locationData.lng,
      };
      setLocations([...locations, newLocation]);
   }

   useEffect(() => {
      setShowPopup(true);
   }, [clickLocation]);

   useEffect(() => {
      setShowPopup(false);
   }, [locations]);

   function handleShowPopup() {
      setShowPopup(false);
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
         mapStyle="mapbox://styles/graycanny/cl06rug4o004o14ro0szy0z5p/draft"
         onClick={(e) => {
            onMapClicked(e);
         }}>
         <Pins locations={locations} onClick={markerClick} />
         {showPopup && (
            <AddPinButton
               handleShowPopup={handleShowPopup}
               clickLocation={clickLocation}
               addNewMarker={addNewMarker}
            />
         )}
      </Map>
   );
}

export default MarkerMap;

//TODO: Refactor Code:
// - consider creating a custom Hook to separate the logic
// - remove accessToken from this file
//? - should the map function for multiple markers be in a separate file?

//Click on map
//Button appears on the location where you clicked
//If button is clicked run addmarker() to render pin

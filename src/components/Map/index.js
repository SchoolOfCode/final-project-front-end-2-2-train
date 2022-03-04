import React, { useState, useEffect } from "react";
import Map from "react-map-gl";
import Pins from "./Pins";
import AddPinButton from "./AddPinButton";
import "mapbox-gl/dist/mapbox-gl.css";
import mockData from "./mockLocations.json"; // importing mock locations for testing
import usePins from "../../hooks/usePins";
import PhotoGrid from "../Map/PhotoGrid";

// FIXME: secure access token
const mapboxAccessToken =
   "pk.eyJ1IjoiZ3JheWNhbm55IiwiYSI6ImNrenZpbGhqcTBpY2wydnJ1ZG44OTUyYjgifQ.LiRNo2hwZaa9c3zAuQimCA";

function MarkerMap({ setData, data, setModal, setForm }) {
   //creating state for locations data - currently using mockData
   //TODO: will need to be adjusted to fetch all location data of user (useEffect)
   const [showPopup, setShowPopup] = useState(false);
   const [clickLocation, setClickLocation] = useState({ lng: 0, lat: 0 });
   const [pins, addNewPin, newLocationId] = usePins(mockData);
   const [photoGridOpened, setPhotoGridOpened] = useState(false);
   const [isMapInteractive, setIsMapInteractive] = useState(true);

   function markerClick() {
      setPhotoGridOpened(true);
      setIsMapInteractive(false);
   }

   function onPhotoGridClose() {
      setPhotoGridOpened(false);
      setIsMapInteractive(true);
   }

   // displays lat and long values for click event on map
   function onMapClicked(e) {
      const locationData = e.lngLat;

      const newLocation = {
         id: newLocationId,
         lat: locationData.lat,
         lng: locationData.lng,
      };

      setClickLocation(newLocation);
   }

   // rendering pop-up if showPop State is true
   // also don't want to render pop-up if isMapInteractive is false

   // either create a secondary condition
   // or when isMapInteractive is false; showPop up should also be false
   // do we need separate states?  → YES
   // if yes, can we setShowPopup to false, when isMapInteractive is set to false as well

   useEffect(() => {
      setShowPopup(true);
   }, [clickLocation]);

   useEffect(() => {
      setShowPopup(false);
   }, [pins]);

   // useEffect(() => {
   //    setIsMapInteractive(false);
   // }, [photoGridOpened]);

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
         interactive={isMapInteractive}
         // style={{ width: 600, height: 400 }} //? Do we want a full size map or resize the map container?
         mapStyle="mapbox://styles/graycanny/cl06rug4o004o14ro0szy0z5p/draft"
         onClick={(e) => {
            onMapClicked(e);
         }}>
         <Pins locations={pins} markerClick={markerClick} />
         {photoGridOpened ? (
            <PhotoGrid
               setPhotoGridOpened={setPhotoGridOpened}
               setData={setData}
               data={data}
               setModal={setModal}
               onPhotoGridClose={onPhotoGridClose}
            />
         ) : (
            <div />
         )}
         {showPopup && isMapInteractive && (
            <AddPinButton
               // TODO: change name of AddPinButton component → it is a pop-up
               handleShowPopup={handleShowPopup}
               clickLocation={clickLocation}
               addNewPin={addNewPin}
               setForm={setForm}
               isMapInteractive={isMapInteractive}
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

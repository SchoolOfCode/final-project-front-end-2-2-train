import React, { useRef, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import pin from "./pin.png";
//import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import style from "./Map.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

import mockData from "./mockLocations.json"; // importing mock locations for testing

const mapboxAccessToken =
   "pk.eyJ1IjoiZ3JheWNhbm55IiwiYSI6ImNrenZpbGhqcTBpY2wydnJ1ZG44OTUyYjgifQ.LiRNo2hwZaa9c3zAuQimCA";
// mapboxAccessToken

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
      console.log("Marker Clicked");
   }

   return (
      <Map
         mapboxAccessToken={mapboxAccessToken} //? not sure if this is the correct way to pass in accessToken prop
         initialViewState={{
            longitude: -0.11,
            latitude: 51.5,
            zoom: 9,
            pitchWithRotate: false,
            dragRotate: false,
         }}
         // style={{ width: 600, height: 400 }} //! leaving style prop in case we want to specify the height/width later on
         mapStyle="mapbox://styles/mapbox/streets-v9">
         <>
            {locations.map((location) => {
               return (
                  <Marker
                     key={location.id}
                     longitude={location.longitude}
                     latitude={location.latitude}
                     anchor="bottom">
                     <img
                        onClick={() => {
                           markerClick();
                        }}
                        src={pin}
                        alt="pin"
                        style={mystyle}
                        className={style.marker}
                     />
                  </Marker>
               );
            })}
         </>

         {/* <Marker longitude={-0.11} latitude={51.5} anchor="bottom">
            <img
               onClick={() => {
                  markerClick();
               }}
               src={pin}
               style={mystyle}
               className={style.marker}
            />
         </Marker>
         <Marker longitude={-1.89} latitude={52.48} anchor="bottom">
            <img
               onClick={() => {
                  markerClick();
               }}
               src={pin}
               style={mystyle}
               className={style.marker}
            />
         </Marker> */}
      </Map>
   );

   // const mapContainer = useRef(null);
   // const map = useRef(null);
   // //Location on load
   // const [lng, setLng] = useState(-0.11);
   // const [lat, setLat] = useState(51.5);
   // const [zoom, setZoom] = useState(9);
   // //Pins
   // const [pin, setPin] = useState();

   // useEffect(() => {
   //    if (map.current) return; // initialize map only once
   //    map.current = new mapboxgl.Map({
   //       container: mapContainer.current,
   //       style: "mapbox://styles/mapbox/streets-v11",
   //       center: [lng, lat],
   //       zoom: zoom,
   //       pitchWithRotate: false,
   //       dragRotate: false,
   //    });
   // });
   // useEffect(() => {
   //    if (!map.current) return; // wait for map to initialize
   //    map.current.on("move", () => {
   //       setLng(map.current.getCenter().lng.toFixed(4));
   //       setLat(map.current.getCenter().lat.toFixed(4));
   //       setZoom(map.current.getZoom().toFixed(2));
   //    });
   // });

   // useEffect(() => {
   //    map.current.on("style.load", function () {
   //       map.current.on("click", function (e) {
   //          var coordinates = e.lngLat;
   //          console.log(coordinates);
   //          setPin(coordinates);
   //          // new mapboxgl.Popup()
   //          //    .setLngLat(coordinates)
   //          //    .setHTML("you clicked here: <br/>" + coordinates)
   //          //    .addTo(map.current);
   //       });
   //    });
   // }, [map]);

   // return <div ref={mapContainer} className="map-container" />;
}

export default MarkerMap;

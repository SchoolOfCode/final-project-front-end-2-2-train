import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// import style from "./Map.module.css";

mapboxgl.accessToken =
   "pk.eyJ1IjoiZ3JheWNhbm55IiwiYSI6ImNrenZpbGhqcTBpY2wydnJ1ZG44OTUyYjgifQ.LiRNo2hwZaa9c3zAuQimCA";
function Map() {
   const mapContainer = useRef(null);
   const map = useRef(null);
   //Location on load
   const [lng, setLng] = useState(-0.11);
   const [lat, setLat] = useState(51.5);
   const [zoom, setZoom] = useState(9);
   //Pins
   const [pin, setPin] = useState();

   useEffect(() => {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
         container: mapContainer.current,
         style: "mapbox://styles/mapbox/streets-v11",
         center: [lng, lat],
         zoom: zoom,
         pitchWithRotate: false,
         dragRotate: false,
      });
   });
   useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on("move", () => {
         setLng(map.current.getCenter().lng.toFixed(4));
         setLat(map.current.getCenter().lat.toFixed(4));
         setZoom(map.current.getZoom().toFixed(2));
      });
   });

   useEffect(() => {
      map.current.on("style.load", function () {
         map.current.on("click", function (e) {
            var coordinates = e.lngLat;
            console.log(coordinates);
            setPin(coordinates);
            // new mapboxgl.Popup()
            //    .setLngLat(coordinates)
            //    .setHTML("you clicked here: <br/>" + coordinates)
            //    .addTo(map.current);
         });
      });
   }, [map]);

   return <div ref={mapContainer} className="map-container" />;
}

export default Map;

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import geostyle from "./geo.module.css";
export default function GeoSearch({ setMapLoc }) {
   const {
      register,
      handleSubmit,
      // watch,
      // formState: { errors },
   } = useForm();
   const onSubmit = async (data) => {
      getLatLng(data.search);
   };

   async function getLatLng(search) {
      let response = await fetch(
         `https://us1.locationiq.com/v1/search.php?key=pk.25f2058579dc590174cea4898a871a51&q=${search}&format=json`
      );
      let data = await response.json();
      console.log("Returned data", data[0].lon, data[0].lat);
      setMapLoc({ lng: data[0].lon, lat: data[0].lat });
      Swal.fire({
         position: "top-end",
         title: "Search Successful! Zoom out to find Pinit button",
         showConfirmButton: false,
         timer: 3000,
      });
   }

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={geostyle.form}>
         <input
            placeholder="Search for a location"
            {...register("search")}
            className={geostyle.input}
         />
         <input type="submit" className={geostyle.button} />
      </form>
   );
}

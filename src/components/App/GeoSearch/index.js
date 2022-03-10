import { useForm } from "react-hook-form";


export default function GeoSearch({ setMapLoc }) {
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
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
      setMapLoc({ longitude: data[0].lon, latitude: data[0].lat });
   }

   return (
      
         <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Search" {...register("search")} />
            <input type="submit" />
         </form>
      
   );
}

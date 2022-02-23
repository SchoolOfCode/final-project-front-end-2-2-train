import React from "react";
import { useForm } from "react-hook-form";
import style from "./Sidebar.module.css";
//const API_URL = "https://room-22-train.herokuapp.com";

export default function Form({ opened }) {
   const styleAdd = opened
      ? `${style.sidebarContainer}`
      : `${style.sidebarContainer} ${style.sidebarHidden}`;
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);

   console.log(watch("example")); // watch input value by passing the name of it

   return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form className={styleAdd} onSubmit={handleSubmit(onSubmit)}>
         {/* register your input into the hook by invoking the "register" function */}
         <input {...register("Title")} />

         {/* include validation with required or other standard HTML validation rules */}
         <input {...register("exampleRequired", { required: true })} />
         {/* errors will return when field validation fails  */}
         {errors.exampleRequired && <span>This field is required</span>}

         <input type="submit" />
      </form>
   );
}

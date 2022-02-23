import React from "react";
import { useForm } from "react-hook-form";
import style from "./Form.module.css";
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
      <div className={styleAdd}>
         <form
            className={style.formContainer}
            onSubmit={handleSubmit(onSubmit)}>
            <input
               placeholder="Image"
               {...register("aws_key", { required: true })}
            />
            <input
               placeholder="Title"
               {...register("media_title", { required: true })}
            />
            <input
               placeholder="Location"
               {...register("location", { required: true })}
            />
            <input
               placeholder="Date"
               type="date"
               {...register("date", { required: true })}
            />
            <input
               className={style.formContainerTextarea}
               placeholder="Note"
               {...register("media_descr", { required: true })}
            />
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <input className={style.formContainerButton} type="submit" />
         </form>
      </div>
   );
}

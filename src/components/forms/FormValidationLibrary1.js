import React from "react";
import { useForm } from "react-hook-form";//npm i react-hook-form (install) ,and import useForm

export default function FormValidationLibrary1() {
  // imported useform() is a hook only that will return many predefined things as below
  const {register,handleSubmit,formState: { errors },} = useForm();


  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>{/*in data section we can write our desired logic  */}
      <input {...register("firstName")} />

      <input {...register("lastName", { required: true })} />{/* required make things mandatory */}
      {errors.lastName && (<span className="text-danger">Last name is required.</span>)}
      
      <input {...register("age", { pattern: /\d+/ })} />
      {errors.age && (<span className="text-danger">Please enter number for age.</span>)}

      <input type="submit" />
    </form>
  );
}
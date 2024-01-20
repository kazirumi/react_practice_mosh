import React, { FormEvent, useRef, useState } from "react";
import { FieldValue, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const personSchema = z.object({
  name: z.string().min(3,{message:'should be three character'}),
  age: z.number({invalid_type_error:'age field is required'}).min(21)
});

type formData = z.infer<typeof personSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isValid },
  } = useForm<formData>({resolver:zodResolver(personSchema)});

  const onSubmit = (data: FieldValue<{ name: string; age: number }>) => {
    console.log(data);
  };

  return (
    <div>
      <div className="mb-3 ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name" className="form-label"></label>
          <input
            {...register("name")}
            placeholder="name"
            id="name"
            type="text"
            className="form-control"
          />
          {errors.name  && <p className="text-danger">{errors.name.message}</p>}

          <label htmlFor="age" className="form-label"></label>
          <input
            {...register("age",{valueAsNumber:true})}
            placeholder="age"
            id="age"
            type="number"
            className="form-control"
          />
          {errors.age  && <p className="text-danger">{errors.age.message}</p>}

          <button disabled={!isValid} type="submit" className="mt-4 btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

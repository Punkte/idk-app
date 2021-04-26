import React from 'react'
import { useForm }from 'react-hook-form'

const Create = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // console.log(watch("titre")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <label for="titre">
        titre
      </label>
      <input id="titre"  {...register("titre")} />
      <label for="realisateur">
        realisateur
      </label>
      <input id="realisateur" {...register("realisateur", { required: true })} />
      <label for="date_sortie">
        date_sortie
      </label>
      <input id="date_sortie" {...register("date_sortie", { required: true })} type="date" />
      <label for="note">
        note
      </label>
      <input id="note" {...register("note", { required: true })} type="number" />
      <label for="img">
        img
      </label>
      <input id="img" {...register("img", { required: false })}  />
      <label for="synopsis">
        synopsis
      </label>
      <textarea id="synopsis" {...register("synopsis", { required: true })}></textarea>
      
      {Object.keys(errors).length && <span>{Object.keys(errors).join(', ') + ' are not valid.'}</span>}
      <input type="submit" />
    </form>
  );
}

export default Create

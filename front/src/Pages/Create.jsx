import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { API_URL } from '../constants'

const Create = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [note, setNote] = useState(0);
  const onSubmit = async data => {
    const payload = {
      "title": data?.titre,
      "producer": data?.realisateur,
      "parutionDate": data?.date_sortie,
      "image": data?.img,
      "synopsis": data?.synopsis,
      "note": +data?.note
    }
    const req = await fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    const res = await req.json()
    // if(res.)
  };

  // console.log(watch("titre")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="create">
      <h1>Ajouter un film nul à la liste</h1>
      <form className="create___form" onSubmit={handleSubmit(onSubmit)}>
        <label id="label___titre" for="titre">
          Titre
      </label>
        <input placeholder="Titre du film" className="create___titre" id="titre"  {...register("titre")} />
        <label id="label___realisateur" for="realisateur">
          Réalisateur
      </label>
        <input placeholder="Nom du réalisateur" className="create___realisateur" id="realisateur" {...register("realisateur", { required: true })} />
        <label id="label___date" for="date_sortie">
          date_sortie
      </label>
        <input className="create___date" id="date_sortie" {...register("date_sortie", { required: true })} type="date" />
        <label id="label___note" for="note">
          Note
      </label>
        <div class="create___rating">
          <span className={note >= 5 ? "plein" : null} onClick={() => setNote(5)}>&#9734;</span>
          <span className={note >= 4 ? "plein" : null} onClick={() => setNote(4)}>&#9734;</span>
          <span className={note >= 3 ? "plein" : null} onClick={() => setNote(3)}>&#9734;</span>
          <span className={note >= 2 ? "plein" : null} onClick={() => setNote(2)}>&#9734;</span>
          <span className={note >= 1 ? "plein" : null} onClick={() => setNote(1)}>&#9734;</span>
        </div>
        <input placeholder="Note du film sur 5" value={note} className="create___note" id="note" {...register("note", { required: true })} type="number" min="0" max="5" />
        <label id="label___img" for="img">
          Image
      </label>
        <input placeholder="Affiche du film" className="create___img" id="img" {...register("img", { required: false })} />
        <label id="label___synopsis" for="synopsis">
          Synopsis
      </label>
        <textarea placeholder="Synopsis du film ..." className="create___synopsis" id="synopsis" {...register("synopsis", { required: true })}></textarea>

        {Object.keys(errors).length && <span>{Object.keys(errors).join(', ') + ' are not valid.'}</span>}
        <input className="create___submit" value="Enregistrer" type="submit" />
      </form>
    </div>
  );
}

export default Create

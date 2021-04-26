import React, { useState } from 'react'
import films from '../films.json'

function Card({
  titre,
  realisateur,
  date_sortie,
  note,
  img,
  synopsis,
  onSelect
}) {
  return (
    <div className="card col-4" onClick={onSelect}>
      <p className="card__title">{titre}</p>
      <p> Note: {note}</p>
      <img src={img} alt={titre} />
    </div>
)
}

export default Card

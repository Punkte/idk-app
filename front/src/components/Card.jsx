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
      <img src={img} alt={titre} />
      <div className="rating">
        <span className={note >= 1 ? "plein" : null}>&#9734;</span>
        <span className={note >= 2 ? "plein" : null}>&#9734;</span>
        <span className={note >= 3 ? "plein" : null}>&#9734;</span>
        <span className={note >= 4 ? "plein" : null}>&#9734;</span>
        <span className={note >= 5 ? "plein" : null}>&#9734;</span>
        <p> Note: {note}</p>
      </div>
    </div>
  )
}

export default Card

      
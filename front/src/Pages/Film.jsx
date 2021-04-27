import React from 'react'
import { useParams } from 'react-router'
import films from '../films.json'

const Film = () => {
  const { id } = useParams()
  const {
    titre,
    realisateur,
    date_sortie,
    note,
    img,
    synopsis
  } = films[+id]
  
  return (
    <div>
      <div className="film">
        <h1 className="film___titre">{titre}</h1>
        <h5 className="film___realisateur">De {realisateur}</h5>
        <div className="film___img"><img src={img} alt={titre} /></div>
        <h5 className="film___date">Sorti le {date_sortie}</h5>
        <p className="film___synopsis">{synopsis}</p>
        <div class="rating">
          <span className={note >= 1 ? "plein" : null}>&#9734;</span>
          <span className={note >= 2 ? "plein" : null}>&#9734;</span>
          <span className={note >= 3 ? "plein" : null}>&#9734;</span>
          <span className={note >= 4 ? "plein" : null}>&#9734;</span>
          <span className={note >= 5 ? "plein" : null}>&#9734;</span>
          <p> Note: {note}</p>
        </div>
        <div className="film___commentaires">Commentaires ?</div>
      </div>
    </div>
  )
}

export default Film

import React from 'react'

const Film = ({
  titre,
  realisateur,
  date_sortie,
  note,
  img,
  synopsis,
}) => {
  return (
    <div>
      <h1>{titre}</h1>
      <h3>{realisateur}</h3>
      <img src={img} alt={titre} />
      <h5>Sorti le {date_sortie}</h5>
      <p>{synopsis}</p>
      <div>{note}</div>
      <div>Commentaires ?</div>
    </div>
  )
}

export default Film

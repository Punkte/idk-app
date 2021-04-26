import React from 'react'
import Card from '../components/Card'
import films from '../films.json';

function Home() {
  
  return (
    <div>
      <h2>Liste des films</h2>
      <div className="row">
        {films.map((film, index) => (
          <Card key={index} {...film} />
        ))}
        {/* <Card /> */}
      </div>
    </div>

  )
}

export default Home

import React from 'react'
import { useHistory } from 'react-router';
import Card from '../components/Card'
import films from '../films.json';

function Home() {

  const history = useHistory()

  const onSelect = (index) => {
    history.push(`film/${index}`)
  }

  return (
    <div>
      <h2>Liste des pires films</h2>
      <div className="row">
        {films.map((film, index) => (
          <Card key={index} {...film} onSelect={() => onSelect(index)} />
        ))}
      </div>
    </div>

  )
}

export default Home

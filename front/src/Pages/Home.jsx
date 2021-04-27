import React from 'react'
import { useHistory } from 'react-router';
import Card from '../components/Card'
import films from '../films.json';
import useFetch from '../hooks/useFetch'
import { API_URL } from '../constants'

function Home() {

  const history = useHistory()
  const { data, error, loading } = useFetch(`${API_URL}/movies`)

  const onSelect = (index) => {
    history.push(`film/${index}`)
  }

  console.log({data})

  return (
    <div>
      <h2>Liste des pires films</h2>
      <div className="row">
        {films.map((film, index) => (
          <Card key={index} {...film} onSelect={() => onSelect(index)} />
        ))}
        {!loading && !error && data !== null && (
          <>
            {data.map((film, index) => (
              <Card
                key={index}
                onSelect={() => onSelect(index)}
                titre={film?.title}
                realisateur={film?.producer}
                date_sortie={film?.parutionDate}
                note={film?.note}
                img={film?.image}
                synopsis={film.synopsis}

              />
            ))}
          </>
        ) }
      </div>
    </div>

  )
}

export default Home

import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'

const Test = () => {
  const [active, setActive] = useState(false)
  const { data, loading, error } = useFetch('https://apimovies.fr/api/movies', [])
  return (
    <div>
      {/* <button onClick={() => {}}>{active ? 'active' : 'disabled'}</button> */}
      { !loading && ( <pre>{JSON.stringify(data)}</pre>) }
    </div>
  )
}

export default Test

import { useEffect, useState } from "react"

/**
 * fetch content from an url
 * @param {string} url 
 * @param {array} deps 
 * @returns 
 */
const useFetch = (url, deps = []) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      setError(false)
      try {
        const req = await fetch(url)
        const res = await req.json()
        setLoading(false)
        setData(res)
      } catch(err) {
        setError(true)
        setLoading(false)
      }
    })()
  }, [...deps])
  
  return { data, error, loading }
}

export default useFetch

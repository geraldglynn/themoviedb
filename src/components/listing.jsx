import React, { useState, useEffect } from 'react'
import { fetchMovies } from '../api/themoviedb'

function Listing(props) {
  const [listing, setListing] = useState({})

  useEffect(() => {
    fetchMovies().then(reponse => setListing(reponse))
  }, [])
  console.log(listing)

  return(
    <div>
      <h1>Listings</h1>
    </div>
  )
}

export default Listing
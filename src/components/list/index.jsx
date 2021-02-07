import React, { useState, useEffect } from 'react'
import { fetchMovies } from '../../api/themoviedb'
import Container from 'react-bootstrap/Container'
import Item from '../item'

function List(props) {
  const [ list, setList ] = useState([])

  useEffect(() => {
    fetchMovies().then(response => setList(response.results))
  }, [])

  return(
    <div>
      <h2>Latest Popular Movies</h2>
      <Container>
        { list.map(item =>
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            originalLanguage={item.original_language}
            originalTitle={item.original_title}
            releaseDate={item.release_date}
            voteAverage={item.vote_average}
            />
          )}
      </Container>
    </div>
  )
}

export default List
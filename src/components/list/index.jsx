import React, { useState, useEffect } from 'react'
import pick from 'lodash/pick'

import { fetchMovies } from 'api/themoviedb'

import Container from 'react-bootstrap/Container'
import Item from 'components/item'

function List() {
  const [ list, setList ] = useState([])

  useEffect(() => {
    fetchMovies().then(response => setList(
      response.map( item =>
        pick(item,
          [
            'id',
            'title',
            'original_title',
            'release_date',
            'vote_average',
          ]
        ))
      ))
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
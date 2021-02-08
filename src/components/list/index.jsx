import React, { useState, useEffect } from 'react'
import pick from 'lodash/pick'

import { fetchMovies } from 'api/themoviedb'

import Container from 'react-bootstrap/Container'
import Item from 'components/item'

import { header } from './list.module.scss'

function List(props) {
  const { language } = props
  const [ list, setList ] = useState([])

  useEffect(() => {
    fetchMovies(language).then(response => setList(
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
    }, [language])

  return(
    <div>
      <h2 className={header}>Latest Popular Movies</h2>
      <Container>
        { list.map(item =>
          <Item
            key={item.id}
            id={item.id}
            title={item.title}
            originalTitle={item.original_title}
            releaseDate={item.release_date}
            voteAverage={item.vote_average}
            language={language}
            />
          )}
      </Container>
    </div>
  )
}

export default List
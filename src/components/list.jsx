import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Item from '../components/item'

function List(props) {
  const [ list, setList ] = useState([])
  const [ genres, setGenres ] = useState({})

  useEffect(() => {
    props.fetchMovies().then(response => setList(response.results))
    props.fetchGenres().then(response => setGenres(response))
  }, [])

  return(
    <div>
      <h1>List</h1>
      <Container>
        { list.map(item => {
          const additionalDetails = {
            overview: item.overview,
            genreIds: item.genre_ids,
            poster: item.poster_path,
            backdrop: item.backdrop_path,
            genres: genres,
            // productionCompanies
          }

          return <Item
              key={item.id}
              id={item.id}
              title={item.title}
              originalLanguage={item.original_language}
              originalTitle={item.original_title}
              releaseDate={item.release_date}
              voteAverage={item.vote_average}
              additionalDetails={additionalDetails}
            />
          })}
      </Container>
    </div>
  )
}

export default List
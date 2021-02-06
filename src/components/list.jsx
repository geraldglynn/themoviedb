import React, { useState, useEffect } from 'react'
import Item from '../components/item'

function List(props) {
  const [ list, setList ] = useState([])

  useEffect(() => {
    props.fetchMovies().then(response => setList(response.results))
  }, [])

  return(
    <div>
      <h1>List</h1>
      { list.map(item =>
        <Item
          key={item.id}
          originalTitle={item.original_title}
          releaseDate={item.release_date}
          voteAverage={item.vote_average}
        />
      )}
    </div>
  )
}

export default List
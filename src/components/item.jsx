import React from 'react'

function Item(props) {
  const {
    originalTitle,
    releaseDate,
    voteAverage,
  } = props

  const infoHandler = () => {
    console.log('INFO...')
  }

  return (
    <div>
      <h2>{originalTitle}</h2>
      <span>{releaseDate}</span>
      <span>{voteAverage}</span>
      <button onClick={infoHandler}>Info</button>
    </div>
  )
}

export default Item
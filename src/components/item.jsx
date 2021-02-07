import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';

import Details from './details'


function Item(props) {
  const {
    id,
    title,
    originalLanguage,
    originalTitle,
    releaseDate,
    voteAverage,
    additionalDetails,
  } = props

  const [showDetails, setShowDetails] = useState(false)

  const handleClose = () => setShowDetails(false)
  const handleShow = () => setShowDetails(true)

  const displayTitle = title === originalTitle ? title : `${title} (${originalTitle})`

  return (
    <Row>
      <h2>{displayTitle}</h2>
      <span>{releaseDate}</span>
      <span>{voteAverage}</span>
      <Button variant="primary" onClick={handleShow}>View</Button>
      <Details
        key={`${id}-details`}
        show={showDetails}
        handleClose={handleClose}
        displayTitle={displayTitle}
        releaseDate={releaseDate}
        voteAverage={voteAverage}
        overview={additionalDetails.overview}
        genreIds={additionalDetails.genreIds}
        genres={additionalDetails.genres}
        // poster: item.poster_path,
        // backdrop: item.backdrop_path,
      />
    </Row>
  )
}

export default Item
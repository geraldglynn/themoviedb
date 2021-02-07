import React from 'react'
import Modal from 'react-bootstrap/Modal'

import { genreString } from '../helpers/genres'

function Details(props) {
  const {
    displayTitle,
    overview,
    genreIds,
    genres,
    show,
    handleClose,
  } = props

  const displayGenres = genreString(genres, genreIds)

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{displayTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{overview}</Modal.Body>
      <Modal.Footer>
        Genres: {displayGenres}
      </Modal.Footer>
    </Modal>
  );
}

export default Details
import React, { useLayoutEffect, useState } from 'react'

import { fetchMovie } from '../../api/themoviedb'

import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProductionCompany from './production-company'

import { genreString } from '../../helpers/movie'
import language from '../../utils/language'

import { poster, date, score, genres } from './details.module.scss'

function Details(props) {
  const {
    id,
    show,
    handleClose,
    displayTitle,
  } = props

  const [movieDetails, setMovieDetails] = useState([])

  useLayoutEffect(() => {
    fetchMovie(id).then(response => setMovieDetails(response))
  }, [])

  const overview = movieDetails.overview || ''
  const releaseDate = movieDetails.release_date || 'TBC'
  const voteAverage = movieDetails.vote_average || '--'
  const originalLanguage = language(movieDetails.original_language || 'xx')
  const displayGenres = genreString(movieDetails.genres || [])
  const productionCompanies = movieDetails.production_companies || []
  const productionCompanyCount = productionCompanies.length
  const posterPath = movieDetails.poster_path || ''
  const posterUrl = posterPath && `https://image.tmdb.org/t/p/w500${posterPath}`



  return (
    <Modal show={show} onHide={handleClose} size="lg">

      <Modal.Header closeButton>
        <Modal.Title>{displayTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={4}>
            <img class={poster} src={posterUrl} />
          </Col>
          <Col>
            <Row>
              <Col className={date}>{releaseDate}</Col>
              <Col className={score}>{voteAverage}/10</Col>
            </Row>
            <Row>
              <Col><p>{overview}</p></Col>
            </Row>
            <Row>
              <Col><h5>Genres</h5></Col>
              <Col className={genres}>{displayGenres}</Col>
            </Row>
            <Row>
              <Col><h5>Production Companies</h5></Col>
            </Row>
            <Row>
              <Col>
                <Row>
                  {productionCompanies.map(productionCompany =>
                    <ProductionCompany
                      key={productionCompany.id}
                      name={productionCompany.name}
                      logoPath={productionCompany.logo_path}
                      productionCompanyCount={productionCompanyCount}
                    />
                  )}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  )
}

export default Details
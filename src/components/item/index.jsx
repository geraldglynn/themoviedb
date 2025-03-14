import React, { useState } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';

import Details from 'components/details'
import { item, heading, date, vote } from './item.module.scss'

function Item(props) {
  const {
    id,
    title,
    originalTitle,
    releaseDate,
    voteAverage,
    language,
  } = props

  const [showDetails, setShowDetails] = useState(false)
  const handleClose = () => setShowDetails(false)
  const handleShow = () => setShowDetails(true)

  const displayTitle = title ?
      title === originalTitle ? title : `${title} (${originalTitle})`
    : 'Unknown'

  return (
    <Row className={item}>
      <Col xs={8}>
        <h2 className={heading} data-testid='item-title'>{displayTitle}</h2>
        <div className={date} data-testid='item-date'>{releaseDate}</div>
      </Col>
      <Col className={vote}>
        <span>{voteAverage || '--'}</span>
      </Col>
      <Col>
        <Button variant="primary" onClick={handleShow}>Info</Button>
      </Col>
      { showDetails &&
        <Details
          key={`${id}-details`}
          id={id}
          show={showDetails}
          handleClose={handleClose}
          displayTitle={displayTitle}
          language={language}
        />
      }
    </Row>
  )
}

export default Item
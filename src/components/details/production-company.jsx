import React from 'react'
import Col from 'react-bootstrap/Col'

import { productionCompany } from './details.module.scss'

function ProductionCompany(props) {
  const {
    name,
    logoPath,
  } = props

  const logoUrl = logoPath && `https://image.tmdb.org/t/p/w200${logoPath}` || null

  return (
    <Col xs={3} className={productionCompany}>
      { logoUrl && <img src={logoUrl} />}
      <p>{name}</p>
    </Col>
  )
}

export default ProductionCompany
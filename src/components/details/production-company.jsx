import React from 'react'
import Col from 'react-bootstrap/Col'

import { productionCompany } from './details.module.scss'

function ProductionCompany(props) {
  const {
    name,
    logoPath,
    productionCompanyCount,
  } = props

  // const name = productionCompany.name
  const logoUrl = logoPath && `https://image.tmdb.org/t/p/w200${logoPath}` || null
  const columnWidth = Math.floor(12 / productionCompanyCount)

  console.log(name)

  return (
    <Col xs={columnWidth} className={productionCompany}>
      { logoUrl && <img src={logoUrl} />}
      <p>{name}</p>
    </Col>
  )
}

export default ProductionCompany
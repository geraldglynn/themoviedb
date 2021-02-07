import React from 'react';
import { render } from '@testing-library/react';

import Item from 'components/item'

const mockMovie = {
  id: '123',
  title: 'Parasite',
  originalTitle: '기생충',
  releaseDate: '2020-02-07',
  voteAverage: '8.5'
}

const renderDom = (movie) => render(
  <Item
    key={movie.id}
    id={movie.id}
    title={movie.title}
    originalTitle={movie.originalTitle}
    releaseDate={movie.releaseDate}
    voteAverage={movie.voteAverage}
  />
)

describe('Item', () => {
  describe('title', () => {
    const dom = renderDom(mockMovie)
    const domText = dom.getByText
    // const domTestId = dom.getByTestId
    it('should render', () => {
      const displayTitle = domText('Parasite (기생충)')
      expect(displayTitle).toBeInTheDocument()
    })
  })
})

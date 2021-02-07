import React from 'react';
import { render, screen } from '@testing-library/react';

import Item from 'components/item'

const mockMovie = {
  id: '123',
  title: 'Parasite',
  originalTitle: '기생충',
  releaseDate: '2020-02-07',
  voteAverage: '4.2'
}

describe('Item', () => {

  describe('movie elements', () => {

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

    const dom = renderDom(mockMovie)
    const domText = dom.getByText
    it('should render title', () => {
      const element = domText('Parasite (기생충)')
      expect(element).toBeInTheDocument()
    })
  })
})

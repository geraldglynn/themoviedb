import { genreString } from 'utils/movie'

describe('movie', () => {
  describe('genreString', () => {

    const genres = [
      {
        id: '1',
        name: 'Horror',
      },
      {
        id: '2',
        name: 'Thriller',
      },
      {
        id: '3',
        name: 'Action',
      },
    ]

    it('should return string seperated by ", "', ()=> {
      expect(genreString(genres)).toBe('Horror, Thriller, Action')
    })

  })
})

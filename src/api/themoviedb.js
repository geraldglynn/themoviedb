import pick from 'lodash/pick'
import http from './http'

export const fetchMovies = () => {
    return http('/discover/movie')
    .then(json => json.results)
}

export const fetchMovie = (id) => {
  return http('/movie', {id})
  .then(json => pick(json,
    [
      'overview',
      'release_date',
      'vote_average',
      'original_language',
      'genres',
      'production_companies',
      'poster_path',
    ]
  ))
}
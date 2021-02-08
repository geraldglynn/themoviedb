import pick from 'lodash/pick'
import http from './http'

export const fetchMovies = (language) => {
    return http({ path: '/discover/movie', params: { language } })
    .then(json => json.results)
}

export const fetchMovie = ({id, language}) => {
  return http({ path: '/movie', params: { id, language } })
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

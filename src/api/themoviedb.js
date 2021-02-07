import pick from 'lodash/pick'
const url = 'https://api.themoviedb.org/3'
const apiKey = '291d7cc5431b3057427d4f7814163f9e'
const language = 'en-US'


export const fetchMovies = () => {
    return fetch(`${url}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language${language}`)
    .then(res => res.json())
    .then(json => json.results)
}

export const fetchMovie = (id) => {
  return fetch(`${url}/movie/${id}?sort_by=popularity.desc&api_key=${apiKey}&language${language}`)
  .then(res => res.json())
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
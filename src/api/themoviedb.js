import { arrayToObject } from '../utils/general'

const url = 'https://api.themoviedb.org/3'
const apiKey = '291d7cc5431b3057427d4f7814163f9e'
const language = 'en-US'


export const fetchMovies = () => {
    return fetch(`${url}/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&language${language}`)
    .then(res => res.json())
}

export const fetchGenres = () => {
  return fetch(`${url}/genre/movie/list?api_key=${apiKey}&language=${language}`)
  .then(res => res.json())
  .then(json => arrayToObject(json.genres, 'id', 'name'))
}
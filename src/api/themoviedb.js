const API_KEY = '291d7cc5431b3057427d4f7814163f9e'

export const fetchMovies = () => {
    return fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
    .then(res => res.json())
}
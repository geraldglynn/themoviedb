const tmdbDomain = 'https://api.themoviedb.org/3'
const tmdbApiKey = '291d7cc5431b3057427d4f7814163f9e'
const language = 'en-US'

const apiRouter = (path, opts) => {
  switch(path) {
    case '/discover/movie':
      return `${tmdbDomain}/discover/movie?api_key=${tmdbApiKey}&sort_by=popularity.desc&language${language}`
    case '/movie':
      const id = opts?.id
      return `${tmdbDomain}/movie/${id}?api_key=${tmdbApiKey}&language${language}`
    default:
      break
  }
}

export default (path, opts) => {
  const url = apiRouter(path, opts)
  return fetch(url).then(res => res.json())
}
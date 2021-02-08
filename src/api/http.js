const tmdbDomain = 'https://api.themoviedb.org/3'
const tmdbApiKey = '291d7cc5431b3057427d4f7814163f9e'
const defaultLanguage = 'en-GB'

const CACHE = {};
const MAX_AGE = 600000;  // 10m

const apiRouter = (path, params) => {
  const language = params?.language || defaultLanguage
  switch(path) {
    case '/discover/movie':
      return `${tmdbDomain}/discover/movie?api_key=${tmdbApiKey}&sort_by=popularity.desc&language=${language}`
    case '/movie':
      const id = params?.id
      return `${tmdbDomain}/movie/${id}?api_key=${tmdbApiKey}&language=${language}`
    default:
      break
  }
}

export default ({ path, params }, opts) => {
  const url = apiRouter(path, params)
  const method = opts?.method || 'GET'
  const cached = CACHE[`${url}:${method}`]

  if (cached && (Date.now() - cached.time < MAX_AGE)) {
    return cached
  }

  const response = fetch(url, opts).then( res => res.json() )
  response.time = Date.now()

  if(method === 'GET') {
    CACHE[`${url}:${method}`] = response
  }
  return response
}
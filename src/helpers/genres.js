// import { fetchGenres } from '../api/themoviedb'
// const genres = fetchGenres().then(response => response)

function memoize(method) {
  let cache = {};

  return async function() {
      let args = JSON.stringify(arguments);
      cache[args] = cache[args] || method.apply(this, arguments);
      return cache[args];
  };
}

// let getSoupRecipe = memoize(async function(soupType) {
//   return await http.get(`/api/soup/${soupType}`);
// });

export const genreString = (genres, genreIds) => {
  // const genresObj = memoize(fetchGenres().then(response => response))
  return genreIds.reduce((str, id) => {
    const seperator = str ? ',' : ''
    return `${str}${seperator} ${genres[id]}`
  }, '')
}

// const displayGenres = genreIds.reduce((str, id) => {
//   const seperator = str ? ',' : ''
//   return `${str}${seperator} ${genres[id]}`
// }, '')


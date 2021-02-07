export const genreString = (genres) => {
  return genres.reduce((str, genre) => {
    const seperator = str ? ', ' : ''
    return `${str}${seperator}${genre.name}`
  }, '')
}

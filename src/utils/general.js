export const arrayToObject = (arr, key, value) =>
  arr.reduce((acc, item) => {
    acc[item[key]] = item[value]
    return acc
  }, {})



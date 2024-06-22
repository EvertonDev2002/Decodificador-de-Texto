export function invertKeysAndValues(obj) {
  const invertedObj = {}
  Object.keys(obj).forEach((key) => {
    const value = obj[key]
    invertedObj[value] = key
  })
  return invertedObj
}

export { mapKey, deleteKey }

function mapKey (arr, key) {
  if (!Array.isArray(arr)) arr = [arr]

  return arr.reduce((aggr, curr) => {
    aggr[curr[key]] = curr
    return aggr
  }, {})
}

function deleteKey (obj, key) {
  const newObj = { ...obj }
  delete newObj[key]

  return newObj
}

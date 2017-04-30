export { mapKey }

function mapKey (arr, key) {
  return arr.reduce((aggr, curr) => {
    aggr[curr[key]] = curr
    return aggr
  }, {})
}

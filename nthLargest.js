const data = [5, 7, 3, 2, 0, 10]

function nthLargest(n, array) {
  const sortedData = array.sort((a, b) => b - a)
  const nthLargest = sortedData[n - 1] || sortedData[0]
  return nthLargest
}

console.log(nthLargest(3, data))

const biggestNumber = (int, num) => {
  const arrayed = int.toString().split('');
  let bunchaNumbers = []
  arrayed.map(e => {
    let arr = arrayed;
    bunchaNumbers.push(arr.splice(1, 1, num))
  })
  const output = arrayed
  console.log(bunchaNumbers)
  return output
}

console.log(typeof (biggestNumber(555, 6)))


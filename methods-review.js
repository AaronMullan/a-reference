const data = [1, 2, 3, 4]
console.log(Array.isArray(data))

//slice
const slicedOffStart = data.slice(1);
console.log(slicedOffStart);
// [2,3,4]

const slicedOffEnd = data.slice(0, 2);
console.log(slicedOffEnd);
//[1,2]

//forEach
data.forEach(element => console.log(element));
// 1
// 2
// 3
// 4

//map
const mappedData = data.map(element => element * 2);
console.log(mappedData)
//[2,4,6,8]

//filter
const filteredData = data.filter(element => element % 3 == 0)
console.log(filteredData);
// [3]


//basic loop
function datalooper(stuff) {
  for (let i = 0; i < stuff.length; i++)
    console.log(i * 3);
}
datalooper(data);
// 0
// 3
// 6
// 9

//reduce
const reducedData = data.reduce((acc, current) => acc + current, 0);
console.log(reducedData);
// 10

//string reverser
function reverseString(str) {
  return str.split('').reduce((reversed, element) => {
    return element + reversed
  }, '')
}
console.log(reverseString('mississippi'))

const adder = (a, b) => {
  return (a + b)
}
const added = adder(5, 2);
console.log(added)

2 == 2 ? console.log('hi') : console.log('hello')

console.log(adder.toString())
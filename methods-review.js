const data = [1, 2, 3, 4]

const slicedFromStart = data.slice(1);
console.log(slicedFromStart);

const slicedFromEnd = data.slice(-2);
console.log(slicedFromEnd);

//forEach
data.forEach(element => console.log(element));

//map
const mappedData = data.map(element => element * 2);
console.log(mappedData)


//filter
const filteredData = data.filter(element => element % 3 == 0)
console.log(filteredData);


//basic loop
function datalooper(stuff) {
  for (let i = 0; i < stuff.length; i++)
    console.log(i * 3);
}
datalooper(data);


//reduce
const reducedData = data.reduce((acc, current) => acc + current, 0);
console.log(reducedData);


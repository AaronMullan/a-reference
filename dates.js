const updatedProducts = [
  {
    name: 'Product 1',
    updatedDate: 1656487800000,
  },
  {
    name: 'Product 2',
    updatedDate: 1656495000000,
  },
  {
    name: 'Product 3',
    updatedDate: 1656498600000,
  },
  {
    name: 'Product 4',
    updatedDate: 1656541800000,
  },
]
// console.log(updatedProducts.filter(element => element.updatedDate > 2022 - 06 - 29T08: 30: 00.000Z'))

const date = (new Date(updatedProducts[3].updatedDate))

const unixDate = date.getTime()

// const updatedProductsWithUnixDates = updatedProducts.map(element => { name: element.name, unixDate: new Date(element.updatedDate).getTime() })

console.log(updatedProducts.filter(element => element.updatedDate > 1656487800000 && element.updatedDate < 1656498700000))
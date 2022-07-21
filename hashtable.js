// const person = {}
// person['firstName'] = 'bob'
// person['lastName'] = 'bobby'
// console.log(person['lastName'])

function hashStringToInt(s, tabelSize) {
  let hash = 17;
  for (let i = 0; i < s.length; i++) {
    hash = (13 * hash * s.charCodeAt(i)) % tabelSize
  }

  return hash
}

class HashTable {

  table = new Array(100)


  setItem = (key, value) => {
    const idx = hashStringToInt(key, this.table.length)
    this.table[idx] = value

  }

  getItem = (key) => {
    const idx = hashStringToInt(key)
    return this.table[idx]
  }
}

const myTable = new HashTable
myTable.setItem('firstName', 'Bob')
myTable.getItem('firstName')
console.log(myTable.getItem('firstName'))

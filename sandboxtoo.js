import { number } from "yargs"

const isPrime = (number) => {
  let prime = true
  for (let i = 2; i < (number); i++) {
    if (number % i === 0) { prime = false }
    if (prime === false) break
  }
  return prime
}

// console.log(isPrime(7))
// console.log(isPrime(8))

const findPrimeFactors = (number) => {
  let primeFactors = []
  for (let i = 2; i < number; i++) {
    if (number % i === 0) primeFactors.push(i)
  }
  return primeFactors
}

// console.log(findPrimeFactors(34))
// console.log(findPrimeFactors(21))

function fibonacciFinder(n) {
  if (n === 1) { return 1 }
  if (n === 2) { return 2 }
  return fibonacciFinder(n - 1) + fibonacciFinder(n - 2)
}

// console.log(fibonacciFinder(5))

const greatestCommonDivisor = (a, b) => {
  const getDivisors = (num) => {
    const divisors = [];
    for (let i = 1; i < num; i++) {
      if (num % i === 0) divisors.push(i)
    }
    divisors.push(num)
    return divisors
  }
  const aDivisors = getDivisors(a)
  const bDivisors = getDivisors(b)
  const commonDivisors = aDivisors.filter(c => bDivisors.includes(c))
  const highestCommonDivisors = commonDivisors.pop()
  return highestCommonDivisors
}

console.log(greatestCommonDivisor(10, 30))
let myCost = 4000;
let myMonths = 60;
let myInvestmentReturnRate = .05;

let payment = myCost / myMonths;
let savings = 0;

function matressDiscounter(cost, months) {
  // loop through months adding interest and subtracting principal
  for (let i = 0; i < months; i++) {
    savings = savings + ((cost / months) * myInvestmentReturnRate);
    cost = cost - payment;
  }
  //output the accumulated savings
  return savings;
}

console.log(matressDiscounter(myCost, myMonths))

// function datalooper(stuff) {
//   for (let i = 0; i < stuff.length; i++)
//     console.log(i * 3);
// }
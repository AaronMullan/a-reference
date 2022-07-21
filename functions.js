function greet(name) {
  console.log(name + ', this is a function statement')
}
greet('Aaron')

const greetToo = function(name) {
  console.log(name + ', this is a function expression')
};
greetToo('John')

(function() {
  console.log('this is an immidiately invoked function expression')
}())

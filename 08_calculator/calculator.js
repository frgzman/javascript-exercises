const add = function(firstNumber, secondNumber) {
  let result = firstNumber + secondNumber;
  return result;
};

console.log(add(10,10));

const subtract = function(firstNumber, secondNumber) {
	let result = firstNumber - secondNumber;
  return result;
};

//console.log(subtract(15,10));

const sum = function(array) {
  return array.reduce((total, current) => total + current, 0);
};

//console.log(sum(7));

const multiply = function(array) {
  let result = array.reduce((acc, curr) => acc * curr);
  return result;
};

//console.log(multiply(5,5));

const power = function(...params) {
	let result = params.reduce((acc, curr) => Math.pow(acc, curr));
  return result;
};

//console.log(power(4,3));

const factorial = function(...params) {
    let result = 1;
    for (i = 1; i <= params; i++) {
      result *= i;
    }
    return result;
};

//console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

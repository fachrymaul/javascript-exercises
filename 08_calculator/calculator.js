const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  if(arr.length == 1)
    return arr[0];

  let result = 1;
  for(let i = 0; i < arr.length; i++) {
    result *= arr[i];
  }

  return result;
};

const power = function(a, pow) {
  if(pow == 0) {
    return 1;
  }
  return a * power(a, pow - 1);
};

const factorial = function(a) {
  if(a == 0 || a == 1)
    return 1;

  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

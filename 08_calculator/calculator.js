const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, nextNum) => total + nextNum, 0);
};

const multiply = function(array) {
  return array.reduce((total, nextNum) => total * nextNum);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(factorial) {
  let product = 1;
	if (factorial === 0) {
    return 1;
  } else {
    for (i = factorial; i > 0; i--) {
      product *= i;
    }
  }
  return product;
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

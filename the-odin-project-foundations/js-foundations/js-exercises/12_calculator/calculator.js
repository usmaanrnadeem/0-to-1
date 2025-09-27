const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, current) => sum + current,0);
};

const multiply = function(arr) {
  return arr.reduce((sum, current) => sum * current,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
  let arr = [];
  for (let i = 1; i < a + 1; i++) {
    arr.push(i)
  }
  return multiply(arr)
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

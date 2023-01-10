//1. sum function
const sum = (a, b) => {
  console.log(a + b);
};

// module.exports = sum;

// 2 multiply func

const multiple = (x, y) => {
  console.log(x * y);
};

// module.exports = multiple;

// 3 subtractin

const subtraction = (p, q) => {
  console.log(p - q);
};

// module.exports = subtraction;

// 4.devide

const devide = (s, t) => {
  console.log(s / t);
};

// module.exports = devide;

//  exporting multiple functions

module.exports = {
  sum,
  multiple,
  subtraction,
  devide,
};

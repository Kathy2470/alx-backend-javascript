// utils.js

/**
 * Utility module containing the calculateNumber function.
 */
const Utils = {};

/**
 * Function that performs arithmetic operations based on the type.
 * @param {string} type - The type of operation: 'SUM', 'SUBTRACT', or 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the operation or 'Error' for division by zero.
 */
Utils.calculateNumber = function(type, a, b) {
  const round = (num) => Math.round(num);
  a = round(a);
  b = round(b);

  switch (type) {
    case 'SUM':
      return a + b;
    case 'SUBTRACT':
      return a - b;
    case 'DIVIDE':
      if (b === 0) return 'Error';
      return a / b;
    default:
      throw new Error('Invalid type');
  }
};

module.exports = Utils;

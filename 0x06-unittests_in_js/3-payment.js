// 3-payment.js

const Utils = require('./utils');

/**
 * Function to send a payment request to an API.
 * @param {number} totalAmount - The total amount for payment.
 * @param {number} totalShipping - The total shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;

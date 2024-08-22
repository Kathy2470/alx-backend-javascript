// 3-payment.test.js

const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  beforeEach(function() {
    spy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function() {
    spy.restore(); // Ensure to restore the spy after each test
  });

  it('should call Utils.calculateNumber with "SUM", 100, and 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
  });
});

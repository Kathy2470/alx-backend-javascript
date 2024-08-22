const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers for 1 and 3', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return the sum of rounded numbers for 1 and 3.7', function() {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return the sum of rounded numbers for 1.2 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return the sum of rounded numbers for 1.5 and 3.7', function() {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional edge cases
  it('should handle negative numbers', function() {
    assert.strictEqual(calculateNumber(-1.5, -3.7), -5);
  });

  it('should handle zero values', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });
});

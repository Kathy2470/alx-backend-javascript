// 2-calcul_chai.test.mjs

import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.mjs';

describe('calculateNumber', function() {
  describe('SUM', function() {
    it('should return 6 when rounding 1.4 and 4.5', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', function() {
    it('should return -4 when rounding 1.4 and 4.5', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('DIVIDE', function() {
    it('should return 0.2 when rounding 1.4 and 4.5', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when dividing by 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  describe('Invalid type', function() {
    it('should throw an error for invalid type', function() {
      expect(() => {
        calculateNumber('INVALID', 1.4, 4.5);
      }).to.throw('Invalid type');
    });
  });
});

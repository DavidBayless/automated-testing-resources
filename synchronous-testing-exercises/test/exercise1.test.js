var exerciseOne = require('../exercise1.js');
var expect = require('chai').expect;

describe('Exercise One Math Library', function() {
  var mathing = new exerciseOne();
  describe('Testing Addition', function() {
    it('Should add 1 and 2 together', function() {
      expect(mathing.add(1, 2)).to.equal(3);
    });

    it('Should add -1 and -1 together', function() {
      expect(mathing.add(-1, -1)).to.equal(-2);
    });

    it('Should add -1 and 1 together', function() {
      expect(mathing.add(-1, 1)).to.equal(0);
    });
  });

  describe('Testing Subtraction', function() {

    it('Should subtract 1 from 2', function() {
      expect(mathing.subtract(2, 1)).to.equal(1);
    });

    it('Should subtract 2 from 1', function() {
      expect(mathing.subtract(1, 2)).to.equal(-1);
    });

    it('Should subtract -1 from -1', function() {
      expect(mathing.subtract(-1, -1)).to.equal(0);
    });

  });

  describe('Testing Division', function() {

    it('Should divide 2 by 1', function() {
      expect(mathing.divide(2, 1)).to.equal(2);
    });

    it('Should divide 1 by 2', function() {
      expect(mathing.divide(1, 2)).to.equal(0.5);
    });

    it('Should divide -1 from -1', function() {
      expect(mathing.divide(-1, -1)).to.equal(1);
    });

  });

  describe('Testing Multiplication', function() {

    it('Should multiply 2 and 2', function() {
      expect(mathing.multiply(2, 2)).to.equal(4);
    });

    it('Should multiply 2 and 1', function() {
      expect(mathing.multiply(1, 2)).to.equal(2);
    });

    it('Should multiply -1 and -1', function() {
      expect(mathing.multiply(-1, -1)).to.equal(1);
    });

  });
  

});

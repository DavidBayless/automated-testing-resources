var exerciseTwo = require('../exercise2.js');
var expect = require('chai').expect;

describe('Tax Calculator', function() {
  var tc = new exerciseTwo();
  it('Should calculate the first $10 at 10%', function() {
    expect(tc.calculate(8)).to.equal(8.80);
  });

  it('Should calculate the second $10 at 7%', function() {
    expect(tc.calculate(15)).to.equal(16.35);
  });

  it('Should calculate the third $10 at 5%', function() {
    expect(tc.calculate(25)).to.equal(26.95);
  });

  it('Should calculate anything after $30 at 3%', function() {
    expect(tc.calculate(35)).to.equal(37.35);
  });

  it('Should calculate anything after $30 at 3%', function() {
    expect(tc.calculate(385)).to.equal(397.85);
  });
});

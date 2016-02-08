var exerciseFour = require('../exercise4.js');
var expect = require('chai').expect;

describe('Numbarrrzzz 4 lyf3!', function() {
  it('Should have minimum valid number starting at 0', function() {
    var numValid = new exerciseFour();
    expect(numValid.getMinimum()).to.equal(0);
  });

  it('Should change minimum value', function() {
    var numValid = new exerciseFour();
    numValid.setMiniumum(5);
    expect(numValid.getMinimum()).to.equal(5);
  });

  it('Should have maximum value of 10', function() {
    var numValid = new exerciseFour();
    expect(numValid.getMaximum()).to.equal(10);
  });

  it('Should change maximum value', function() {
    var numValid = new exerciseFour();
    numValid.setMaximum(5);
    expect(numValid.getMaximum()).to.equal(5);
  });

  it('Should change invalid value array', function() {
    var numValid = new exerciseFour();
    var arr = [5,3,2,1,5];
    numValid.setInvalid(arr);
    expect(numValid.getInvalid()).to.equal(arr);
  });

  it('Should change valid value array', function() {
    var numValid = new exerciseFour();
    var arr = [5,1,5];
    numValid.setValid(arr);
    expect(numValid.getValid()).to.equal(arr);
  });

  it('Should only have one validation strategy at a time', function() {
    var numValid = new exerciseFour();
    expect(numValid.getValidator()).to.equal('Minimum Value');
  });

  it('Should only have the most recent strategy', function() {
    var numValid = new exerciseFour();
    numValid.setMiniumum(5);
    numValid.setInvalid([22,3]);
    numValid.setMaximum(78);
    expect(numValid.getValidator()).to.equal('Maximum Value');
  });

  
});

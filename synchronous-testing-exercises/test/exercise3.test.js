var exerciseThree = require('../exercise3.js');
var expect = require('chai').expect;

describe('The Brave Little Toaster', function() {
  it('Should show power status as off', function() {
    var blt = new exerciseThree();
    expect(blt.getPower()).to.equal('off');
  });

  it('Should show toasting status is off', function() {
    var blt = new exerciseThree();
    expect(blt.getToasting()).to.equal('off');
  });

  it('Should change power to on when power function is called', function() {
    var blt = new exerciseThree();
    blt.power();
    expect(blt.getPower()).to.equal('on');
  });

  it('Should switch power from to opposite of current state when called', function() {
    var blt = new exerciseThree();
    blt.power(); blt.power();
    expect(blt.getPower()).to.equal('off');
  });

  it('When the toast function is called, and the power is off, the toasting status should not change to on.', function() {
    var blt = new exerciseThree();
    blt.toast();
    expect(blt.getToasting()).to.equal('off');
  });

  it('When the toast function is called, and the power is on, the toasting status should change to the opposite of the current status.', function() {
    var blt = new exerciseThree();
    blt.power();
    blt.toast();
    expect(blt.getToasting()).to.equal('on');
  });

  it('When the toast function is called, and the power is on, the toasting status should change to the opposite of the current status.', function() {
    var blt = new exerciseThree();
    blt.power();
    blt.toast();
    blt.toast();
    expect(blt.getToasting()).to.equal('off');
  });

  it('When the power status is on, and the toasting status is on, and the power function is called, it should set the power status and the toasting status to off.', function() {
    var blt = new exerciseThree();
    blt.power();
    blt.toast();
    blt.power();
    expect(blt.getToasting()).to.equal('off');
  });

});

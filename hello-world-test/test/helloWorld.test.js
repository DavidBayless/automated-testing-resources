var HelloWorld = require('../helloWorld.js');
var expect = require('chai').expect;


describe('Hello World Test', function(){

    hw = new HelloWorld();

    it('should return Hello World', function(){
        expect(hw.helloWorld()).to.equal('Hello World!');
    });

    it('Greets unique user', function() {
      expect(hw.helloWorld('George')).to.equal('Hello George!');
    });

    it('Should give the answer to the universe', function() {
      expect(hw.helloWorld(42)).to.equal('Welcome to the Twilight Zone');
    });

});

function mathing() {
  this.add = function(numOne, numTwo) {
    return numOne + numTwo;
  };

  this.subtract = function(numOne, numTwo) {
    return numOne - numTwo;
  };

  this.divide = function(numOne, numTwo) {
    return numOne / numTwo;
  };

  this.multiply = function(numOne, numTwo) {
    return numOne * numTwo;
  };
}

module.exports = mathing;

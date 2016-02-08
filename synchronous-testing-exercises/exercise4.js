function numberValidator() {
  var _minimumNumber = 0;
  var _maximumNumber = 10;
  var _invalidNum = [];
  var _validNum = [];
  var _validator = 'Minimum Value';

  this.getMinimum = function() {
    return _minimumNumber;
  };

  this.setMiniumum = function(num) {
    _validator = 'Minimum Value';
    _minimumNumber = num;
  };

  this.getMaximum = function() {
    return _maximumNumber;
  };

  this.setMaximum = function(num) {
    _validator = 'Maximum Value';
    _maximumNumber = num;
  };

  this.getInvalid = function() {
    return _invalidNum;
  };

  this.getValid = function() {
    return _validNum;
  };

  this.setInvalid = function(arr) {
    _validator = 'Invalid Array';
    _invalidNum = arr;
  };

  this.setValid = function(arr) {
    _validator = 'Valid Array';
    _validNum = arr;
  };

  this.getValidator = function() {
    return _validator;
  };

}

module.exports = numberValidator;

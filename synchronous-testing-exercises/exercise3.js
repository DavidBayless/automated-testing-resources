function blt() {
  var _power = 'off';
  var _toasting = 'off';

  this.getPower = function() {
    return _power;
  };

  this.getToasting = function() {
    return _toasting;
  };

  this.power = function() {
    if (_power == 'off') {
      _power = 'on';
    } else {
      _power = 'off';
      _toasting === 'on' ? _toasting = 'off' : _toasting = 'on';
    }
  };

  this.toast = function() {
    if ( _power === 'on' ) {
      _toasting === 'on' ? _toasting = 'off' : _toasting = 'on';
    }
  };
}

module.exports = blt;

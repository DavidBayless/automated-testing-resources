
function taxCalc() {
  this.calculate = function(num) {
    if (num <= 10) {
      return num * 1.1;
    } else if (num <= 20){
      num = ((num - 10) * 1.07) + 11;
      return num;
    } else if (num <= 30) {
      num = ((num - 20) * 1.05) + 21.7;
      return num;
    } else {
      num = ((num - 30) * 1.03) + 32.20;
      return num;
    }
  };
}

module.exports = taxCalc;

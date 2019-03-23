sameDigitNumber = n => {
  var s = 0;
  while (n > 0) {
    s = n % 10;
    n = Math.floor(n / 10);
    if ((s != n % 10) & (n > 0)) {
      return false;
    }
  }
  return true;
};

console.log(sameDigitNumber(11112));

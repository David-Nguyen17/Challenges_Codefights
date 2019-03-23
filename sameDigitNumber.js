sameDigitNumber = n => {
  var s = 0;
  while (n > 0) {
    s = n % 10;
    if (s != n % 10) {
      return false;
    }
    n = Math.floor(n / 10);
  }
  return true;
};

console.log(sameDigitNumber(11111));

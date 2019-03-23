function fractionSum(a, b) {
  s = [];
  x = a[0] * b[1] + a[1] * b[0];
  y = a[1] * b[1];
  l = 0;
  for (i = 2; i <= 10; i++) {
    if (x % i == 0 && y % i == 0) {
      x /= i;
      y /= i;
    }
  }
  s.push(x);
  s.push(y);
  return s;
}
a = [3, 5];
b = [7, 5];
console.log(fractionSum(a, b));

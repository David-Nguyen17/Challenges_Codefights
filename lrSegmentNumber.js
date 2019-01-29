/***
Define l-r-segment number as the number formed by concatenating all the digits from l to r in ascending order.

Given l and r (l ≤ r), return the l-r-segment number.
For l = 2 and r = 4, the output should be
lrSegmentNumber(l, r) = 234.

*/
lrSegmentNumber = (l, r) => {
  var sum = 0;
  for (i = l; i <= r; i++) {
    sum = sum * 10 + i;
  }
  return sum;
};

//console.log(lrSegmentNumber(9, 9));
console.log(lrSegmentNumber(2, 3));
console.log(lrSegmentNumber(3, 3));
console.log(lrSegmentNumber(1, 1));
console.log(lrSegmentNumber(6, 9));
console.log(lrSegmentNumber(4, 9));

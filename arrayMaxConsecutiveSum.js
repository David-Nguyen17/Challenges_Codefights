function arrayMaxConsecutiveSum(inputArray, k) {
  s = 0;
  for (i = 0; i < k; i++) {
    s += inputArray[i];
  }
  status = s;
  for (i = 1; i < inputArray.length - 1; i++) {
    sumNow = status - inputArray[i - 1] + inputArray[i - 1 + k];
    if (s < sumNow) {
      s = sumNow;
    }
    status = sumNow;
  }
  return s;
}
arr = [2, 3, 5, 1, 6];
arr1 = [1, 3, 2, 4];
console.log(arrayMaxConsecutiveSum(arr, 2));
console.log(arrayMaxConsecutiveSum(arr1, 3));

/***
 * Given array of integers, find the maximal possible sum of some of its k consecutive elements.

Example

For inputArray = [2, 3, 5, 1, 6] and k = 2, the output should be
arrayMaxConsecutiveSum(inputArray, k) = 8.
All possible sums of 2 consecutive elements are:

2 + 3 = 5;
3 + 5 = 8;
5 + 1 = 6;
1 + 6 = 7.
Thus, the answer is 8.
Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer inputArray

Array of positive integers.

Guaranteed constraints:
3 ≤ inputArray.length ≤ 105,
1 ≤ inputArray[i] ≤ 1000.

[input] integer k

An integer (not greater than the length of inputArray).

Guaranteed constraints:
1 ≤ k ≤ inputArray.length.

[output] integer

The maximal possible sum.
 */

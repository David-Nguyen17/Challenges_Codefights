function reverseInParentheses(inputString) {
  var result = "";
  while (inputString.lastIndexOf("(") !== -1) {
    var first_Index = inputString.lastIndexOf("(");
    for (let index = 0; index < first_Index; index++) {
      result += inputString[index];
    }
    if (inputString.indexOf(")", first_Index) !== -1) {
      var second_Index = inputString.indexOf(")", first_Index);
      for (let index = second_Index - 1; index > first_Index; index--) {
        result += inputString[index];
      }
      console.log(first_Index);
      console.log(second_Index);
      for (let index = second_Index + 1; index < inputString.length; index++) {
        result += inputString[index];
      }
    }
    console.log(result);
    inputString = result;
    result = "";
  }
  return inputString;
}

const inputString = "foo(bar)baz(blim)";

console.log(reverseInParentheses(inputString));

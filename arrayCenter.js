function arrayCenter(a) {
  var avg = a.reduce((e, s) => e + s);
  var result = [];
  a.forEach(element => {
    if (Math.abs(element - avg / a.length) < Math.min(...a)) {
      result.push(element);
    }
  });
  return result;
}

a = [8, 3, 4, 5, 2, 8];
console.log(arrayCenter(a));

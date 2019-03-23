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


<View>
            <View style={styles.button}>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>7</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>4</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>1</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>.</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.button}>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>8</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>5</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>2</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>0</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.button}>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>9</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>6</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>3</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>=</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.button}>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>÷</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>x</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity onPress={this._onPress}>
                  <Text>-</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
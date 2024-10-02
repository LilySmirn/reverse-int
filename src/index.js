module.exports = function reverse (n) {
    n = Math.abs(n);
  let str = n.toString();
  let arr = [];

  for (i = 0; i < str.length; i++) {
        arr.push(str[i]);
  }

  let reversed = arr.reverse();

  return +reversed.join('');

}

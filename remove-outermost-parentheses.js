/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let count = 0;
  let res = '';

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === '(') {
      if (count !== 0) {
        res += char;
      }
      count++;
    } else {
      count--;
      if (count !== 0) {
        res += char;
      }
    }
  }
  return res;
};

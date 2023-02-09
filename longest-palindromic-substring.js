/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let clone = '';
    for (let j = 0 + i; j < s.length; j++) {
      clone += s[j];

      if (clone.split('').reverse().join('') === clone && clone.length > result.length) {
        result = clone;
      }
    }
  }

  return result;
};

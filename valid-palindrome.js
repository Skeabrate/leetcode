/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
  const original = s
    .match(/[a-zA-Z0-9]+/g)
    ?.join('')
    .toLowerCase();
  if (!original) return true;
  const reversed = original.split('').reverse().join('');
  return original === reversed;
};

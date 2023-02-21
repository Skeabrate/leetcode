/**
 * @param {number} n
 * @return {boolean}
 */

var isPowerOfTwo = function (n) {
  if (!n) return false;
  else if (n === 1) return true;
  else if (n % 2) return false;

  while (!(n % 2)) {
    n /= 2;
    if (n === 1 || n === -1) return true;
    if (n % 2) return false;
  }
};

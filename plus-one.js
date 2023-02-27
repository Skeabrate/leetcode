/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  // return (+digits.join('') + 1).toString().split('').map(num => +num)

  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;

      if (!digits[i - 1]) {
        digits.unshift(1);
      }
    } else {
      digits[i] += 1;
      break;
    }
  }

  return digits;
};

console.log(plusOne([9]));

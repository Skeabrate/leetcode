/**
 * @param {string} address
 * @return {string}
 */

var defangIPaddr = function (address) {
  return address
    .split('')
    .map((char) => {
      if (char === '.') {
        char = '[.]';
      }
      return char;
    })
    .join('');
};

var defangIPaddr = (adress) => adress.replaceAll('.', '[.]');

console.log(defangIPaddr('255.100.50.0'));

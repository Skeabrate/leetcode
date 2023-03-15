/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

var restoreString = function (s, indices) {
  let hash = {};

  s.split('').forEach((char, idx) => {
    hash[indices[idx]] = char;
  });

  return Object.values(hash).reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, '');
};

var restoreString = function (s, indices) {
  let res = new Array(indices.length);

  indices.forEach((num, idx) => {
    res[num] = s[idx];
  });

  return res.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]));

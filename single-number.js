/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function (nums) {
  const sorted = nums.sort((a, b) => a - b, 0);
  let res = sorted[0];

  for (let i = 0; i < sorted.length; i += 2) {
    if (sorted[i + 1] === res) res = sorted[i + 2];
  }

  return res;
};

var singleNumber = function (nums) {
  let result = 0;

  for (let l = 0; l < nums.length; l++) {
    result = result ^ nums[l];
    console.log(result ^ nums[l]);
  }

  return result;
};

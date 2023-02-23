/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let res = {
    num: 0,
    count: 0,
  };

  nums.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    if (acc[curr] > res.count) {
      res.num = curr;
      res.count = acc[curr];
    }

    return acc;
  }, {});

  return res.num;
};

console.log(majorityElement([3, 2, 3, 3]));

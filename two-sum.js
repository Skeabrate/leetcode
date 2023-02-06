function twoSum(nums, target) {
  let result = [];

  nums.forEach((first, indexFirst) => {
    nums.forEach((second, indexSecond) => {
      if (indexSecond > indexFirst) {
        if (first + second === target) {
          result.push(indexFirst, indexSecond);
        }
      }
    });
  });

  return result;
}

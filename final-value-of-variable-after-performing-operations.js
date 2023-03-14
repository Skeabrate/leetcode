/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  const dic = {
    'X++': 1,
    '++X': 1,
    'X--': -1,
    '--X': -1,
  };

  return operations.reduce((acc, curr) => {
    acc += dic[curr];
    return acc;
  }, 0);
};

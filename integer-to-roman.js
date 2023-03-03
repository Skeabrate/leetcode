var intToRoman = function (num) {
  let res = '';

  let weight = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    token = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'],
    i = 0;

  while (num > 0) {
    if (num - weight[i] >= 0) {
      res += token[i];
      num -= weight[i];
    } else i++;
  }
  return res;
};

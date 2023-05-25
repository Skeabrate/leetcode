/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */

var sortPeople = function (names, heights) {
  let res = [];

  for (let i in heights) {
    res.push({ name: names[i], height: heights[i] });
  }

  return res.sort((a, b) => b.height - a.height).map((i) => i.name);
};

names = ['Mary', 'John', 'Emma'];
heights = [180, 165, 170];

console.log(sortPeople(names, heights));

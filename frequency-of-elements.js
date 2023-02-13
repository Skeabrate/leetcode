function findFrequency() {
  let arr = ['hello', 'java', 'hello', 'world', 'java', 'java'];

  return arr.reduce((acc, prev) => {
    if (acc[prev]) acc[prev]++;
    else acc[prev] = 1;
    return acc;
  }, {});
}

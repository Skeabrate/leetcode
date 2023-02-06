function longestCommonPrefix(strs) {
  let splited = [];

  strs.forEach((word) => {
    splited.push(word.split(''));
  });

  let prefix = splited[0];

  for (let i = 1; i < splited.length; i++) {
    prefix.forEach((p, index) => {
      if (p !== splited[i][index]) {
        prefix = prefix.slice(0, index);
      }
    });
  }

  return prefix.join('');
}

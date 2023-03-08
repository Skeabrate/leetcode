/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

var canConstruct = function (ransomNote, magazine) {
  const chars = magazine.split('');
  for (let i = 0; i < ransomNote.length; i++) {
    if (chars.indexOf(ransomNote[i]) === -1) return false;
    else chars.splice(chars.indexOf(ransomNote[i]), 1);
  }
  return true;
};

console.log(canConstruct('fffbfg', 'effjfggbffjdgbjjhhdegh'));

var isValid = function (s: string): boolean {
  if (!s.length || s.length % 2 !== 0) return false;

  let stack: string[] = [];
  const dic = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] in dic) stack.push(s[i]);
    else if (dic[stack.pop()!] !== s[i]) return false;
  }

  return stack.length === 0;
};

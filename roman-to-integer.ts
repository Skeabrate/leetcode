function romanToInt(s: string): number {
  let dic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (dic[s[i]] < dic[s[i + 1]]) {
      result -= dic[s[i]];
    } else {
      result += dic[s[i]];
    }
  }

  return result;
}

function romanToInt2(s: string): number {
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case 'I':
        if ((s[i] === 'I' && s[i + 1] === 'V') || (s[i] === 'I' && s[i + 1] === 'X')) {
          result -= 1;
        } else {
          result += 1;
        }
        break;

      case 'V':
        result += 5;
        break;

      case 'X':
        if ((s[i] === 'X' && s[i + 1] === 'L') || (s[i] === 'X' && s[i + 1] === 'C')) {
          result -= 10;
        } else {
          result += 10;
        }
        break;

      case 'L':
        result += 50;
        break;

      case 'C':
        if ((s[i] === 'C' && s[i + 1] === 'D') || (s[i] === 'C' && s[i + 1] === 'M')) {
          result -= 100;
        } else {
          result += 100;
        }
        break;

      case 'D':
        result += 500;
        break;

      case 'M':
        result += 1000;
        break;

      default:
        result;
    }
  }

  return result;
}

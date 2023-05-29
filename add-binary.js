function addBinary(a, b) {
  let result = '';
  let carry = 0;
  let i = 0;

  while (i < a.length || i < b.length || carry) {
    const x = i >= a.length ? 0 : parseInt(a[a.length - i - 1]);
    const y = i >= b.length ? 0 : parseInt(b[b.length - i - 1]);

    const tempSum = x + y + carry;
    result += tempSum % 2;
    carry = Math.floor(tempSum / 2);

    i++;
  }

  if (carry) {
    result += carry;
  }

  return result.split('').reverse().join('');
}

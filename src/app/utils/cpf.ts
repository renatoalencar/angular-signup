function validate(cpf) {
  const digits = cpf.match(/\d/g).map((value) => parseInt(value, 10));

  if (new Set(digits).size === 1) {
    return false;
  }

  let d1 = 0;

  for (let i = 10; i >= 2; i--) {
    d1 += i * digits[10 - i];
  }

  let d2 = 0;

  for (let i = 11; i >= 2; i--) {
    d2 += i * digits[11 - i];
  }

  d1 = d1 % 11;
  d2 = d2 % 11;
  d1 = d1 < 2 ? 0 : 11 - d1;
  d2 = d2 < 2 ? 0 : 11 - d2;

  return d1 % 11 === digits[9] && d2 % 11 === digits[10];
}

export default { validate };

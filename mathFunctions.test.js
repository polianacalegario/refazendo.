const { soma, subtrai } = require('./mathFunctions');

// Teste para a função soma
test('soma 1 + 2 é igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});

// Teste para a função subtrai
test('subtrai 5 - 2 é igual a 3', () => {
  expect(subtrai(5, 2)).toBe(3);
});

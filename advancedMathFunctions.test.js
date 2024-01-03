const { multiplica, divide } = require('./advancedMathFunctions');

// Teste para a função multiplica
test('multiplica 4 * 5 é igual a 20', () => {
  expect(multiplica(4, 5)).toBe(20);
});

// Teste para a função divide
test('divide 20 / 5 é igual a 4', () => {
  expect(divide(20, 5)).toBe(4);
});

// Teste para divisão por zero
test('divisão por zero lança um erro', () => {
  expect(() => divide(20, 0)).toThrow("Divisão por zero não é permitida.");
});
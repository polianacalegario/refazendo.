// Funções matemáticas avançadas para demonstração

function multiplica(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if(b === 0) {
      throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
  }
  
  module.exports = { multiplica, divide };
  
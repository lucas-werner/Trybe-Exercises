module.exports = mySum

function mySum(arr) {
  return arr.reduce((total, current) => total + current, 0);
}

// implemente seus testes aqui
// A função mySum(arr) recebe um array arr e retorna a soma de seus elementos
// Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
// Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
module.exports = myIndexOf

function myIndexOf(arr, item) {
  return arr.findIndex((element) => element === item);
}

// implemente seus testes aqui
// A função myIndexOf(arr, item) recebe um array arr, um item e retorna o índice do item ou -1 caso item não pertença ao array arr
// Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
// Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
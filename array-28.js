// Escreva uma função que receba um array de números
// e retorne um array contendo apenas os números pares.

function numbersPares(array){
  return array.filter(number => number % 2 === 0)
}

let numbers = [1, 3, 4, 8, 11, 14];
let listaNumerosPares = numbersPares(numbers);
console.log(listaNumerosPares)
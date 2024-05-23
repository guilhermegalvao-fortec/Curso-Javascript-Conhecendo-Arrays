// Crie uma função que filtre os números de um array
// que são múltiplos de 3 e maiores que 5.

function multiplos(array){
    return array.filter(number => number % 3 === 0)
  }
  
  let numbers = [1, 3, 4, 9, 11, 12];
  let listaNumerosPares = multiplos(numbers);
  console.log(listaNumerosPares);
const numeros = [6, 9, 12, 15, 18, 21];

numeros.forEach(numeros => console.log(numeros * 3))

let indice = numeros.findIndex(numero => numero === 18)

if (indice !== -1) {
    console.log(`O número 18 está no índice ${indice}.`);
  } else {
    console.log('O número 18 não está presente no array.');
  }

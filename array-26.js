// Crie um array de números chamado valores. Depois,
// escreva um programa que some todos os elementos deste
// array utilizando o método reduce.

let valores = [2, 3, 5, 10, 5, 15];

let soma = valores.reduce((resultado, numbers) => resultado + numbers);
console.log(soma);


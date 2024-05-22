// Crie uma função que receba uma array de números
// inteiros e retorne a soma dos elementos.

let numbers = [2, 3, 5, 10];

let somaNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    somaNumbers += numbers[i];    
}

console.log(somaNumbers);
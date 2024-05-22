// Crie um programa que calcule a média dos números
// presentes em um array utilizando um loop for.

let mediaNumbers = [2, 4, 5, 9, 14];

let somaNumbers = 0;

function media(array){
    for (let index = 0; index < array.length; index++) {
            somaNumbers += mediaNumbers[index]
        }
     console.log(somaNumbers / array.length);
}

media(mediaNumbers);
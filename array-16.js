// Crie uma função que receba uma array de números
// inteiros e retorne o menor valor e o maior valor
// da array, no seguinte formato: 'o menor número é
// X e o maior número é Y'.

let numeros = [2, 5, 9, 17, 1, -5];

function numberMenor(array){
    let maior = 0;
    let menor = 0;
    
    for (let index = 0; index < array.length; index++) {
        if(array[index] > maior){
            maior = array[index];
        } else if(array[index]) {
            menor = array[index];
        }
    }
    return `O maior número é ${maior} e o menor número é ${menor}`;
}

console.log(numberMenor(numeros))


// ou

function numberMenor2(array){
    let maior = Math.max(array);
    let menor = Math.min(array);
    return `O maior número é ${maior} e o menor númro é ${menor}`;
}

console.log(numberMenor(numeros));
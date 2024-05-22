// Crie uma função chamada executaOperacaoEmArray
// que recebe dois parâmetros: um array e uma função
// de callback que executa alguma operação matemática.
// Essa função deve iterar por cada elemento do array
// e aplicar a função de callback em cada um dos elemento
// , imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, funcao){
    return array.map(funcao);
}

function soma(number){
    return number + 2
}

let numbers = [1, 2, 3];
let numbersSomados = executaOperacaoEmArray(numbers, soma);
console.log(numbersSomados);
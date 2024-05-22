// Você recebeu um array numeros contendo valores numéricos.
// Crie um programa que verifique se um número específico está
// presente nesse array. Se estiver, o programa deve retornar a
// posição (índice) desse número. Caso contrário, se o número não
// estiver presente, o programa deve retornar "-1".

let numeros = [2, 4, 6, 9, 10]

function numberIncludes(array, number){
    for (let index = 0; index < array.length; index++) {
        if(array.includes(number)){
            return console.log(`número: ${number}, indice: ${array[index]}`)
        } else {
            console.log('-1')
        }
    }
}


numberIncludes(numeros, 6)
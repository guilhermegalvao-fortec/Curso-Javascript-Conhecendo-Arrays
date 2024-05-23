// Faça uma função que aceite vários arrays como argumentos
// e retorne um único array contendo todos os elementos dos
// arrays fornecidos, utilizando Spread Operator.

// Dica: é possível usar o spread operator diretamente em um
// parâmetro de função para "espalhar" seu conteúdo, por exemplo
// function funcaoExemplo(...params).

function arraysParame(...arrays){
    return [].concat(...arrays);
}

let nameUser = ['guilherme', 'mauro', 'joaquim'];
let lastnameUser = ['galvao', 'ferraz', 'bione'];
let ageUser = [18, 18, 18];

let arraysJuntos = arraysParame(nameUser, lastnameUser, ageUser);
console.log(arraysJuntos);
const array1 = [];
let valor = 1;

for (let i = 0; i < 3; i++) {
    let linha = [];
    for (let j = 0; j < 3; j++) {
        linha.push(valor++);  
    }
    array1.push(linha);
}

console.log('Matriz de duas dimensões');
console.log(array1);
array1.forEach(row => console.log(row));


console.log('Elemento n segunda linha e terceira coluna', array1[1][2]);

array1[2][1] = 15;
console.log('Matriz após adição de elemento', array1)

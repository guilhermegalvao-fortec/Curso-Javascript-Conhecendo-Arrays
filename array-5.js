// Desenvolva um programa em Node.js que simule uma clínica
// veterinária. Crie um array vazio chamado clinica que representará
// a fila de animais na clínica. Em um primeiro momento, simule a
// chegada de três animais diferentes e exiba a lista de animais no
// console. Após a exibição, remova os animais da lista um por vez e,
// por fim, exiba no console o estado final da lista.

const arrayClinica = [];

arrayClinica.push('Cachorro');
arrayClinica.push('Passarinho');
arrayClinica.push('Gato');
console.log(arrayClinica);

arrayClinica.pop()
arrayClinica.pop()
arrayClinica.pop()
console.log(arrayClinica);
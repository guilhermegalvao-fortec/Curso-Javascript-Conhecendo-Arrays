const nomesTurmaA = [
    'João Silva',
    'Maria Santos',
    'Pedro Almeida'
  ];
  
  const nomesTurmaB = [
    'Carlos Oliveira',
    'Ana Souza',
    'Lucas Fernandes'
  ];
  

let todosAlunos = nomesTurmaA.concat(nomesTurmaB);

let aluno = todosAlunos.find(studentName => studentName === 'Lucas Fernandes');

if (aluno) {
    console.log(`Aluno encontrado: ${aluno}`)
} else {
    console.log('Aluno não encontrado');
}


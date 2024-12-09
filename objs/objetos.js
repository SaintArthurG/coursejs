const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Godoy'
}

const chave = 'sobrenome';

console.log(pessoa['nome']);
console.log(pessoa[chave])

const pessoa1 = new Object();
pessoa1.nome = 'Arthur';
pessoa1.sobrenome = 'Godoy';
pessoa1.idade = 23;

pessoa1.getAnoNascimento = function () {
    const anoAtual = new Date();
    return anoAtual.getFullYear() - pessoa1.idade;
};

pessoa1.setNome = (nome) => this.nome = nome;

console.log(pessoa1.getAnoNascimento());
console.log(pessoa1.nome);
pessoa1.nome = "Pedro";
console.log(pessoa1.nome);


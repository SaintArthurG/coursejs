 const nome = 'Arthur';
 const sobrenome = 'Godoy';
 const idade = 23;

 function soma (x, y){
    return x+y;
}

export class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
}

export default (x, y) => x * y;

export { nome, sobrenome, idade, soma}
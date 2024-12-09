class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    comer () {
        console.log(`${this.nome} está comendo`)
    }

}

const p1 = new Pessoa('Arthur', 'Godoy');

console.log(p1)
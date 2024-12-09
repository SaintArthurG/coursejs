const acoes = {
    falar () {
        console.log(`${this.nome} está falando.`);            
    },
    comer () {
        console.log(`${this.nome} está comendo.`);            
    },
    beber () {
        console.log(`${this.nome} está bebendo.`);            
    },
};

const pessoaPrototype = Object.assign(acoes);

function criaPessoa( nome, sobrenome ) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome},
    });
}
const p1 = new criaPessoa('Arthur', 'Godoy');
console.log(p1);


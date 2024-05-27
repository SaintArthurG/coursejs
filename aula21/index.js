
const pessoa1 = {
    nome: "Arthur",
    sobrenome: "Godoy",
    idade: 23,

    falaNome(){
        console.log(`Meu nome é ${this.nome} ${this.sobrenome}`)
    },

    falaIdade(){
        console.log(`Eu tenho ${this.idade} anos`)
    }
};

pessoa1.falaNome();
pessoa1.falaIdade();



// function criaPessoa (nome, sobrenome, idade){
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// function criaPessoa (nome, sobrenome, idade){
//     return {nome, sobrenome, idade};
// }


// const pessoa1 = criaPessoa("Arthur", "Godoy", 23);

// console.log(pessoa1.nome, pessoa1.sobrenome, pessoa1.idade);






// const array = [1,2,3];
// array.push(4);
// array[0] = "Luiz"
// console.log(array);

// const pessoa = {       //Object
//     nome: "Arthur",
//     sobrenome: "Godoy",
//     idade: 23
// };
// console.log(pessoa.nome);
// console.log(pessoa.sobrenome);
// console.log(pessoa.idade);
// 
// 

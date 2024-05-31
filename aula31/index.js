// # atribuição via desestruturação de objects
const pessoa = {
    ter: "Arthur",
    sobrenome: "Godoy",
    idade: 23,
    setg : {
        ru: "p3",
        numero: 102
    }
};
const { ter: nome = "", sobrenome, idade, endereco, setg: {ru: rua = "", numero}, setg}  = pessoa;
console.log(rua, numero, setg);


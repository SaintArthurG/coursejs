//map faz o mesmo que o filter, mas altera o valor
const nomes = ['Arthur', 'Henrique', 'Pedro', 'Guilherme', 'André'];

const nomesMapeados = nomes.map(valor=>`oi ${valor}`);
console.log(nomesMapeados);



const pessoas = [
    {nome: 'Luiz', idade: '62'},
    {nome: 'Maria', idade: '23'},
    {nome: 'Eduardo', idade: '55'},
    {nome: 'Letícia', idade: '19'},
    {nome: 'Rosana', idade: '32'},
    {nome: 'Wallace', idade: '47'},
]
const retornaNomeString = pessoas.map(obj=>obj.nome);
console.log(retornaNomeString);

const retornaIdade = pessoas.map(obj=> `${obj.idade}`);
console.log(retornaIdade);

const retornaComID = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = indice;
    return newObj;
})

console.log(retornaComID);

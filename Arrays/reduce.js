const pessoas = [
    {nome: 'Luiz', idade: '62'},
    {nome: 'Maria', idade: '24'},
    {nome: 'Eduardo', idade: '55'},
    {nome: 'Letícia', idade: '25'},
    {nome: 'Rosana', idade: '32'},
    {nome: 'Wallace', idade: '47'},
    {nome: 'Lia', idade: '23'},
]

const maisVelha = pessoas.reduce(function(acumulador, valor){
    console.log("acumulador: ", acumulador, "valor:", valor)
    return valor;
})
//console.log(maisVelha);
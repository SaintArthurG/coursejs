//Filter SEMPRE VAI RETORNAR UMA ARRAY, com a mesma quantidade de elementos
// ou menos

const numeros = [5, 50, 80, 1, 23, 52, 12, 55, 64];
const nomes = ['Arthur', 'Henrique', 'Pedro', 'Guilherme', 'André'];

function callbackFilter(valor, indice, array) {
    return valor.includes('A');
}

function callbackFilterNum(valor, indice, array){
    return valor > 10
}

const numerosFiltrados = numeros.filter(valor=>valor>10);

const nomesFiltrados = nomes.filter(callbackFilter);
console.log(nomesFiltrados);
console.log(numerosFiltrados);

console.log("============================================")
const pessoas = [
    {nome: 'Luiz', idade: '62'},
    {nome: 'Maria', idade: '23'},
    {nome: 'Eduardo', idade: '55'},
    {nome: 'Letícia', idade: '19'},
    {nome: 'Rosana', idade: '32'},
    {nome: 'Wallace', idade: '47'},
]

const pessoasNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);
const pessoasMaioresDe50 = pessoas.filter(obj => obj.idade > 50);
const pessoasContemA = pessoas.filter(obj => obj.nome.includes('a', obj.nome.length - 1));
const pessoasContemA2 = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasNomeGrande);
console.log(pessoasMaioresDe50);
console.log(pessoasContemA);
console.log(pessoasContemA2);
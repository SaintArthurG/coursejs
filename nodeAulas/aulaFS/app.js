const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'test.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');


// const pessoas =[
    // {nome: 'Arthur'},
    // {nome: 'Pedro'},
    // {nome: 'Gabriel'},
    // {nome: 'André'},
    // {nome: 'Miguel'},
// ]

async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => {
        console.log(val);
    });
}
lerArquivo(caminhoArquivo);
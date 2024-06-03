// const nomes = ["Arthur", "Henrique", "Godoy"];

// for (let i = 0; i < nomes.length; i++){
//     console.log(nomes[i]);
// }

// for (let valor of nomes){
//     console.log(valor);
// }

// nomes.forEach (function (valor) {
//     console.log(valor);    
// });

const log = function(...args){
    return args.forEach(chave => {
        console.log(chave);
    });
}

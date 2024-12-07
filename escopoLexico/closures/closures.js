function retornaFuncao (nome){
    return function (){
        return nome;
    };
}

const funcao = retornaFuncao('Arthur');
const funcao2 = retornaFuncao('Joao');
console.log(funcao(), funcao2());
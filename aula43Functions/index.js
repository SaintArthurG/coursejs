// declaração de funçao (function hoisiting) exemplo abaixo
falaOi();

function falaOi(){
    console.log("oieeeeeeee");
}

// first-class objects (obejos de primeria classe)
// function expression
const souUmDado = function(){
    console.log("Sou um dado.");
};
function executaFuncao(funcao){
    funcao();
}
executaFuncao(souUmDado);

//Arrow function
const ars = () => console.log("Sou uma arrow function");
ars();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log("falando");
    },
    cantar: ()=> console.log("Cantando")
}
obj.falar();
obj.cantar();

//###################################
executaFuncao(obj.cantar);

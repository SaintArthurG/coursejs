// ## FOR IN -> LER OS INDICES UO CHAVES

const elementos = [
    { tag: "p", texto: "Frase1" },
    { tag: "div", texto: "Frase2" },
    { tag: "footer", texto: "Frase3" },
    { tag: "section", texto: "Frase4" }
];

// const frutas = ["Pera", "Maça", "Uva"];

// for (let i = 0; i <frutas.length; i++){
//     console.log(frutas[i]);
// }

// const pessoa = {
//     nome: "Arthur",
//     sobrenome: "Godoy", 
//     idade: 23,
//     cor: "Branco"
// }


// myArray.forEach((element, index, array) => {
//     console.log(element.x); // 100, 200, 300
//     console.log(index); // 0, 1, 2
//     console.log(array); // same myArray object 3 times
// });




// for (let tags in elementos){
//     let = { tag, texto } = elementos[tags];
//     console.log(tag);
//     console.log(texto);    
// };




// ARRAY
// for (let i in frutas){
//     console.log(frutas[i]);
// }



//## USING Spread
function f(...args) {
    let sum = 0;
    for(let key in args){
        sum += args[key];
    }
    return sum;
}
console.log(f(4, 8, 10));

//## ANONYMOUS FUNCTION with ARROW FUNCTION
const g = (a, b, c) => a + b + c;
const rest = [1,2,3];
console.log(g(...rest));
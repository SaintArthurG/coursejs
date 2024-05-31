//## HOISTING;

// var x = 2; 
// //global  
// function funcao() { 
//     //local
//     console.log(x); 
//     var x = 3;  
//     console.log(x);
// } funcao();


// ## atribuição via desestruturação
// let a = "A";
// let b = "B";
// let c = "C";

// const numeros = [b, c, a];
// [a,b,c] = numeros;

// console.log(a,b,c);


// // ...rest, spread
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const [um, , tres, , cinco, sexto, ...resto] = numeros;
// console.log(um, tres, cinco, sexto);
// console.log(resto);

const numeros = [ [1, 2, 3], [4 ,5, 6], [7, 8, 9] ];
const [...resto] = numeros;
console.log(resto);



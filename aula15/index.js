let num1 = 800;

console.log(num1 ** 0.5); // raiz quadrada

console.log (100/0) //Infinity

let num2 = Math.floor(num1); //arredonda para baixo
console.log(num2);

let num3 = Math.ceil(num1); //arredonda para cima
console.log(num3);

let num4 = Math.round(num1); //arredonda de forma automatica num1 > 0.5 ? 1 ! 0
console.log(num4);

console.log(Math.max(1,2,3,4,5,6,7,8,9, -10, 5000, -232344)); // pega o maior numero

console.log(Math.min(1,2,3,4,5,6,7,8,9, -10, 5000, -232344)); // pega o menor numero

const aleatorio = Math.random();  //gera um numero aleatorio
const aleatorio2 = Math.random() * (10 - 5) + 5; // gera um numero aleatorio entre 5 e 10
const aleatorio3 = Math.round(Math.random() * (100 - 1)); // gera um numero aleatorio entre 5 e 10 arredondado

console.log(aleatorio3); 
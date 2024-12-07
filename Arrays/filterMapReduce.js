//Retorna a soma do dobro de todos os pares
// filtra pares (filter)
// dobra os valores (map)
// soma os valores (reduce)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter(value => value % 2 === 0)
.map(value => value * 2)
.reduce((ac, value) => ac + value);

console.log(numerosPares);

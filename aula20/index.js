// primitivos (imutáveis) - string, number, boolean, undefined, null bigint, symbol

// Referência (mutavel) - array, object, function - passados por referencia

// let a = [1,2,3];
// let b = a;
// let c = [...a]; // literalmente copiado, nao uma referencia
// console.log(a,b, c);
// a.push(4);
// console.log(a,b, c);
// b.pop();
// console.log(a,b, c);

// outro exemplo

const a = {
    nome: "Arthur",
    sobrenome: "Godoy"
}
const b = {...a};
a.nome = "Joao";
console.log(a);
console.log(b);


// let a = "A";
// let b = a; // cópia
// console.log(a, b);

// a = "outra coisa";
// console.log(a,b);


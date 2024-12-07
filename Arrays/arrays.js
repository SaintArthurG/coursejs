const nomes = ["Eduardo", "Arthur", "Joana", "Maria", 'Joaquim'];

//const removidosFinal = nomes.pop(); //remove do final
//const removidosComeco = nomes.shift(); // remove do começo
//nomes.push('Pedro', 'Andre', 'Marcus'); // adiciona coisas no fim array
//nomes.unshift("Victor"); //adiciona coisas no começo do array mas muda o index

const novo = nomes.slice(1, 2);

//console.log(nomes, removidosComeco);
//console.log(nomes, removidosFinal);
console.log(novo);

const cpf = "012345678";
const cpfArray = cpf.split('');
console.log(cpfArray);

cpfString = cpfArray.join("");
console.log(cpfString);
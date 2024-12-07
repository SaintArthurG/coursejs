const nomes = ['Maria', 'Arthur', 'Pedro', 'Marcus', 'Andre', 'Julia'];

//nomes.splice(indice, delete, elem1, elem2, elem3);

const removidos = nomes.splice(0,3) //a partir de qual index e quantos itens para removere retorna uma array
const adicionados = nomes.splice(2,0, "Antonela") //a partir de qual index e quantos itens para removere, adiciona um elemento retorna uma array
console.log(nomes);
console.log(removidos);
console.log(adicionados);
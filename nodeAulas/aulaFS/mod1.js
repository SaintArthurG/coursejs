const nome = 'Arthur';
const sobrenome = 'Godoy';
const idade = 11;

const falaNome= () =>{
    return nome + ' ' + sobrenome;
}

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
exports.idade = idade;
this.qualquerCoisa = 'O la mun do'; 

console.log(__dirname);
console.log(__filename);

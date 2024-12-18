const mod1 = require('./mod1');
const axios = require('axios');

axios('https://otaviomiranda.com.br/files/json/pessoas.json')
.then(res => console.log(res.data))
.catch(e => console.error(e));




const { nome, idade,  falaNome } = mod1;

console.log(falaNome());
console.log(idade);



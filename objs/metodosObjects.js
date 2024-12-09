//Object.defineProperty altera as propriedades do objeto
// Object.getOwnPropertyDescriptor pega as informações das propriedades do objeto
// Object.assign(des, any) copia um objeto

const produto = { nome: 'Caneca', preco: 2.5};

const copiaProduto = Object.assign({}, produto);
console.log(copiaProduto);

Object.defineProperty(produto, 'nome', {
    configurable: false,
    writable: false,
})

//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


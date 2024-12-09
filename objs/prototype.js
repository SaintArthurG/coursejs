function Pessoa(nome, sobrenome, peso, altura, cpf){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.peso = peso;
    this.altura = altura;
    this.cpf = cpf;
}
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.validarCPF = function () {
    return this.cpf;
    
}

Pessoa.prototype.IMC = function () {
    let imcFormatado = this.peso / (this.altura ** 2);
    return imcFormatado.toFixed(2);
}

let cpf = "05777535178";

const p1 = new Pessoa('Arthur', 'Godoy', 60, 1.75, cpf);
console.dir(p1.nome);
console.log(p1.nomeCompleto());
console.log(p1.IMC());
console.log(p1.validarCPF())


const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
}

const objC = new Object();
objC.chaveC = 'C';


Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objB)

console.log(objB.chaveA);
console.log(objC.chaveA, objC.chaveB);

function Product (name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.desconto = function (percent){
    return this.price = this.price - (percent * this.price / 100)
}

Product.prototype.aumento = function(percent){
    return this.price = this.price + (percent * this.price / 100)
}

const pc = new Product('PC', 1000);

const note = {
    name: 'Notebook',
    price: 200
}

console.log(pc.desconto(10));
Object.setPrototypeOf(note, Product.prototype);
console.log(note.desconto(10));

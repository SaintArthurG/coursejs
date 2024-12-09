function Product (name, price, stack){
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            value: name,
            writable: true,
            configurable: true
        },
        price: {
            enumerable: true,
            value: price,
            writable: true,
            configurable: true
        },
    })
    Object.defineProperty(this, 'stack', {
        enumerable: true, // mostra a chave
        value: stack, // valor
        writable: false, // pode alterar o valor
        configurable: true, // configuravel, se for criado outro defineProperty, as config poderao ser mudadas se verdadeiro;
    });

}
const p1 = new Product('T-shirt', 20, 3);
console.log(p1.price);


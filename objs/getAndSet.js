function Product (name, price, stack){
    let privatePrice = price;
    Object.defineProperties(this, {
        name: {
            enumerable: true,
            get: ()=> name,
            configurable: true
        },
        price: {
            enumerable: true,
            get: () => privatePrice,
            set: value => typeof value !== 'number' ? console.log("ERROR") : privatePrice = value,
            configurable: true
        },
        stack: {
            enumerable: true,
            configurable: true,
            get: () => stack,
            set: (value) => typeof value !== 'number' ? console.log("STACK ERROR") : stack = value,
        },
    });

}
const p1 = new Product('T-shirt', 20, 3);
p1.price = 'fdk';
console.log(p1.price)
p1.stack = 5;
console.log(p1.stack)



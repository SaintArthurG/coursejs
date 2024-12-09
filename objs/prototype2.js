function Product ( name, price ){
    this.name = name;
    this.price = price;
};
Product.prototype.aumento = function (value){
    this.price += value;
};
Product.prototype.desconto = function (value){
    this.price -= value;
};
function Camiseta (name, price, color){
    Product.call(this, name, price);
    this.color = color;
}
Camiseta.prototype = Object.create(Product.prototype)
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percent){
    this.price = this.price + (this.price * percent / 100);
}

c1 = new Camiseta('Nike', 100, 'blue')
c1.aumento(10);
console.log(c1);

function Caneca(name, price, color, material, stock){
    Product.call(this, name, price, color);
    this.material = material;
    
    Object.defineProperty(this, 'stock', {
        enumerable: true,
        configurable: false,
        get : function (){
            return stock;
        },
        set: function (value){
            if (typeof value !== 'number') return;
            stock = value;
        }
    })
}

Caneca.prototype = Object.create(Product.prototype);
Caneca.prototype.constructor = Caneca;

Caneca.prototype.desconto = function(value){
    this.price = this.price - (this.price * value / 100);
}

const caneca = new Caneca('Fofa', 10, 'blue', 'ceramica', 2);
caneca.desconto(10);
caneca.stock = 20;
console.log(caneca);


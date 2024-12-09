function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo <= valor ) {
        this.verSaldo();
        return;
    };

    this.saldo -= valor;
};

Conta.prototype.depositar  = function (valor) {
    this.saldo += valor;
    console.log(this.verSaldo());
};

Conta.prototype.verSaldo = function () {
    return `| Ag/c: ${this.agencia}/${this.conta} | \n` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
};

const conta1 = new Conta(5753, 22, 10);
conta1.depositar(11);
conta1.sacar(20);

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if (valor > (this.valor + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    }

    this.saldo -= valor;
    this.verSaldo()
};

const cc = new ContaCorrente(1515, 23, 200, 400);

cc.verSaldo();
cc.sacar

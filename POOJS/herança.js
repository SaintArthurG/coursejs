class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if (this.ligado) {
            console.log(`${this.nome} already on`);
            return;
            
        }
        this.ligado = true;
    }

    desligar(){
        if (!this.ligado) {
            console.log(`${this.nome} already off`);
            return;
            
        }
        this.ligado = false;
    }
}

class Celular extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome);
        this.cor = cor;
    }
};

class PC extends DispositivoEletronico {
    constructor (nome, allInOne){
        super(nome);
        this.allInOne = allInOne;
    };

    isAllInOne(isUgly){
        if (isUgly) return true;
        if (!isUgly) return false;
    };
}
const _cor = Symbol('cor');
class Watch extends DispositivoEletronico{
    constructor(nome, cor){
        super(nome);
        this[_cor] = cor;_cor
    }

    get cor (){
        return this[_cor];
    }


}


const s1 = new Celular('IPHONE', 'Branco');
const LG = new PC('LG antigo', true);
const smartWatch = new Watch('Iphone Watch', 'blue');

console.log(smartWatch.cor);

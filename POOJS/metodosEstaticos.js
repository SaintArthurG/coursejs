class ControleRemoto {
    constructor (tv) {
        this.tv = tv;
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume+= 2;
    }
    diminuirVolume(){
        this.volume-=2;
    }

    static trocarPilha(){
        return `vsf seu merda`;
    }
}

const c1 = new ControleRemoto('LG');
c1.aumentarVolume();
console.log(c1);

const teste = ControleRemoto.trocarPilha();
console.log(teste);

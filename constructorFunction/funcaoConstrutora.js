function Pessoa (nome, sobrenome, peso, altura){
    const ID = 1;
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function (){
        return `${nome} ${sobrenome}`;
    };
    this.IMC = function calculaIMC() {
       let imc = peso / (altura ** 2);
       return imc.toFixed(2);
    };

    

}

const p1 = new Pessoa('Arthur', 'Henrique dos Santos Sousa Alves de Godoy', 60, 1.75);
console.log(p1.nomeCompleto(), p1.IMC());

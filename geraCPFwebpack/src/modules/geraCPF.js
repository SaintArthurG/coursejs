import ValidaCPF from './validarCPF';

export default class GeraCPF {
    rand(min = 100000000, max = 999999999){
        return String(Math.floor(Math.random() * (max -min) + min));
    }

    formatado(cpf){
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        )
    }

    geraNovoCPF(){
        const cpfSemDIgito = this.rand();
        const digito1 = ValidaCPF.geraDigito(cpfSemDIgito);
        const digito2 = ValidaCPF.geraDigito(cpfSemDIgito + digito1);
        const novoCPF = cpfSemDIgito + digito1 + digito2;
        return this.formatado(novoCPF);
    }
}
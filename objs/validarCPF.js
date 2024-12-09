function validarCPF(cpf) {
    let cpfLimpo = cpf.replace(/\D+/g, '');
    let arrayCPF = Array.from(cpfLimpo);
    if (arrayCPF.length !== 11) return `CPF deve conter 11 numeros`

    let result1 = 0;
    let coef1 = 10;

    for (let i = 0; i < 9; i++) {
        result1 += parseInt(arrayCPF[i], 10) * coef1;
        coef1--;
    }

    if (result1 % 11 < 2) {
        result1 = 0;
    } else if (result1 % 11 >= 2) {
        result1 = 11 - result1 % 11;
    }

    let result2 = 0;
    let coef2 = 11;

    for (let i = 0; i < 10; i++) {
        result2 += parseInt(arrayCPF[i], 10) * coef2;
        coef2--;
    }

    if (result2 % 11 < 2) {
        result2 = 0;
    } else if (result2 % 11 >= 2) {
        result2 = 11 - result2 % 11;
    }

    if (parseInt(arrayCPF[9]) !== result1) {
        return `CPF INVALIDO`
    } else if (parseInt(arrayCPF[10]) !== result2) {
        return `CPF INVALIDO`
    }

    return `LOGIN`;
}

console.log(validarCPF('066.378.871-45'));

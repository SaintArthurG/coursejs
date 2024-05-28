function meuScoop(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    

    function recebeEventoForm(evento){
        evento.preventDefault();

        const inputPeso = document.querySelector(".peso");
        const inputAltura = document.querySelector(".altura");

        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        const imc = peso / (altura * altura);
        if (imc === NaN){
            alert("ERRORRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR");
        }
        resultado.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}</p>`;
        
        if(imc <= 18.5){
            resultado.innerHTML += `Abaixo do peso`;
        } else if(imc > 18.5 && imc < 25){
            resultado.innerHTML += `Peso normal`;
        } else if (imc >= 25 && imc < 30){
            resultado.innerHTML += `Sobrepeso`;
        } else if (imc >= 30 && imc < 35){
            resultado.innerHTML += `Obesidade grau 1`;
        } else if (imc >= 35 && imc < 40){
            resultado.innerHTML += `Obesidade grau 2`;
        } else {
            resultado.innerHTML += `Obesidade grau 3`;
        }
    }
    form.addEventListener("submit", recebeEventoForm);

}
meuScoop();
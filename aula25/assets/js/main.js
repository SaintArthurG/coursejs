function meuScoop(){

    const form = document.querySelector(".form");       

    function recebeEventoForm(evento){
        evento.preventDefault();  
        const inputPeso = form.querySelector("#peso");
        const inputAltura = form.querySelector("#altura");
        
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);

        if(!peso){
            setResultado("Peso inválido", false);
            return
        }
        if (!altura){
            setResultado("Altura inválida", false);
            return
        }
        const imc = getIMC(peso, altura);
        const nivelIMC = getRangeImc(imc);
        const msg = `Seu IMC é ${imc}, ${nivelIMC}`;

        setResultado(msg, true);
    }

    function getRangeImc(imc){
        const nivel = [`Abaixo do peso`, `Peso normal`, `Sobrepeso`, `Obesidade grau 1`, `Obesidade grau 2`, `Obesidade grau 3`];

        if(imc <= 18.5){
            return nivel[0];
        }
        if(imc > 18.5 && imc < 25){
            return nivel[1];
        }
        if (imc >= 25 && imc < 30){
            return nivel[2];
        }
        if (imc >= 30 && imc < 35){
            return nivel[3];
        } if (imc >= 35 && imc < 40){
            return nivel[4] ;
        } else {
            return nivel[5] ;
        }        
    }
    function getIMC (peso, altura){
        const imc = peso / (altura * altura);      
        return imc.toFixed(2);    
    }


    function criaP(){
        const p = document.createElement("p");
        return p;
    }

    function setResultado(msg, isValid){
        const resultado = document.querySelector(".resultado");
        resultado.innerHTML = "";

        
        const p = criaP();
        if(isValid){
            p.classList.add("paragrafo-resultado")
        } else {
            p.classList.add("bad");
        }
        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    form.addEventListener("submit", recebeEventoForm);
}
meuScoop();
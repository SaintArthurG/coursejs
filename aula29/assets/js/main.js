function priv() {
    const aga = document.querySelector(".container h1");
    // const niver = "2001-04-19 05:33:22.222";
    const date = new Date();
    const diaDaSemanaN = date.getDay();
    const mes = date.getMonth();
    const diaDaSemanaF = diaDaSemana(diaDaSemanaN);
    const mesF = mesNome(mes);

    aga.innerHTML = `${diaDaSemanaF}, ${date.getDate()} de ${mesF} de ${date.getFullYear()} </br> ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()} `


    function mesNome(mes){
        const mesS = ["janeiro", "fevereiro", "marco", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
        return mesS[mes];
    }
    function diaDaSemana(diaDaSemanaN) {
        const diasS = ["domingo", "segunda-feira", "terca-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sabado"];
        return diasS[diaDaSemanaN];
    }

    //## METODO 2

    // const h1 = document.querySelector(".container h1");
    // const data = new Date();
    // const opcoes = {
    //     dateStyle: "full"
        
    // }
    // h1.innerHTML = data.toLocaleDateString('pt', opcoes);

    
     

}
priv();
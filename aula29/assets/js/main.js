function priv() {
    // const aga = document.querySelector(".aga");
    // // const niver = "2001-04-19 05:33:22.222";
    // const date = new Date();
    // const diaDaSemanaN = date.getDay();
    // const mes = date.getMonth();
    // const diaDaSemanaF = diaDaSemana(diaDaSemanaN);
    // const mesF = mesNome(mes);

    // aga.innerHTML = `${diaDaSemanaF}, ${date.getDate()} de ${mesF} de ${date.getFullYear()} </br> ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.${date.getMilliseconds()} `


    // function mesNome(mes){
    //     switch(mes){
    //         case 0:
    //             return `Janeiro`;
    //         case 1: 
    //             return `Fevereiro`;
    //         case 2: 
    //             return `Março`;
    //         case 3:
    //             return `Abril`;
    //         case 4: 
    //             return `Maio`;
    //         case 5: 
    //             return `Junho`;
    //         case 6:
    //             return `Julho`;
    //         case 7: 
    //             return `Agosto`;
    //         case 8: 
    //             return `Setembro`;
    //         case 9:
    //             return `Outubro`;
    //         case 10: 
    //             return `Novembro`;
    //         case 11: 
    //             return `Dezembro`;
    //     }
    // }



    // function diaDaSemana(diaDaSemanaN) {
    //     switch (diaDaSemanaN) {
    //         case 0:
    //             return `Domingo`;
    //         case 1:
    //             return `Segunda-Feira`;
    //         case 2:
    //             return `Terça-Feira`;
    //         case 3:
    //             return `Quarta-Feira`;
    //         case 4:
    //             return `Quinta-Feira`;
    //         case 5:
    //             return `Sexta-Feira`;
    //         case 6:
    //             return `Sábado`;
    //         default:
    //             return `Dia invalido`
    //     }
    // }
    const h1 = document.querySelector(".container h1");
    const data = new Date();
    const opcoes = {
        dateStyle: "full"
        
    }
    h1.innerHTML = data.toLocaleDateString('pt', opcoes);

}
priv();
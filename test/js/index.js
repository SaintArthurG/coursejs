function meuScoop(){
    const form = document.querySelector(".form");
    const resultado = document.querySelector(".resultado");
    const pessoas = [];
   
    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        return pessoas[nome.value, sobrenome.value, peso.value, altura.value];
    }   
    form.addEventListener("submit", recebeEventoForm);
    console.log(pessoas[0]);

}
meuScoop();






// const nome = document.getElementById("nome");
// const sobrenome = document.getElementById("sobrenome");
// const peso = document.getElementById("peso");
// const altura = document.getElementById("altura");
// const enviar = document.getElementById("enviar");

// const paragrafo = document.getElementById("paragrafo");

// enviar.addEventListener("click", gravar)
// gravar.addEventListener("read")


// function gravar(){
//     let array = [nome, sobrenome, peso, altura]
//     this.nome = nome;    
//     paragrafo.innerHTML += `${array.nome}`;
// }


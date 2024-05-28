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

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas)

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} 
        ${peso.value} ${altura.value}</p>`;      

    }   
    form
    .addEventListener("submit", recebeEventoForm);
    
    
    


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


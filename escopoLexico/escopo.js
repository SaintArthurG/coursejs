const nome = 'Arthur';

function falaNome(){
    console.log(nome);
}

function usaFalaNome(){
    const nome = "Andre";
    falaNome();
}
usaFalaNome();
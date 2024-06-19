const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criarLi() {
    const li = document.createElement("li");
    return li;
}

inputTarefa.addEventListener("keypress", function(e){
    if(e.keyCode === 13){
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
});

function criaBotaoApagar(li){
    li.innerHTML += " ";
    const botaoApagar = document.createElement("button");
    botaoApagar.innerHTML = "delete";
    li.appendChild(botaoApagar);
    botaoApagar.setAttribute("class", "apagar");
    botaoApagar.setAttribute("title", "Apagar Tarefa");
}


function limpaInput(){
    inputTarefa.value = "";
    inputTarefa.focus();
}


function criarTarefa(textoInput) {
    const li = criarLi();
    li.innerHTML += `${textoInput} <br>`
    criaBotaoApagar(li);
    tarefas.appendChild(li);
    limpaInput();
};

btnTarefa.addEventListener("click", function (e) {    
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});

document.addEventListener("click", function(e){
    const el = e.value;
    if (el.classList.contains("apagar")){
        el.parentElement.remove();
    }
})
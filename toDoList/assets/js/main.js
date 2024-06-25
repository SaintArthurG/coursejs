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
    botaoApagar.innerHTML = "x";
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
    li.innerHTML += `${textoInput}`
    criaBotaoApagar(li);
    tarefas.appendChild(li);
    limpaInput();
    salvarTarefas();
};

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll("li");
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace("x", "").trim();
        listaDeTarefas.push(tarefaTexto);
        console.log(listaDeTarefas);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);
    
};

btnTarefa.addEventListener("click", function (e) {    
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value);
});

document.addEventListener("click", function(e){
    const el = e.target;
    if (el.classList.contains("apagar")){
        el.parentElement.remove();
        salvarTarefas();
    }
})

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem("tarefas");
    const listaDeTarefas = JSON.parse(tarefas);
    
    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }
}
adicionaTarefasSalvas();
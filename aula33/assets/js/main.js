function scooby() {
    const elementos = [
        { tag: "p", texto: "Frase1" },
        { tag: "div", texto: "Frase2" },
        { tag: "footer", texto: "Frase3" },
        { tag: "section", texto: "Frase4" }
    ];
    const container = document.querySelector(".container");
   
    for(let i = 0; i < elementos.length; i++){
        let { tag , texto } = elementos[i];
        let ele = document.createElement(tag);
        ele.innerText += texto;
        container.appendChild(ele);
    }

    
}
scooby();

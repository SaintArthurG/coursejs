function scooby() {
    const elementos = [
        { tag: "p", texto: "Frase1" },
        { tag: "div", texto: "Frase2" },
        { tag: "footer", texto: "Frase3" },
        { tag: "section", texto: "Frase4" }
    ];
    const [{ tag: tagP, texto: textoP }, { tag: tagDiv, texto: textoDiv }, { tag: tagFooter, texto: textoFooter }, { tag: tagSection, texto: textoSection }] = elementos;

    function createAF(tag) {
        const section = document.querySelector(".container"); 
        switch (tag) {
            case "p":
                const p = document.createElement(tagP);
                p.innerHTML += textoP;
                section.appendChild(p);
                return p;
            case "div":
                const div = document.createElement(tagDiv);
                div.innerHTML += textoDiv;
                section.appendChild(div);
                return div;
            case "footer":
                const footer = document.createElement(tagFooter);         
                footer.innerHTML += textoFooter;
                section.appendChild(footer);
                return footer;
            case "section":
                const sectionn = document.createElement(tagSection);
                sectionn.innerHTML += textoSection;
                section.appendChild(sectionn);
                return section;
            default:
                console.log("something goes wrong");
                break;
        }
    };
    
    createAF(tagP);
    createAF(tagDiv);
    createAF(tagFooter);
    createAF(tagSection);
    
}
scooby();

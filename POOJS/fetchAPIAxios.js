const resultado = document.querySelector('.resultado');


// const url = '../pessoas.json';
// fetch(url)
// .then(resposta => resposta.json())
// .then(json => craeteTable(json));

axios('../pessoas.json')
    .then(resposta => craeteTable(resposta.data));

function craeteTable(json){
    console.log(json);
    
    const table = document.createElement("table")

    for(let pessoa of json){
        const tr = document.createElement("tr");

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = pessoa.salario;
        tr.appendChild(td3);

        table.appendChild(tr);

    }

    resultado.appendChild(table);

}
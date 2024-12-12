function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof tempo !== 'number') reject(`value: ${tempo} is incorrect`);
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi("OI ESTOU NO PROMISE 1", 1000)
    .then(resposta => {
        console.log(resposta);
        return esperaAi("ESTOU NO PROMISE 2", 900);
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi("Estou no PRomise 3", 500);

    })
    .then(resposta => {
        console.log(resposta);

    })
    .catch(e => {
        console.log(e);

    })


esperaAi("BANCO DE DADOS", 1000).then(valor => console.log(valor)).catch(e=> console.log(e));


async function executa() {
    try{
    const fase1 = await esperaAi("DENTRO DO ASYNC BANCO DE DADOS", 1000);
    console.log(fase1);

    const fase2 = await esperaAi("DENTRO DO ASYNC REDES", 2000)
    console.log(fase2);

    const fase3 = await esperaAi("DENTRO DO ASYNC QUALIDADE", "k")
    console.log(fase3);
    } catch(e){
        console.log(e);
        
    }
}

executa();
const hora = (data) => {
    if (data && !(data instanceof Date)){
        throw new TypeError("Esperando instancia de Date");
    }
    if(!data){
        data = new Date().toLocaleTimeString("pt-BR", {
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit", 
            hour12: false});
    }

    return data;
}
const nva = new Date("04-19-2001 05:30:12")
console.log(nva);

console.log(hora(true));

function mostrarHora(){
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false
    });
}

    setInterval(function(){
        console.log(mostrarHora(){
            
        })
    })
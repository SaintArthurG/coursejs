const nome = "Arthur Godoy";
let idade = 23;
let pesoEmKg = 66;
let alturaEmM = 1.77;
let imc; // peso / (alturaEmM * alturaEmM);

imc = pesoEmKg / (alturaEmM * alturaEmM);
console.log(imc);
if (imc <= 20) {
    console.log("Abaixo do IMC padrao")
} if (imc >20 || imc <25) {
    console.log("Dentro do IMC padrao")
} else {
    console.log("Acima do IMC padrao");    
}

console.log(`${nome} tem ${idade} anos, pesa ${pesoEmKg} kg `)
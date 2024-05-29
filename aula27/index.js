const date = new Date("2001-04-19 05:37:22.222"); // Ano, Mês 0-11, Dia 1-31, Hora 0-59, Minuto 0-59, Segundo 0-59, Milesimo 0-999;
console.log("Dia", date.getDate());
console.log("Mês", date.getMonth()+1);
console.log("Ano", date.getFullYear());
console.log("Hora", date.getHours());
console.log("Min", date.getMinutes());
console.log("Seg", date.getSeconds());
console.log("ms", date.getDay());
console.log("Dia da Semana", date.getDate());

console.log(date.toString());

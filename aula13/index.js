// strings sao indexadas

let umaString = "o rato roeu a roupa do rei de roma.";

console.log(umaString.concat(" em um lindo dia."));
console.log(umaString + " em um lindo dia");
console.log(`${umaString} em um lindo dia.`)

console.log(umaString.indexOf("x", 3));
console.log(umaString.lastIndexOf("m", 3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/[a-z]/g));


console.log(umaString.replace(/r/g, "$"));
console.log(umaString.replace(/r/, "$"));

console.log(umaString.length);

console.log(umaString.slice(2,6));
console.log(umaString.slice(-3)); //pega o lenght e subtrai -3
console.log(umaString.slice(32));
console.log(umaString.slice(-5, umaString.length -1));
console.log(umaString.slice(-5, -1));

console.log(umaString.split(" ", 3));
console.log(umaString.split(" "));

console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());




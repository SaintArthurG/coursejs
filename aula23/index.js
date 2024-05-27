/*
FALSY
false
0
'' "" ``
null / undefined
NaN
*/

// console.log(0 || false || null || "Arthur" || true);

const corUsuario = null;
const corPadrao = corUsuario || "Preto";
console.log(corPadrao);




// function falaOi(){
//     return "oi";
// }
// const vaiExecutar = "Arthur";

// console.log(vaiExecutar && falaOi());

let cpf = prompt("Insira os 11 digitos do seu CPF (sem traço nem pontos");
// let cpf = "054952651";
//145.382.206-20

let ver0 = cpf.slice(0,1);
ver0 = Number(ver0);
ver0 *= 10;

let ver1 = cpf.slice(1,2);
ver1 = Number(ver1);
ver1 *= 9;

let ver2 = cpf.slice(2,3);
ver2 = Number(ver2);
ver2 *= 8;

let ver3 = cpf.slice(3,4);
ver3 = Number(ver3);
ver3 *= 7;

let ver4 = cpf.slice(4,5);
ver4 = Number(ver4);
ver4 *= 6;

let ver5 = cpf.slice(5,6);
ver5 = Number(ver5);
ver5 *= 5;

let ver6 = cpf.slice(6,7);
ver6 = Number(ver6);
ver6 *= 4;

let ver7 = cpf.slice(7,8);
ver7 = Number(ver7);
ver7 *= 3;

let ver8 = cpf.slice(8,9);
ver8 = Number(ver8);
ver8 *= 2;

let verTotal1 = ver0 + ver1 +  ver2 + ver3 + ver4 + ver5 + ver6 
+ ver7 + ver8;

let resto1 = verTotal1 % 11;

let ver9 = 11 - resto1;
if (ver9 >= 10){
    ver9 = 0;
}

ver0 = cpf.slice(0,1);
ver0 = Number(ver0);
ver0 *= 11;
ver1 = cpf.slice(1,2);
ver1 = Number(ver1);
ver1 *= 10;
ver2 = cpf.slice(2,3);
ver2 = Number(ver2);
ver2 *= 9;
ver3 = cpf.slice(3,4);
ver3 = Number(ver3);
ver3 *= 8;
ver4 = cpf.slice(4,5);
ver4 = Number(ver4);
ver4 *= 7;
ver5 = cpf.slice(5,6);
ver5 = Number(ver5);
ver5 *= 6;
ver6 = cpf.slice(6,7);
ver6 = Number(ver6);
ver6 *= 5;
ver7 = cpf.slice(7,8);
ver7 = Number(ver7);
ver7 *= 4;
ver8 = cpf.slice(8,9);
ver8 = Number(ver8);
ver8 *= 3;
let ver9c = ver9 * 2;

let verTotal2 = ver0 + ver1 +  ver2 + ver3 + ver4 + ver5 + ver6 
+ ver7 + ver8 + ver9c;

let resto2 = verTotal2 % 11;

let ver10 = 11 - resto2;

if (ver10 >= 10){
    ver10 = 0;
}
console.log(ver9, ver10);

let d1 = cpf.slice(9,10);
let d2 = cpf.slice(10,11);

if (d1 == ver9 && d2 == ver10){
    console.log("LOGIN");
} else {
    console.log("CPF INVALIDO");
}

//145.382.206-20
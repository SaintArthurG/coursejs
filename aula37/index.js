// ## WHILE
let rand = (min, max) => {const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 20;

let r = rand(min, max)

do{
    r = rand(min, max);    
    console.log(r)
}while ( r !== 2);
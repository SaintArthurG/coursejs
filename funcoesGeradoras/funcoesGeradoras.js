function* geradora1 (){
    yield 'valor1';

    yield 'valor2';

    yield 'valor3';

}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next());
console.log(g1.next());
console.log(g1.next().value);

function* geradora2() {
    let i = 0;

    while(true){
        yield i;
        i++;
    }
}
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora2() {
    yield 0;
    
}
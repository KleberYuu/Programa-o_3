// exercicio 01 
console.log("olá mundo!!");

// exercicio 02 
function converterMetrosParaCentimetros() {
    return metros * 100;
}

let metros = 5;
let centimetros = converterMetrosParaCentimetros(metros);
console.log(`${metros} metros é igual a ${centimetros} centímetros.`);

// exercicio 03
let n1 = 5;
let n2 = 8;
let n3 = 7.5;
let n4 = 10;

media = (n1 + n2 + n3 + n4) / 4;
console.log(`A média das notas ${n1}, ${n2}, ${n3}, ${n4} é = ${media.toFixed(2)}`);

// 
function maiorNumero(n, m) {
    if (n > m){
        console.log(`${n} é maior que ${m}`)
    }
    else{
        console.log(`${nm} é maior que ${m}`)
    }
}
maiorNumero(n1,n2)
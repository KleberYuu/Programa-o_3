// // exercicio 01 
// console.log("olá mundo!!");

// // exercicio 02 
// function converterMetrosParaCentimetros() {
//     return metros * 100;
// }

// let metros = 5;
// let centimetros = converterMetrosParaCentimetros(metros);
// console.log(`${metros} metros é igual a ${centimetros} centímetros.`);

// // exercicio 03
// let n1 = 5;
// let n2 = 8;
// let n3 = 7.5;
// let n4 = 10;

// media = (n1 + n2 + n3 + n4) / 4;
// console.log(`A média das notas ${n1}, ${n2}, ${n3}, ${n4} é = ${media.toFixed(2)}`);

// // 
// function maiorNumero(n, m) {
//     if (n > m){
//         console.log(`${n} é maior que ${m}`)
//     }
//     else{
//         console.log(`${n} é maior que ${m}`)
//     }
// }
// maiorNumero(n1,n2)

// //
// function somadedoisnumeros( n1, n2){
//     return n1 + n2;
// }

// soma = somadedoisnumeros(2, 2);
// console.log(soma);
//

// function saudacoes(empressa){
//     return `Seja bem vindo á ${empressa}`;
// };

// var nomeDaEmpressa = 'Americanas';
// var nomeDaEmpressa1 = 'Amazom';
// console.log(saudacoes(nomeDaEmpressa));
// console.log(saudacoes(nomeDaEmpressa1));
// //

// var idade1 = 10;
// var idade2 = 20;

// function deMaiorOuMenor( idade ){
//     if( idade>= 18 ){
//         return console.log(`Sua idade é ${idade} e voçe é maior de idade`);
//     } else {
//         return console.log(`Sua idade é ${idade} e voçe é menor de idade`);
//     }
// };

// deMaiorOuMenor(idade1);
// deMaiorOuMenor(idade2);
// //

// var palavra1 = 'arara';
// var palavra2 = 'carro';

// function palindromo(palavra) {
//     // Transforma a string em um array, inverte e compara com a string original
//     var palavraInvertida = palavra.split('').reverse().join('');
    
//     if (palavraInvertida === palavra) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(palindromo(palavra1)); 
// console.log(palindromo(palavra2)); 
// //

// var n1 = 8;
// var n2 = 10;
// var n3 = 1;

// function maiorEntre(n1, n2, n3){
//     if( n1 > n2 && n1 > n3 ){
//         console.log(`O numero ${n1} é o maior`);
//     } else if ( n2 > n1 && n2 > n3 ){
//         console.log(`O numero ${n2} é o maior`);
//     } else {
//         console.log(`O numero ${n3} é o maior`);
//     }
// }
// maiorEntre(n1, n2, n3);
// maiorEntre(5, 10, 40);
// maiorEntre(44, 5, 10);
// //

// Criar array esparso
let arrayEsparso = [];

// Atribuir valores aos índices 1, 3 e 7
arrayEsparso[1] = 'Valor no índice 1';
arrayEsparso[3] = 'Valor no índice 3';
arrayEsparso[7] = 'Valor no índice 7';

// Imprimir o array esparso
console.log(arrayEsparso);
//

// Imprimir o comprimento do array
console.log('Comprimento do array:', arrayEsparso.length);

let array5 = [1,2,3,4,5];
console.log(array5);

array5[0] = 0;
console.log(array5);
//

let meuArray = [];
meuArray.push(1,2,3);
console.log(meuArray);
meuArray[0] = 2;
console.log(meuArray);
//

let clinica = [];
clinica[0] = 'cachorro';
clinica[1] = 'gato';
clinica[2] = 'piriquito';
console.log(clinica);

clinica[0] = 'outro cachorro';
console.log(clinica);
clinica[1] = 'outro gato';
clinica[2] = 'outro piriquito';
console.log(clinica);
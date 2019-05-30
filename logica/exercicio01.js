/* 1º exercício

Crie uma função que leia um valor e exiba se ele é par ou ímpar. */

let num = parseInt(prompt("Digite um número e saiba se ele é par ou ímpar"));

if ( num % 2 == 0 ){
    document.write(`${num} é um número par`)
}
else{
    document.write(`${num} é um número ímpar`)
}
/* ## 2º exercício

Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

```js
function pares(x, y) {
  // código aqui
}

pares(32, 321); */

let num1 = parseInt(prompt("Digite o primeiro número do intervalo"));
let num2 = parseInt(prompt("Digite o segundo número do intervalo"));

function pares(num1, num2){
    document.write(`Os números pares contidos no intevalo de ${num1} a ${num2} <br>`)

    for (var i = num1; i < num2; i++){
    if(i % 2 == 0){
        document.write(i + "<br>")
    }

    }
}

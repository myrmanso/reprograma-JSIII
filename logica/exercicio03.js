/* ## 3º exercício

Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é:

```js
function experiencia(anos) {
  // código aqui
}

var anosEstudo = 7;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
```
*/

let valor = parseInt(prompt("Digite quantos anos você estuda, se for meses digite 0"));

function experiencia(valor){

    if (valor == 0 || valor == 1){
        document.write("Iniciante");
    }
    else{ 
        if (1 > valor || valor <= 3){
        document.write("Intermediário");
        }
        else {
            if(3 > valor || valor <= 6){
                document.write("Avançado");
            } else{
                document.write("Jedi Master");
            }
        }
    }
}

var resultado = experiencia(valor);

//fetch por padrão é GET se você quer outro padrão colocar fetch("https", {outro metodo})
//Quando o metodo é POST ele sempre vai mandar um dado pro body
//SEMPRE VAI SER PEDIDO NA API O QUE ELA CONSOME JSON OU XML 
fetch("https://jsonplaceholder.typicode.com/post", {
    method: 'POST',
    BODY: JSON.stringify({
        //coloco aqui o objeto que eu vou transformar para JSON
        title: 'iae',
        body: 'salve',
    }),
    headers: {
        "Content-type" : "application/json; charset-UTF-8"
    }
})
.then(resposta =>{
    return resposta.json()//transforma a resposta que você recebe em JavaScript em JSON
})
.then(respostaDoDeCima =>{
    console.log(respostaDoDeCima)
})
.catch(erro => console.log(erro))
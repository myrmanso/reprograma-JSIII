const userIput = document.querySelector('#username'); //pega o id do input usuario
const passwordInput = document.querySelector('#password');//pega o id do input senha
const form = document.querySelector('#login-form'); //pega o id do form

//adciona um evento ao form
form.addEventListener("submit", event => {
    event.preventDefault(); //faz com que a pagina não atualize assim que submita
    //verifica se o usuario e senhas estão preenchidos
    if(userIput.value && passwordInput.value){        
        //se os valores existirem chama a função fazer login
        login()
    } else{
        //se não exibe uma mensagem de que os campos são obrigatórios
        alert("usuario e senha são obrigatórios")
    }
})

const login = () => {

    const bodyParaEnviar = JSON.stringify({ 
    //coloco aqui o objeto que eu vou transformar para JSON para enviar para API
        user: userIput.value,
        pass : passwordInput.value,
    })
    fetch('https://lais-api-reprograma.herokuapp.com/login', {
        method: 'POST',
        body: bodyParaEnviar,
        headers: {
            /* headers informação que eu tenho sobre a minha 
            # request(requere algo de alguma API)
            # response = a resposta do requrimento
            */
            'Accept' : 'application/json', //o que eu to mandando
            'Content-type' : 'application/json', //o que a API está recebendo
        },
    })

    
    /*
    # .then(response => response.jason())

    # resposta em JSON da API para o que mandei para ela e que transformei em JS(respnse.json()) para acessar as propriedades da API

    ##.then( res => console.log(res)
    ## resposta (response) que transformei em JS que mandei "printar no console"

    */
    .then(response => response.json())
    .then(objetoJavascript => {
        console.log(objetoJavascript);
        //a api de login me devolve um token e guardo ele no lovalStorage
        //localStorage é uma memoria que serve de armazenamento
        //guardo a minha senha(token) lá dentro para que o usuario não resete a senha e o usuario precise ficar colocando a senha e que ele tenha acesso a API
        //motivo vou precisar passar ele ao chamar APIs fechadas
        //setItem(chave, valor) ==> chave é strg 
        localStorage.setItem('token', objetoJavascript.token);
        //window.location.href ==> assim que autenticar ele muda a barra de endereço do navegador
        window.location.href = "home.html"
    })
    //.then( res => console.log(res))//a resposta que transformei em JS que mandei "printar no console"
    .catch(error => console.log(error))
}
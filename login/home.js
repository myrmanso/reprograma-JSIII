const checkUser = () => {
    //verifico de o usuario ja esta logado e se pertence ao usuario
    if(localStorage.getItem("token")){
        getUser()//coloca os dados do usuario do html
    } else {
        window.location.href = "index.html"
    }
}

//chama os dados do usuario e coloca ele no html
const getUser = () =>{
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(objJavascript => {
    document.querySelector('#profile').innerHTML = criarPainel(objJavascript.results[0])
    console.log(objJavascript)
    document.querySelector('#username'). innerHTML = objJavascript.results[0].name.first
    })
    .catch(err => console.log(err))
}


const criarPainel = (user) =>{
    return `
    <div class=" panel text-center padding">
    <figure class="image is-128x128 margin-auto padding">
      <img src="${user.picture.medium}" alt="" class="is-rounded">
    </figure>

    <div class="content">
      <p>
        <strong>${user.name.first} ${user.name.last}</strong>
        <br>
        <i class="fas fa-mobile-alt"></i>
        <small>${user.cell}</small>
      </p>
    </div>

    <div>
      <button class="button is-warning" onclick="testarApi()">Testar API</button>
    </div>

    <div class="content column">
      <div class="column">
        <div><i class="far fa-envelope"></i>
        ${user.email}
        </div>
      </div>
    </div>
    
    <div class="column">
      <div><i class="fas fa-map-marker-alt"></i>
      ${user.location.city} ${user.location.state}
      </div>
    </div>

    <div class="column">
      <div><i class="far fa-calendar"></i></div>
      ${user.dob.age}
      ${user.dob.date}
    </div>

    <div class="content padding">
      <button class="button is-danger" onclick="singOut()">
        Sair
      </button>
    </div>
    `
}

//DOU OUTRO FETCH PARA ACESSAR OUTRO RECURSO DA API, aqui estamos testando o botão 'testar api'
const testarApi = () =>{
    fetch("https://lais-api-reprograma.herokuapp.com/resource", {
        headers: {
            'Accept' : 'application/json',
            'Content-type' : 'applocation/json',
            //Autorização para acessar recurso
            'Authorization' : `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(result => alert("SUCESSO"))
    .catch(erro => alert("erroooow"))
}

//limpar nosso localStorage e mandar o usuario para tela de login
const singOut = () => {
    localStorage.clear()
    window.location.href = "index.html"
}

checkUser()

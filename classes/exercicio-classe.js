class Usuario {
    constructor(email, senha){
        this.email = email;
        this.senha = senha;
    }

    ehAdmin(){
        if (this.admin){
            console.log('é admin.')
        }
    }
}

class Admin extends Usuario{
    
    constructor(email,senha){
        super(email,senha); 
        this.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.ehAdmin());
console.log(Adm1.ehAdmin());
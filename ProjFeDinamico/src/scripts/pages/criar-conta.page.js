import { UserPost } from "../services/user.service.js"

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const criarConta = async (event) => {
    event.preventDefault()
    const fd = new FormData(signup)
    const response = await UserPost(fd)

    console.log(response);
    if(response.status === 200) {
        console.log("CADASTROU");
        window.open('#login', '_self')
    }    
}


const events = () => {
    signup.addEventListener('submit', criarConta)
}

export const CriarConta = () => {

    // style="color: #e83e0f;   background-color: #F5F5F5;"
    signup.innerHTML = (`
    
        <style>
        
        @import url('./src/styles/cadastro.css');
        </style>
        <div class="container-cadastro">
        <div class="logo">
        <img src="./assets/logo.png" alt="a melhor logo - ps bianca ama o fábio">
        </div>
        <label for="input_nome">Nome</label>
        <input type="text" name="nome" placeholder="Digite seu nome" id="input_nome">
        <label for="input_username">Usuário</label>
        <input type="text" name="email" placeholder="Digite seu nome de usuário" id="input_username">
        <label for="input_senha">Senha</label>
        <input type="password" name="senha" placeholder="Digite sua senha" id="input_senha">
        <div class="btn-criar-conta">
        <button>Criar conta</button>
        </div>
        <p class="texto-chamativo-cadastro">
        Já possui conta? 
        <a href="/#login" target="_self" class="link-login">Entrar</a>
        </p>
        </div>
    
        `)

    events()
    return signup
}
import { AuthPost } from "../services/auth.service.js"

const login = document.createElement('form')
login.setAttribute('id', 'p-login')


const entrar = async (event) => {
    event.preventDefault()
    const fd = new FormData(login)
    const response = await AuthPost(fd)

    console.log(response);
    if(response.status === 200) {
        const {token, ...user} = response.data
         sessionStorage.setItem('@user', JSON.stringify(user))
         sessionStorage.setItem('@token', token)

        window.open('#contatos', '_self')
    }
    // if(response.status !== 200) window.alert('Deu ruim')
    // else window.alert('Deu bom!')

    // const json = await response.json()
    // console.log(json);

    
}


const events = () => {
    login.addEventListener('submit', entrar)
}

export const Login = () => {
    login.innerHTML = (`

    <style>
        
    @import url('./src/styles/login.css');

    </style>

    <div class="container-login">

    <div class="logo">
    <img src="./assets/logo.png" alt="a melhor logo - ps bianca ama o fábio">
    </div>

    <label for="input_username">Usuário ou email</label>
    <input type="text" name="email" placeholder="Digite seu nome de usuário" id="input_username">

    <label for="input_senha">Senha</label>
    <input type="password" name="senha" placeholder="Digite sua senha" id="input_senha">

    <div class="btn-entrar-conta">
    <button>Entrar</button>
    </div>
        
    <p class="texto-chamativo-login">
        Não possui conta? 
        <a href="/#criar-conta" target="_self" class="link-cadastro">Cadastre-se</a>
    </p>

        </div>
    `)

    events()
    return login
}

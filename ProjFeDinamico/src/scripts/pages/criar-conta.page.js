import { UserPost } from "../services/user.service.js"

const signup = document.createElement('form')
signup.setAttribute('id', 'p-signup')

const recuperarEComprimirFoto = async () => {
    return new Promise((resolve, reject) => {
        const compress = new Compress()
        const upload = signup.querySelector('input[type="file"]')
        const files = [...upload.files]
    
        const options = {
            size: 2,
            quality: 0.75,
            maxWidth: 300,
            maxHeight: 300,
            resize: true,
            rotate: false,
        }
    
        compress.compress(files, options)
            .then((data) => resolve(data[0]))
            .catch(() => reject(null))
    })
}

const criarConta = async (event) => {
    event.preventDefault()

    const fd = new FormData(signup)

    // const foto = await recuperarEDevolverBase64()
    // if (foto) fd.append('foto', foto)
    
    const foto = await recuperarEComprimirFoto()
    if (foto) fd.append('foto', foto.data)

    const response = await UserPost(fd)

    console.log(response);
    if (response.status === 200) {
        console.log("CADASTROU");
        window.open('#login', '_self')
    }
}

const events = () => {
    signup.addEventListener('submit', criarConta)
    // const inputFoto = signup.querySelector('input[type="file"]')
    // inputFoto.addEventListener('input', imagemParaBase64)
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

        <label for="input_username">Usuário ou email</label>
        <input type="text" name="email" placeholder="Digite seu nome de usuário" id="input_username">

        <label for="input_senha">Senha</label>
        <input type="password" name="senha" placeholder="Digite sua senha" id="input_senha">

        <label for="input_senha">Foto</label>
        <input type="file" accept="image/*" name="foto" placeholder="Foto">

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

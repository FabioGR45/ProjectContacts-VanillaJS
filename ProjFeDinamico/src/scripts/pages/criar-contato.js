import { Header } from "./../components/header.component.js"
import { ContactPost } from "../services/contact.service.js"

const root = document.getElementById('root')
const createcontact = document.createElement('form')
createcontact.setAttribute('id', 'p-createcontact')

const adicionarContato = async (event) => {
    event.preventDefault()
    const fd = new FormData(createcontact)

    const response = await ContactPost(fd)
    console.log(fd);

    console.log(response);
    if(response.status === 200) {
        console.log("CADASTROU");
        window.open('#contatos', '_self')
    }    
}

const events = () => {
    createcontact.addEventListener('submit', adicionarContato)
}


export const CriarContato = () => {
    const header = Header()
    root.append(header) 

    createcontact.innerHTML = (`
        <input type="text" name="nome" placeholder="Nome">
        <input type="text" name="apelido" placeholder="Apelido">
        <input type="email" name="email" placeholder="E-mail">
        <input type="text" name="tipo" placeholder="tipo">
        <input type="text" name="numero" placeholder="numero">
        <button>Criar contato</button>
    `)


    events()

    root.append(createcontact) 

    return createcontact
}
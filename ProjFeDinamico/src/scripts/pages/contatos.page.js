import { Header } from "./../components/header.component.js"
import { UserPost } from "../services/user.service.js"
import { ContactGet } from "../services/contact.service.js"

const root = document.getElementById('root')
const contacts = document.createElement('div')
contacts.setAttribute('id', 'p-contatos')
const todosContatos = document.createElement('div')


const adicionarContato = (event) => {
    event.preventDefault()
    window.open('#criar-contato ', '_self')
}

/*const contatoDetalhado = (event) => {
    event.preventDefault()
    window.open('#contato-detalhado ', '_self')
}*/


const events = () => {
    contacts.addEventListener('click', adicionarContato)
    //contacts.addEventListener('click', contatoDetalhado)
}


export const Contatos = async () => {
    const header = Header()
    root.append(header)

    const constatos = await ContactGet()
    
    console.log(constatos);
    
    contacts.innerHTML = `

    <style>
        
    @import url('./src/styles/contatos.css');

    </style>

    <div class = "container-contato"> 

    <div class="logo">
    <img src="./assets/logo.png" alt="logo">
    </div>

    <div class = "btn-buscar">
    <input type="text" name="busca" placeholder="Pesquise o contato" id="buscar">
    <button id="btn-buscar">Buscar</button>
    </div>
    
    <div class="btn-adicionar-contato" >
    <button id="btn-criar">Adicionar contato</button>
    </div>
    
    </div>
    `
    const ordenarContatos = constatos.data.sort((a, b) => {
        return a.nome.localeCompare(b.nome)
    })

    console.log(ordenarContatos)

    ordenarContatos.forEach((contato) => {
        todosContatos.innerHTML += (`
            
            <div class = "btn-contato">
            <button  id="btn-criar">${contato.nome}</button>
            <img src="data:image/jpeg;base64,${contato.foto}" />
            </div>
            <hr>
        `)
    })

    events()

    root.append(contacts)
    root.append(todosContatos)


    return contacts
}
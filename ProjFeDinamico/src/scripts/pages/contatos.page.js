import { Header } from "./../components/header.component.js"
import { UserPost } from "../services/user.service.js"
import { ContactGet } from "../services/contact.service.js"

const root = document.getElementById('root')
const contacts = document.createElement('form')
contacts.setAttribute('id', 'p-contatos')

const adicionarContato = (event) => {
    event.preventDefault()
    window.open('#criar-contato ', '_self')
}

const events = () => {
    contacts.addEventListener('click', adicionarContato)
}

export const Contatos = async () => {
    const header = Header()
    root.append(header)

    const constatos = await ContactGet()
    console.log(constatos);

    console.log("oi")

    contacts.innerHTML = `
    <button>Adicionar contato</button>
    `

    const ordenarContatos = constatos.data.sort((a, b) => {
        return a.nome.localeCompare(b.nome)
    })

    console.log(ordenarContatos)

    ordenarContatos.forEach((contato) => {
        contacts.innerHTML += (`
            <h1>${contato.nome}</h1>
            <img src="data:image/jpeg;base64,${contato.foto}"/>
            <hr />
        `)
    })

    events()

    root.append(contacts)
    return contacts
}
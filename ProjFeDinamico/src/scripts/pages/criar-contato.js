import { ContactPost } from "../services/contact.service.js"
import { Header } from "../components/header.component.js"


const contact = document.createElement('form')
contact.setAttribute('id', 'p-criar-contato')

const voltar = document.createElement('button')
        voltar.setAttribute('type', 'button')
        voltar.innerText = 'Voltar'
    contact.appendChild(voltar)

const nome = document.createElement('input')
    nome.setAttribute('type', 'text')
    nome.setAttribute('name', 'nome')
    nome.setAttribute('placeholder', 'Nome')
    contact.appendChild(nome)

    const apelido = document.createElement('input')
    apelido.setAttribute('type', 'text')
    apelido.setAttribute('name', 'apelido')
    apelido.setAttribute('placeholder', 'Apelido')
    contact.appendChild(apelido)

    const email = document.createElement('input')
    email.setAttribute('type', 'text')
    email.setAttribute('name', 'email')
    email.setAttribute('placeholder', 'E-mail')
    contact.appendChild(email)

    const addEndereco = document.createElement('button')
    addEndereco.setAttribute('type', 'button')
    addEndereco.innerText = 'Adicionar endereço'
    contact.appendChild(addEndereco)

    const logradouro = document.createElement('input')
        logradouro.setAttribute('type', 'name')
        logradouro.setAttribute('name', 'logradouro')
        logradouro.setAttribute('placeholder', 'Logradouro')

        const cidade = document.createElement('input')
        cidade.setAttribute('type', 'name')
        cidade.setAttribute('name', 'cidade')
        cidade.setAttribute('placeholder', 'Cidade')

        const estado = document.createElement('input')
        estado.setAttribute('type', 'name')
        estado.setAttribute('name', 'estado')
        estado.setAttribute('placeholder', 'Estado')
        

        const cep = document.createElement('input')
        cep.setAttribute('type', 'name')
        cep.setAttribute('name', 'cep')
        cep.setAttribute('placeholder', 'CEP')

const pais = document.createElement('input')
        pais.setAttribute('type', 'name')
        pais.setAttribute('name', 'pais')
        pais.setAttribute('placeholder', 'País')

        const addTelefone = document.createElement('button')
        addTelefone.setAttribute('type', 'button')
        addTelefone.innerText = 'Adicionar telefone'
    contact.appendChild(addTelefone)

    // Primeiro numero de telefone

    const telefone1 = document.createElement('select')
    telefone1.setAttribute('name', 'tipo1')
    const telefone2 = document.createElement('select')
    telefone2.setAttribute('name', 'tipo2')
    const telefone3 = document.createElement('select')
    telefone3.setAttribute('name', 'tipo3')

    const casa1 = document.createElement('option')
    casa1.setAttribute('value', 'casa')
    casa1.innerText = "Casa"
    const celular1 = document.createElement('option')
    celular1.setAttribute('value', 'celular')
    celular1.innerText = "Celular"
    const trabalho1 = document.createElement('option')
    trabalho1.setAttribute('value', 'trabalho')
    trabalho1.innerText = "Trabalho"

    const numero1 = document.createElement('input')
    numero1.setAttribute('type', 'tel')
    numero1.setAttribute('name', 'numero1')
    numero1.setAttribute('placeholder', 'Número de telefone')

    telefone1.appendChild(casa1)
    telefone1.appendChild(celular1)
    telefone1.appendChild(trabalho1)

    // Segundo numero de telefone

    const casa2 = document.createElement('option')
    casa2.setAttribute('value', 'casa')
    casa2.innerText = "Casa"
    const celular2 = document.createElement('option')
    celular2.setAttribute('value', 'celular')
    celular2.innerText = "Celular"
    const trabalho2 = document.createElement('option')
    trabalho2.setAttribute('value', 'trabalho')
    trabalho2.innerText = "Trabalho"

    const numero2 = document.createElement('input')
    numero2.setAttribute('type', 'tel')
    numero2.setAttribute('name', 'numero2')
    numero2.setAttribute('placeholder', 'Número de telefone')

    telefone2.appendChild(casa2)
    telefone2.appendChild(celular2)
    telefone2.appendChild(trabalho2)

    // Terceiro numero de telefone

    const casa3 = document.createElement('option')
    casa3.setAttribute('value', 'casa')
    casa3.innerText = "Casa"
    const celular3 = document.createElement('option')
    celular3.setAttribute('value', 'celular')
    celular3.innerText = "Celular"
    const trabalho3 = document.createElement('option')
    trabalho3.setAttribute('value', 'trabalho')
    trabalho3.innerText = "Trabalho"

    const numero3 = document.createElement('input')
    numero3.setAttribute('type', 'tel')
    numero3.setAttribute('name', 'numero3')
    numero3.setAttribute('placeholder', 'Número de telefone')

    telefone3.appendChild(casa3)
    telefone3.appendChild(celular3)
    telefone3.appendChild(trabalho3)

    // Notas

    const notas = document.createElement('textarea')
    notas.setAttribute('type', 'text')
    notas.setAttribute('name', 'notas')
    notas.setAttribute('placeholder', 'Obs')
    contact.appendChild(notas)



    const addContato = document.createElement('button')
    addContato.innerText = 'Adicionar contato'
    contact.appendChild(addContato)


/* const recuperarEComprimirFoto = async () => {
    return new Promise((resolve, reject) => {
        const compress = new Compress()
        const upload = contact.querySelector('input[type="file"]')
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
} */

const criarContato = async (event) => {
    console.log("chegou aqui")
    event.preventDefault()

    const fd = new FormData(contact)

    //const foto = await recuperarEComprimirFoto()
    //if (foto) fd.append('foto', foto.data)

    const telefones = []
    for (let [chave, valor] of fd) {
        // verifico se é um campo que possui chave com nome "numero" incluso e se o valor do numero foi preenchido
        if (chave.includes('numero') && valor) {

            // pega o numero que tem no fim do 'name' numero (pega tudo após 6 caracteres)
            const num = chave.substring(6)

            telefones.push({
                tipo: fd.get('tipo' + num),
                numero: fd.get('numero' + num)
            })

            // deleta a chave original, já que foi adicionado no array
            fd.delete('tipo' + num)
            fd.delete('numero' + num)
        }
    }
if(enderecoTrue){
    const endereco = {
        logradouro: fd.get('logradouro'),
        cidade: fd.get('cidade'),
        estado: fd.get('estado'),
        cep: fd.get('cep'),
        pais: fd.get('pais')
    }

        // converte por ser um objeto
        fd.append('endereco', JSON.stringify(endereco))

        // deleto as propriedade de fd pois foi colocado no objeto endereço
        fd.delete('logradouro')
        fd.delete('cidade')
        fd.delete('estado')
        fd.delete('cep')
        fd.delete('pais')
}





    // verifica se existe telefone
    if (telefones.length > 0) {
        // apenda ele no form data convertendo pra string para não chegar quebrado na service
        fd.append('telefones', JSON.stringify(telefones))
    }

    const response = await ContactPost(fd)

    console.log(response);
    if (response.status === 200) {
        console.log("CADASTROU CONTATO");
        window.open('#contatos', '_self')
        contact.reset()
    }
}

var enderecoTrue = false;



function liberarEndereco(){
    if(!enderecoTrue){
        
        contact.appendChild(logradouro)
        addEndereco.after(logradouro)
    
        contact.appendChild(cidade)
        logradouro.after(cidade)

        contact.appendChild(estado)
        cidade.after(estado)
    
        contact.appendChild(cep)
        estado.after(cep)
    
        contact.appendChild(pais)
        cep.after(pais)

        enderecoTrue = true
    }
    else{
        contact.removeChild(logradouro)
        contact.removeChild(cidade)
        contact.removeChild(estado)
        contact.removeChild(cep)
        contact.removeChild(pais)
        enderecoTrue = false
    }
    
}

var contagemTelefones = 0

function liberarTelefone(){

    switch(contagemTelefones){
        case 0: 
        contact.appendChild(telefone1)
        contact.appendChild(numero1)
        addTelefone.after(telefone1)
        telefone1.after(numero1)
        contagemTelefones++
        break;
        case 1: 
        contact.appendChild(telefone2)
        contact.appendChild(numero2)
        numero1.after(telefone2)
        telefone2.after(numero2)
        contagemTelefones++
        break;
        case 2: contact.appendChild(telefone3)
        contact.appendChild(numero3)
        numero2.after(telefone3)
        telefone3.after(numero3)
        contagemTelefones++
        break; 
        default: window.alert("Não é possível adicionar mais telefones")
        break;
    }

}

function voltarContatos(){
    window.open('#contatos', '_self')
    contact.reset()
}

const events = () => {
    contact.addEventListener('submit', criarContato)
    addEndereco.addEventListener('click', liberarEndereco)
    addTelefone.addEventListener('click', liberarTelefone)
    voltar.addEventListener('click', voltarContatos)
}

export const CriarContato = () => {
    const header = Header()
    root.append(header)

    //const tituloNome = document.createElement('p')
    //tituloNome.innerText('Dados pessoais')
    //contact.appendChild(tituloNome)
    

    events()
    return contact
}


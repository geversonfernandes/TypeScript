import Validators from "./validators/validators"
import { UserData, APIResponse, LoginData } from "./interfaces/interfaces"

class EmailInput extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: 'open' })   
        const input = document.createElement('input')
        shadow.appendChild(input)
        input.id = 'userEmail'
        input.addEventListener('change', () => {
            const emailInstance = new Validators.EmailValidator('')
            try {
                if(emailInstance.regex.test(input.value)){
                    console.log('O tipo está correto')
                } else throw new Error("O tipo está errado")
            } catch (error) {
                input.value = ''
                console.log(error)
            }
        })
    }
}

class NameInput extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: 'open' })   
        const input = document.createElement('input')
        shadow.appendChild(input)
        input.id = 'userName'
        input.addEventListener('change', () => {
            const nameInstance = new Validators.NameValidator('')
            try {
                if(nameInstance.regex.test(input.value)){
                    console.log('O tipo está correto')
                } else throw new Error("O tipo está errado")
            } catch (error) {
                input.value = ''
                console.log(error)
            }
        })
    }
}

class PasswordInput extends HTMLElement{
    constructor(){
        super()
        const shadow = this.attachShadow({ mode: 'open' })   
        const input = document.createElement('input')
        shadow.appendChild(input)
        input.id = 'userPassword'
        input.addEventListener('change', () => {
            const passwordInstance = new Validators.PasswordValidator('')
            try {
                if(passwordInstance.regex.test(input.value)){
                    console.log('O tipo está correto')
                } else throw new Error("O tipo está errado")
            } catch (error) {
                input.value = ''
                console.log(error)
            }
        })
    }
}

customElements.define('email-input', EmailInput)
customElements.define('name-input', NameInput)
customElements.define('password-input', PasswordInput)

// SELECT DOS BOTÕES
const btnRegister : any = document.querySelector('#btn-register')
const btnLogin : any = document.querySelector('#btn-login')
const btnUpdate : any = document.querySelector('#btn-update')

//VALIDANDO DADOS DA REQUEST
const url = 'localhost:8080'
btnRegister.addEventListener('click', validateRegister)
async function validateRegister(){

    const selectEmailInput : any = document.querySelector('email-input')
    const email = selectEmailInput.shadowRoot.children[0].value
    const selectNameInput : any = document.querySelector('name-input')
    const nameUser = selectNameInput.shadowRoot.children[0].value
    const selectPasswordInput : any = document.querySelector('password-input')
    const password = selectPasswordInput.shadowRoot.children[0].value

    const bodyValue = {
        'email': email,
        'name': nameUser,
        'password': password
    }

    if(!email || !nameUser || !password){
        console.log('Algum campo está vazio');
    } else {
        const data = await request<APIResponse<UserData>>(`${url}/accounts`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(bodyValue)})
    }
}

btnLogin.addEventListener('click', validateLogin)
async function validateLogin(){

    const selectEmailInput : any = document.querySelector('email-input')
    const email = selectEmailInput.shadowRoot.children[0].value
    const selectPasswordInput : any = document.querySelector('password-input')
    const password = selectPasswordInput.shadowRoot.children[0].value
    const bodyValue = {
        'email': email,
        'password': password
    }

    if(!email || !password){
        console.log('Algum campo está vazio');
    } else {
        const data = await request<APIResponse<LoginData>>(`${url}/accounts/login`, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(bodyValue)})
    }
}

btnUpdate.addEventListener('click', validateUpdate)
async function validateUpdate(){

    const selectEmailInput : any = document.querySelector('email-input')
    const email = selectEmailInput.shadowRoot.children[0].value
    const selectNameInput : any = document.querySelector('name-input')
    const nameUser = selectNameInput.shadowRoot.children[0].value
    const selectPasswordInput : any = document.querySelector('password-input')
    const password = selectPasswordInput.shadowRoot.children[0].value
    const bodyValue = {
        'email': email,
        'name': nameUser,
        'password': password
    }

    if(!email || !nameUser || !password){
        console.log('Algum campo está vazio');
    } else {
        const data = await request<APIResponse<UserData>>(`${url}/accounts`, {
        method: 'PATCH',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(bodyValue)})
    }
}

async function request<T>(url: string, config: RequestInit = {}): Promise<T>{
    const response = await fetch(url, config)
    return await response.json()
}
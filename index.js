"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Validator {
    constructor(data) {
        this.data = data;
    }
}
class StringValidator extends Validator {
    constructor(data) {
        if (typeof data === "string") {
            super(data);
            console.log(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
class NumberValidator extends Validator {
    constructor(data) {
        if (typeof data === "number") {
            super(data);
            console.log(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
class BooleanValidator extends Validator {
    constructor(data) {
        if (typeof data === "boolean") {
            super(data);
            console.log(data);
        }
        else {
            throw new Error("O tipo está errado");
        }
    }
}
// const test1 = new StringValidator("Testando String.")
// const test2 = new NumberValidator(10)
// const test3 = new BooleanValidator("Forçando Erro.")
class RegexValidator extends StringValidator {
    get regex() {
        return new RegExp('');
    }
}
class EmailValidator extends RegexValidator {
    get regex() {
        return new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim);
    }
}
class PasswordValidator extends RegexValidator {
    get regex() {
        return new RegExp(/^\w{1,}$/gim);
    }
}
class NameValidator extends RegexValidator {
    get regex() {
        return new RegExp(/^([a-z]{1,})([ ]{1}[a-z]{1,} ){0,}$/gim);
    }
}
class EmailInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const input = document.createElement('input');
        shadow.appendChild(input);
        input.id = 'userEmail';
        input.addEventListener('change', () => {
            const emailInstance = new EmailValidator('');
            try {
                if (emailInstance.regex.test(input.value)) {
                    console.log('O tipo está correto');
                }
                else
                    throw new Error("O tipo está errado");
            }
            catch (error) {
                input.value = '';
                console.log(error);
            }
        });
    }
}
class NameInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const input = document.createElement('input');
        shadow.appendChild(input);
        input.id = 'userName';
        input.addEventListener('change', () => {
            const nameInstance = new NameValidator('');
            try {
                if (nameInstance.regex.test(input.value)) {
                    console.log('O tipo está correto');
                }
                else
                    throw new Error("O tipo está errado");
            }
            catch (error) {
                input.value = '';
                console.log(error);
            }
        });
    }
}
class PasswordInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const input = document.createElement('input');
        shadow.appendChild(input);
        input.id = 'userPassword';
        input.addEventListener('change', () => {
            const passwordInstance = new PasswordValidator('');
            try {
                if (passwordInstance.regex.test(input.value)) {
                    console.log('O tipo está correto');
                }
                else
                    throw new Error("O tipo está errado");
            }
            catch (error) {
                input.value = '';
                console.log(error);
            }
        });
    }
}
customElements.define('email-input', EmailInput);
customElements.define('name-input', NameInput);
customElements.define('password-input', PasswordInput);
// SELECT DOS BOTÕES
const btnRegister = document.querySelector('#btn-register');
const btnLogin = document.querySelector('#btn-login');
const btnUpdate = document.querySelector('#btn-update');
//VALIDANDO DADOS DA REQUEST
const url = 'localhost:8080';
btnRegister.addEventListener('click', validateRegister);
function validateRegister() {
    return __awaiter(this, void 0, void 0, function* () {
        const selectEmailInput = document.querySelector('email-input');
        const email = selectEmailInput.shadowRoot.children[0].value;
        const selectNameInput = document.querySelector('name-input');
        const nameUser = selectNameInput.shadowRoot.children[0].value;
        const selectPasswordInput = document.querySelector('password-input');
        const password = selectPasswordInput.shadowRoot.children[0].value;
        const bodyValue = {
            'email': email,
            'name': nameUser,
            'password': password
        };
        if (!email || !nameUser || !password) {
            console.log('Algum campo está vazio');
        }
        else {
            const data = yield request(`${url}/accounts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyValue)
            });
        }
    });
}
btnLogin.addEventListener('click', validateLogin);
function validateLogin() {
    return __awaiter(this, void 0, void 0, function* () {
        const selectEmailInput = document.querySelector('email-input');
        const email = selectEmailInput.shadowRoot.children[0].value;
        const selectNameInput = document.querySelector('name-input');
        const nameUser = selectNameInput.shadowRoot.children[0].value;
        const selectPasswordInput = document.querySelector('password-input');
        const password = selectPasswordInput.shadowRoot.children[0].value;
        const bodyValue = {
            'email': email,
            'password': password
        };
        if (!email || !password) {
            console.log('Algum campo está vazio');
        }
        else {
            const data = yield request(`${url}/accounts/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyValue)
            });
        }
    });
}
btnUpdate.addEventListener('click', validateUpdate);
function validateUpdate() {
    return __awaiter(this, void 0, void 0, function* () {
        const selectEmailInput = document.querySelector('email-input');
        const email = selectEmailInput.shadowRoot.children[0].value;
        const selectNameInput = document.querySelector('name-input');
        const nameUser = selectNameInput.shadowRoot.children[0].value;
        const selectPasswordInput = document.querySelector('password-input');
        const password = selectPasswordInput.shadowRoot.children[0].value;
        const bodyValue = {
            'email': email,
            'name': nameUser,
            'password': password
        };
        if (!email || !nameUser || !password) {
            console.log('Algum campo está vazio');
        }
        else {
            const data = yield request(`${url}/accounts`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyValue)
            });
        }
    });
}
function request(url, config = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, config);
        return yield response.json();
    });
}

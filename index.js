"use strict";
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
// const test1 = new StringValidator("Testando String.");
// const test2 = new NumberValidator(10);
// const test3 = new BooleanValidator("Forçando Erro.");
class EmailInput extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        const input = document.createElement('input');
        shadow.appendChild(input);
        input.setAttribute('id', 'inputUser');
        input.addEventListener('change', () => {
            const inputUser = shadow.getElementById('inputUser');
            new RegexValidator(inputUser.value);
        });
    }
}
customElements.define('email-input', EmailInput);
class RegexValidator extends StringValidator {
    constructor(data) {
        super(data);
        this.re = new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim);
        if (this.re.test(data)) {
            console.log('Formato correto');
        }
        else
            throw new Error("O formato está errado");
    }
}

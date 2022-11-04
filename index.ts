class Validator{
    public data: number | string | boolean | void | null | undefined
    constructor(data: number | string | boolean | void | null | undefined){
        this.data = data
    }
}

class StringValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "string") {
            super(data);
            console.log(data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class NumberValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "number") {
            super(data);
            console.log(data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

class BooleanValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "boolean") {
            super(data);
            console.log(data);
        } else {
            throw new Error("O tipo está errado");
        }
    }
}

const test1 = new StringValidator("Testando String.");
const test2 = new NumberValidator(10);
const test3 = new BooleanValidator("Forçando Erro.");

class EmailInput extends HTMLElement{
    constructor(){
        super()
    }

    input = document.createElement('input')
    root = document.createElement('div').appendChild(this.input)
    shadow = this.attachShadow({ mode: 'open' }).appendChild(this.root)
}

customElements.define('email-input', EmailInput)

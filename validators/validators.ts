class Validator{
    public data: number | string | boolean | void | null | undefined
    constructor(data: number | string | boolean | void | null | undefined){
        this.data = data
    }
}

class StringValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "string") {
            super(data)
            console.log(data)
        } else {
            throw new Error("O tipo está errado")
        }
    }
}

class NumberValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "number") {
            super(data)
            console.log(data)
        } else {
            throw new Error("O tipo está errado")
        }
    }
}

class BooleanValidator extends Validator {
    constructor(data: any) {
        if (typeof data === "boolean") {
            super(data)
            console.log(data)
        } else {
            throw new Error("O tipo está errado")
        }
    }
}

abstract class RegexValidator extends StringValidator{
    public get regex() : RegExp{
        return new RegExp('')
    }
}

class EmailValidator extends RegexValidator{
    public override get regex(): RegExp {
        return new RegExp(/^(\w{1,}@\w{1,}\.(\w{3})(\.\w{2}){0,1})$/gim)
    }
}

class PasswordValidator extends RegexValidator{
    public override get regex(): RegExp {
        return new RegExp(/^\w{1,}$/gim)
    }
}

class NameValidator extends RegexValidator{
    public override get regex(): RegExp {
        return new RegExp(/^([a-z]{1,})([ ]{1}[a-z]{1,} ){0,}$/gim)
    }
}

export default {StringValidator, NumberValidator, BooleanValidator, RegexValidator, EmailValidator, PasswordValidator, NameValidator}
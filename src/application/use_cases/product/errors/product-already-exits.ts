

export class ProductAlreadyExists extends Error {

    constructor(){
        super("O produto em questão já existe")
    }

}

export class TitleError extends Error{

    constructor(){
        super("Título inválido. Envie um título entre 10 a 150 caracteres")
    }

}
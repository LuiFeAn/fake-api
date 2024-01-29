import { TitleError } from "./errors/title";


export class Title{


    constructor(private title: string){

        if( !(title.length >= 1 && title.length <= 150) ){
            
            throw new TitleError();

        }

    }

    get value(){
        return this.title;
    }

}
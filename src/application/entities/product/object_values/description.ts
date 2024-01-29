
export class Description{

    constructor(private description: string){

        if( !(description.length >= 1 && description.length <= 400) ){

            throw new DescriptionError();

        }

    }

    get value(){
        return this.description
    }

}

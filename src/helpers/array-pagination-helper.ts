
interface IItems {
    [key: string]: any
}

export function arrayPagination(items: IItems,itemsPerPage: number = 10){

    const pages = Math.ceil( items.length / itemsPerPage );

    const pagination = [];

    let offsetInit = 0; 
    
    let offsetEnd = itemsPerPage;

    for(let i = 0; i < pages; i++){

        pagination.push(items.slice(offsetInit,offsetEnd));

        offsetInit += itemsPerPage; 
        
        offsetEnd += itemsPerPage;

    }

    return pagination

}

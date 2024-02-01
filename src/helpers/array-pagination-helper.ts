
interface IItems {
    [key: string]: any
}

export function arrayPagination<T>(items: T [],itemsPerPage: number = 10): T[][]{

    itemsPerPage = (
        itemsPerPage === 0 ? 1 : itemsPerPage
    );

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

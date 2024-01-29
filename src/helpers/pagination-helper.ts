import { IPagnation } from "src/application/common/interfaces/pagination";

export function pagination({
    page,
    quanty,
    totalResource
}: IPagnation & {
    totalResource: number
}){

    const totalResourcePerPage = Math.ceil(totalResource / quanty);

    return {
        currentPage: +( page > 1 ? page - 1 : 0 ),
        currentQuanty: +quanty,
        total: +totalResourcePerPage,
    }

}
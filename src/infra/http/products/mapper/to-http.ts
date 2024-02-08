import { Product } from "src/domain/entities/product/product";

export function productToHttp(product: Product){

    return {
        id: product.id,
        title: product.title.value,
        description: product.title.value,
        value: product.value.value.toLocaleString("pt-br",{
            currency:"BRL",
            style:"currency"
        })
    }

}
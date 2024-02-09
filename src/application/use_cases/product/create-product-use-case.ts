import { AbstractProductRepository } from "src/application/repositories/interfaces/product-repository";
import { ProductAlreadyExists } from "./errors/product-already-exits";
import { productFactory } from "src/domain/factories/product";
import { Injectable } from "@nestjs/common";

export interface ICreateProductRequest {
    
    title: string
    description: string
    value: number
}

@Injectable()
export class CreateProductUseCase {

    constructor(
        private readonly productRepository: AbstractProductRepository
    ){}

    async execute(product: ICreateProductRequest){

        const productExists = await this.productRepository.findProductsByTitle(product.title);

        if( productExists ){

            throw new ProductAlreadyExists();
        }

        const productInstance = productFactory({
            title: product.title,
            description: product.description,
            value: product.value
        })

        await this.productRepository.create(productInstance);

        return productInstance;

    }

}
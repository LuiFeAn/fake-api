import { Injectable } from "@nestjs/common";
import { Description } from "src/application/entities/product/object_values/description";
import { Title } from "src/application/entities/product/object_values/title";
import { Value } from "src/application/entities/product/object_values/value";
import { Product } from "src/application/entities/product/product";
import { AbstractProductRepository } from "src/application/repositories/interfaces/product-repository";
import { ProductAlreadyExists } from "./errors/product-already-exits";

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

        const productInstance = new Product({
            title: new Title(product.title),
            description: new Description(product.description),
            value: new Value(product.value)
        });;

        await this.productRepository.create(productInstance);

        return productInstance;

    }

}
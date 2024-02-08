import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { NestJsCreateProductUseCase } from "src/infra/use_cases/create-product-use-case";
import { NestJsFindManyProdutsUseCase } from "src/infra/use_cases/find-many-products-use-case";

@Module({
    controllers:[ProductsController],
    providers:[
        NestJsCreateProductUseCase,
        NestJsFindManyProdutsUseCase,
    ]
})
export class ProductsModule{}
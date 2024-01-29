import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { CreateProductUseCase } from "src/application/use_cases/product/create-product-use-case";
import { FindManyProductsUseCase } from "src/application/use_cases/product/find-many-product-use-case";

@Module({
    controllers:[ProductsController],
    providers:[
        CreateProductUseCase,
        FindManyProductsUseCase,
    ]
})
export class ProductsModule{}
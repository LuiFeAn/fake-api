import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsGateWay } from "src/infra/gateways/products/products.gateway";
import { CreateProductUseCase } from "src/application/use_cases/product/create-product-use-case";
import { FindManyProductsUseCase } from "src/application/use_cases/product/find-many-product-use-case";

@Module({
    controllers:[ProductsController],
    providers:[
        CreateProductUseCase,
        FindManyProductsUseCase,
        ProductsGateWay,
    ]
})
export class ProductsModule{}
import { Module } from "@nestjs/common";
import { ProductsGateWay } from "./products.gateway";
import { FindManyProductsUseCase } from "src/application/use_cases/product/find-many-product-use-case";

@Module({
    imports:[],
    providers:[
        FindManyProductsUseCase,
        ProductsGateWay
    ]
})
export class ProductsGateWayModule{}
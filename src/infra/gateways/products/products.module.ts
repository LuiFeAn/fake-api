import { Module } from "@nestjs/common";
import { ProductsGateWay } from "./products.gateway";
import { NestJsFindManyProdutsUseCase } from "src/infra/use_cases/find-many-products-use-case";

@Module({
    imports:[],
    providers:[
        NestJsFindManyProdutsUseCase,
        ProductsGateWay
    ]
})
export class ProductsGateWayModule{}
import { Body, ConflictException, Controller, Delete, Post, Get, Query, UnauthorizedException } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-product.dto";
import { ProductToHttp } from "./mapper/to-http";
import { ProductAlreadyExists } from "src/application/use_cases/product/errors/product-already-exits";
import { FindManyProductsDto } from "./dtos/find-many-products.dto";
import { NoProducts } from "src/application/use_cases/product/errors/no-products";
import { ProductsGateWay } from "src/infra/gateways/products/products.gateway";
import { CreateProductUseCase } from "src/application/use_cases/product/create-product-use-case";
import { FindManyProductsUseCase } from "src/application/use_cases/product/find-many-product-use-case";
@Controller("products")
export class ProductsController {

    constructor(
        private readonly createProduct: CreateProductUseCase,
        private readonly findManyProducts: FindManyProductsUseCase,
        private readonly productGateway: ProductsGateWay,
    ){}


    @Get()
    async all(@Query() params: FindManyProductsDto){

        try{

            const result = await this.findManyProducts.execute(params);

            const mappedHttProducts = ProductToHttp.many(result.products)

            return {
                ...result,
                products: mappedHttProducts
            }


        }catch(err){
            
            if( err instanceof NoProducts ){

                throw new UnauthorizedException(err.message)

            }


        }

    }

    @Post()
    async create(@Body() createProductDto: CreateProductDto){
        
       try{

            const product = await this.createProduct.execute(createProductDto);

            this.productGateway.server.emit("new-product");

            return ProductToHttp.one(product);

       }catch(err){

            console.log(err)

            if( err instanceof ProductAlreadyExists ){

                throw new ConflictException(err.message);

            }

       }

    }

    @Delete()
    async _delete(){

        try{



        }catch(err){


        }

    }

}
import { Body, ConflictException, Controller, Delete, Post, Get, Query, UnauthorizedException } from "@nestjs/common";
import { CreateProductDto } from "./dtos/create-product.dto";
import { productToHttp } from "./mapper/to-http";
import { ProductAlreadyExists } from "src/application/use_cases/product/errors/product-already-exits";
import { FindManyProductsDto } from "./dtos/find-many-products.dto";
import { NoProducts } from "src/application/use_cases/product/errors/no-products";
import { NestJsCreateProductUseCase } from "src/infra/use_cases/create-product-use-case";
import { NestJsFindManyProdutsUseCase } from "src/infra/use_cases/find-many-products-use-case";
@Controller("products")
export class ProductsController {

    constructor(
        private readonly createProduct: NestJsCreateProductUseCase,
        private readonly findManyProducts: NestJsFindManyProdutsUseCase,
    ){}


    @Get()
    async all(@Query() params: FindManyProductsDto){

        try{

            const result = await this.findManyProducts.execute(params);

            const mappedHttProducts = result.products.map(productToHttp);

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

            return productToHttp(product);

       }catch(err){
        

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
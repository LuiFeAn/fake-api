import { Body, ConflictException, Controller, Delete, Post, Get, Param, Query, UnauthorizedException } from "@nestjs/common";
import { CreateProductUseCase } from "src/application/use_cases/product/create-product-use-case";
import { CreateProductDto } from "./dtos/create-product.dto";
import { productToHttp } from "./mapper/to-http";
import { ProductAlreadyExists } from "src/application/use_cases/product/errors/product-already-exits";
import { FindManyProductsUseCase } from "src/application/use_cases/product/find-many-product-use-case";
import { FindManyProductsDto } from "./dtos/find-many-products.dto";
import { NoProducts } from "src/application/use_cases/product/errors/no-products";
@Controller("products")
export class ProductsController {

    constructor(
        private readonly createProduct: CreateProductUseCase,
        private readonly findManyProducts: FindManyProductsUseCase,
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
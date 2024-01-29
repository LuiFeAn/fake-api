import { IPagnation } from "src/application/common/interfaces/pagination";
import { Product } from "../../src/application/entities/product/product";
import { AbstractProductRepository, IFindManyCountOptions } from "src/application/repositories/interfaces/product-repository";
import { arrayPagination } from "src/helpers/array-pagination-helper";

export class InMemoryProductsRepository implements AbstractProductRepository {

    public products: Product [] = []

    async create(product: Product): Promise<void> {

        this.products.push(product);

    }

   async findManyCount(options: IFindManyCountOptions): Promise<number> {
    
        return this.products?.length ?? 0;

   }

    async findProductsByTitle(productTitle: string): Promise<Product []> {
        
        const products = this.products.filter( product => (
            product.title.value.includes(productTitle)
        ));

        if( !products?.length ){

            return null
            
        }

        return products;

    }
    
    async findOneByProductId(productId: string): Promise<Product> {
        
        const product = this.products.find( product => (
            product.id === productId
        ));

        if( !product ){

            return null

        }

        return product;

    }

   async findMany({
    page,
    quanty,
    title
   }: IFindManyCountOptions & IPagnation): Promise<Product[]> {

        let products: Product [];

        if( title ){

            products = this.findProductsByTitle(title);

        }   

        if( !title ){

            products = arrayPagination(this.products,quanty);

        }


   }

}
import { IProduct } from "src/application/entities/product/interfaces/product";
import { Product } from "src/application/entities/product/product";
import { IPagnation } from "src/application/common/interfaces/pagination";

export interface  IUpdateProductProps extends IProduct{}

export interface IFindManyCountOptions {

    title: string

}

type IFindManyCountOptionsWithPagination = IFindManyCountOptions & IPagnation;

export interface IFindManyOptions extends IFindManyCountOptionsWithPagination {}

export abstract class AbstractProductRepository {

    abstract create( product: Product ): Promise<void>
    abstract findProductsByTitle( productTitle: string ): Promise<Product [] | null>
    abstract findManyCount(options: IFindManyCountOptions): Promise<number>
    abstract findOneByProductId( productId: string ): Promise<Product>
    abstract findMany(options: IFindManyCountOptionsWithPagination): Promise<Product[]>

}
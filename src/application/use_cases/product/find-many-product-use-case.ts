import { AbstractProductRepository } from 'src/application/repositories/interfaces/product-repository';
import { IFindManyProductsRequest } from './interfaces/find-many-products-request';
import { pagination } from 'src/helpers/pagination-helper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindManyProductsUseCase {
  constructor(private readonly productRepository: AbstractProductRepository) {}

  async execute({ page, quanty, title }: IFindManyProductsRequest) {
    const productsCount = await this.productRepository.findManyCount({
      title,
    });

    const { currentPage, currentQuanty, total } = pagination({
      page,
      quanty,
      totalResource: productsCount,
    });

    const products = await this.productRepository.findMany({
      page: currentPage,
      quanty: currentPage,
      title,
    });

    return {
      currentPage,
      currentQuanty,
      total,
      products,
    };
  }
}

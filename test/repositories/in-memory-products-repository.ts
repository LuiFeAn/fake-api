import { IPagnation } from 'src/application/common/interfaces/pagination';
import { Product } from '../../src/domain/entities/product/product';
import {
  AbstractProductRepository,
  IFindManyCountOptions,
} from 'src/application/repositories/interfaces/product-repository';

export class InMemoryProductsRepository implements AbstractProductRepository {
  public products: Product[] = [];

  async create(product: Product): Promise<void> {
    this.products.push(product);
  }

  async findOne(id: string) {
    const product = this.products.find((product) => product.id === id);

    return product;
  }

  async findManyCount(options: IFindManyCountOptions): Promise<number> {
    return this.products.length;
  }

  async findProductsByTitle(productTitle: string): Promise<Product[]> {
    const products = this.products.filter((product) =>
      product.title.value.includes(productTitle),
    );

    if (!products?.length) {
      return null;
    }

    return products;
  }

  async findOneByProductId(productId: string): Promise<Product> {
    const product = this.products.find((product) => product.id === productId);

    if (!product) {
      return null;
    }

    return product;
  }

  async findMany({
    page,
    quanty,
    title,
  }: IFindManyCountOptions & IPagnation): Promise<Product[]> {
    return this.products;
  }
}
